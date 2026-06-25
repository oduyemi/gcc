"use client";

import { useEffect, useState } from "react";

export type LiveStream = {
  isLive: boolean;
  videoId?: string;
  title?: string;
  thumbnail?: string;
  error?: string;
};

export function useLiveStream() {
  const [stream, setStream] = useState<LiveStream>({
    isLive: false,
  });

  const [loading, setLoading] = useState(true);

  const fetchStream = async () => {
    try {
      const response = await fetch(
        "/api/youtube/live",
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch livestream (${response.status})`
        );
      }

      const data = await response.json();

      if (
        typeof data !== "object" ||
        data === null ||
        typeof data.isLive !== "boolean"
      ) {
        throw new Error(
          "Invalid livestream response"
        );
      }

      setStream({
        isLive: data.isLive,
        videoId: data.videoId,
        title: data.title,
        thumbnail: data.thumbnail,
      });
    } catch (error) {
      console.error(
        "Livestream fetch error:",
        error
      );

      setStream({
        isLive: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to fetch livestream",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStream();

    const interval = setInterval(
      fetchStream,
      60_000
    );

    return () => clearInterval(interval);
  }, []);

  return {
    stream,
    loading,
    refresh: fetchStream,
  };
}