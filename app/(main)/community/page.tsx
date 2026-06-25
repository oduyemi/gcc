
import { SupportCommunityCTA } from "@/components/community_impact/CTA";
import ImpactMicroGallery from "@/components/community_impact/Gallery";
import { CommunityImpactHero } from "@/components/community_impact/Hero";
import { CommunityImpactAreas } from "@/components/community_impact/ImpactAreas";
import { CommunityMission } from "@/components/community_impact/Mission";
import { CommunityPartnerships } from "@/components/community_impact/Partnerships";
import { CommunityProgrammes } from "@/components/community_impact/Programs";



export default function Impacto() {
  return (
    <>
      <CommunityImpactHero />
      <CommunityMission />
      <CommunityProgrammes />
      <CommunityImpactAreas />
      <ImpactMicroGallery/>
      <CommunityPartnerships />
      <SupportCommunityCTA />
    </>
  );
}
