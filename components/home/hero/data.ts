import { HeroSlide } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/pastors.png",
    eyebrow: "WELCOME TO GLOBAL CROSSFIRE CHURCH UK",
    title: "Meet Our Senior Pastors",
    subtitle: "Leading People Into The Presence Of God",
    description:
      "Passionate leaders committed to raising people of faith, purpose, prayer, and Kingdom influence through the transforming power of Jesus Christ.",
    scripture: {
      verse: "Until Christ is formed in you.",
      reference: "Galatians 4:19",
    },

    primaryButton: {
      label: "Plan Your Visit",
      href: "/visit",
    },

    secondaryButton: {
      label: "Meet Our Pastors",
      href: "/about",
    },

    badge: "GCC UK",
    service: "Sunday Worship Experience",
    floatingTitle: "Leading With Love",
    floatingDescription:
      "Building people of faith through biblical teaching, passionate worship and the power of the Holy Spirit.",
  },

  {
    image: "/images/hero2.jpg",
    eyebrow: "A HOME FOR EVERY GENERATION",
    title: "A Church Where Everyone Belongs",
    subtitle: "Growing Together In Christ",
    description:
      "Whether you're taking your first steps in faith or seeking a deeper relationship with God, you'll discover genuine community, discipleship, and purpose.",
    scripture: {
      verse: "They devoted themselves to the apostles' teaching and fellowship.",
      reference: "Acts 2:42",
    },

    primaryButton: {
      label: "Plan Your Visit",
      href: "/visit",
    },

    secondaryButton: {
      label: "Explore Ministries",
      href: "/ministries",
    },

    badge: "FAMILY",
    service: "Children • Youth • Adults",
    floatingTitle: "Growing Together",
    floatingDescription:
      "Creating an environment where every generation can flourish in faith and discover God's purpose.",
  },

  {
    image: "/images/hero3.jpg",
    eyebrow: "REACHING OUR WORLD",
    title: "Taking The Gospel Beyond The Walls",
    subtitle: "Revival That Reaches Nations",
    description:
      "Through missions, evangelism, compassionate outreach, and prayer, we are committed to impacting lives with the love and power of Jesus Christ.",
    scripture: {
      verse: "Go into all the world and preach the gospel.",
      reference: "Mark 16:15",
    },

    primaryButton: {
      label: "Explore Missions",
      href: "/missions",
    },

    secondaryButton: {
      label: "Community Impact",
      href: "/community",
    },

    badge: "MISSIONS",
    service: "Local & Global Outreach",
    floatingTitle: "Changing Nations",
    floatingDescription:
      "Serving communities, sharing hope and demonstrating the love of Christ both locally and internationally.",
  },
];