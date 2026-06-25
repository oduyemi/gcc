"use client";
import { useYouTubeVideos } from "@/hook/UseYouTubeVideo";
import { SermonCard } from "./Card";

interface SermonsGridProps {
  searchTerm: string;
}

export function SermonsGrid({
  searchTerm,
}: SermonsGridProps) {
  const videos = useYouTubeVideos();

  const filteredVideos = videos.filter((video) =>
    video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {filteredVideos.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No sermons found.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredVideos.map((video) => (
              <SermonCard
                key={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                videoId={video.id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}