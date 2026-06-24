import { JoinMissionCTA } from "@/components/missions/CTA";
import { ScriptureFoundation } from "@/components/missions/Foundation";
import { MissionHero } from "@/components/missions/Hero";
import { MissionImpact } from "@/components/missions/Impact";
import { MissionLocations } from "@/components/missions/Locations";
import MicroGallery from "@/components/missions/MicroGallery";
import { MissionPillars } from "@/components/missions/Pillars";
import { MissionStatement } from "@/components/missions/Statement";


export default function Missions() {
  return (
    <>
      <MissionHero />
      <MissionStatement />
      <MissionPillars />
      <MissionLocations />
      <MicroGallery />
      <MissionImpact />
      <ScriptureFoundation />
      <JoinMissionCTA />
    </>
  );
}
