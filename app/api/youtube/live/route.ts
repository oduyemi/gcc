import { NextResponse } from "next/server";

type YoutubeSearchResponse = {
  items?: Array<{
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      publishedAt: string;
      thumbnails?: {
        high?: { url: string };
        medium?: { url: string };
        default?: { url: string };
      };
    };
  }>;
};


export async function GET() {
  try {
    const apiKey = process.env.YT_API_KEY;
    const channelId = process.env.YT_LIVESTREAM_CHANNEL_ID;

    if (!apiKey || !channelId) {
      return NextResponse.json(
        {
          error: "Missing YouTube configuration.",
        },
        { status: 500 }
      );
    }

    const params = new URLSearchParams({
      part: "snippet",
      channelId,
      eventType: "live",
      type: "video",
      maxResults: "1",
      key: apiKey,
    });

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${params}`,
        {
          cache: "no-store",
        }
    );

    if (!response.ok) {
      throw new Error(
        `YouTube API error: ${response.status}`
      );
    }

    const data: YoutubeSearchResponse =
      await response.json();

    const liveVideo = data.items?.find(
      (item) => item?.id?.videoId
    );

    if (!liveVideo) {
      return NextResponse.json({
        isLive: false,
      });
    }

    return NextResponse.json({
      isLive: true,
      videoId: liveVideo.id.videoId,
      title: liveVideo.snippet.title,
      thumbnail:
        liveVideo.snippet.thumbnails?.high?.url ||
        liveVideo.snippet.thumbnails?.medium?.url ||
        liveVideo.snippet.thumbnails?.default?.url,
      publishedAt:
        liveVideo.snippet.publishedAt,
    });
  } catch (error) {
    console.error(
      "YouTube livestream error:",
      error
    );

    return NextResponse.json(
      {
        isLive: false,
        error:
          "Unable to fetch livestream status.",
      },
      {
        status: 500,
      }
    );
  }
}