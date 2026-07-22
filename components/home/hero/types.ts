export interface HeroSlide {
    image: string;
    eyebrow: string;
    title: string;
    subtitle?: string;
    description: string;
    scripture?: {
      verse: string;
      reference: string;
    };
    primaryButton: {
      label: string;
      href: string;
    };
    secondaryButton: {
      label: string;
      href: string;
    };
    badge: string;
    service: string;
    floatingTitle: string;
    floatingDescription: string;
  }