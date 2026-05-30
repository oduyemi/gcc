import { PodcastHero } from "@/components/podcast/Hero";
import { ListenAnywhere } from "@/components/podcast/ListenAnywhere";
import { PodcastPlayer } from "@/components/podcast/Player";





export default function Podcasts() {
  return (
    <main>
      <PodcastHero />
      <PodcastPlayer />
      <ListenAnywhere />
    </main>
  );
}
