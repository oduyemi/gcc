import {
    Music4,
    Users,
    PartyPopper,
    BookOpen,
    HeartHandshake,
    PackageOpen,
    type LucideIcon,
  } from "lucide-react";
  
  export type CommunityProgramme = {
    value: string;
    label: string;
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
  
    dialogDescription: string;
    dialogSections: string[];
  
    stats: {
      label: string;
      value: string;
    }[];
  
    highlights: string[];
  };
  
  export const programs: CommunityProgramme[] = [
    {
      value: "music",
      label: "Music Training",
      icon: Music4,
      title: "Musical Instrument Training Programme",
  
      description:
        "The Musical Instrument Training Programme, part of the Thanet Community Inclusion Programme, provides young people aged 9–20 with structured lessons in instruments such as guitar, keyboard, drums, and saxophone. Instruments are loaned for home practice, helping remove financial barriers. The programme builds confidence, creativity, discipline, and positive engagement, with additional funding enabling more young people to take part.",
  
      image: "/images/musictraining.jpg",
  
      dialogDescription:
        "This ongoing programme provides structured musical instrument training for children and young people aged 9–20. Participants learn instruments such as guitar, keyboard, drums and alto saxophone through regular sessions delivered by skilled volunteers.",
  
      dialogSections: [
        "Where possible, instruments are loaned to participants to support home practice. This helps remove financial barriers and gives young people the opportunity to practise and develop their skills outside regular sessions.",
        "The programme develops musical ability while building confidence, creativity, discipline and commitment. It also fosters positive peer interaction and shared achievement, contributing to stronger community bonds.",
      ],
  
      stats: [
        { label: "Age Range", value: "9–20" },
        { label: "Instruments", value: "4+" },
        { label: "Access", value: "Loaned" },
      ],
  
      highlights: [
        "Keyboard, guitar, drums and alto saxophone training",
        "Weekly volunteer-led sessions",
        "Instruments available for home practice",
        "Building creativity, confidence and discipline",
      ],
    },
  
    {
      value: "youth",
      label: "Youth Engagement",
      icon: Users,
      title: "Youth & Young Adults Engagement Programme",
  
      description:
        "The Youth and Young Adults Engagement Programme, part of the Thanet Initiative Community Programme, supports young people aged 14–25 from diverse and under-represented backgrounds. It provides safe, inclusive spaces to build confidence, develop practical and employability skills, access creative training and counselling, and connect with others. Through regular community engagement, we identify those needing additional support and work with partner organisations to provide appropriate guidance and early intervention.",
  
      image: "/images/youthengagement.jpeg",
  
      dialogDescription:
        "This programme supports young people aged 14–25 from diverse and under-represented backgrounds. It provides safe, inclusive spaces where participants can build confidence, develop practical skills and prepare for education, employment and adult life.",
  
      dialogSections: [
        "Activities include interview preparation, job-readiness skills, effective learning strategies, vocal training, photography, mentoring and access to counselling support where appropriate.",
        "We also signpost or refer young people to relevant organisations when additional support is required.",
        "Our Youth and Young People Ambassador Group enables young beneficiaries to contribute ideas, support their peers and help shape activities. This promotes leadership, representation and a sense of belonging within the wider community.",
      ],
  
      stats: [
        { label: "Age Range", value: "14–25" },
        { label: "Support", value: "Ongoing" },
        { label: "Focus", value: "Growth" },
      ],
  
      highlights: [
        "Interview preparation and employability skills",
        "Counselling and mentoring support",
        "Photography and creative development",
        "Community-based engagement activities",
      ],
    },
  
    {
      value: "funday",
      label: "Fun Day",
      icon: PartyPopper,
      title: "Community Fun Day Project",
  
      description:
        "The Community Fun Day Project is an annual summer event that brings together local families, children, and young people through free, inclusive activities that promote social interaction, community cohesion, and well-being. Activities include bouncy castles, arts and crafts, stationery and books, face and nail painting, hair braiding, and a free barbecue meal for all attendees. The event provides a safe, welcoming environment where people of all backgrounds can connect, enjoy shared experiences, and build stronger community relationships, supporting positive outcomes for children and families.",
  
      image: "/images/funn.jpeg",
  
      dialogDescription:
        "The Community Fun Day is a free annual summer event that brings together children, young people and families from across the local community.",
  
      dialogSections: [
        "Activities include bouncy castles, children’s games, arts and crafts, free books and stationery, face and nail painting, hair braiding, music and a free barbecue meal.",
        "The event provides affordable family recreation, reduces social isolation and creates opportunities for people from different backgrounds to connect in a safe, welcoming environment.",
        "It plays a key role in strengthening community cohesion by encouraging interaction, shared enjoyment and positive community identity.",
      ],
  
      stats: [
        { label: "Event", value: "Annual" },
        { label: "Families", value: "Hundreds" },
        { label: "Cost", value: "Free" },
      ],
  
      highlights: [
        "Bouncy castles and games",
        "Arts, crafts and creative activities",
        "Face painting and hair braiding",
        "Free barbecue and refreshments",
      ],
    },
  
    {
      value: "education",
      label: "Learning Support",
      icon: BookOpen,
      title: "Maths & English Learning Support",
  
      description:
        "The Maths & English Learning Support Programme, part of the Thanet Community Inclusion Programme, supports primary and secondary school pupils who may be struggling academically, including those from disadvantaged backgrounds and young people with English as an additional language. Through after-school homework clubs, targeted learning sessions, and an intensive summer programme, trained volunteers help develop literacy, numeracy, confidence, and positive learning habits. The programme improves engagement in education and supports better outcomes for children and young people.",
  
      image: "/images/support.jpg",
  
      dialogDescription:
        "This programme supports primary and secondary school pupils who are struggling academically or are at risk of falling behind. It particularly benefits children from disadvantaged households and pupils for whom English is an additional language.",
  
      dialogSections: [
        "Support is provided through after-school homework clubs, targeted Maths and English sessions, small-group learning and an intensive summer learning programme.",
        "Sessions are delivered by trained volunteers and focus on improving literacy, numeracy, confidence and positive learning habits.",
        "By helping children succeed academically, the programme promotes equal opportunity and long-term community resilience, ensuring that no child is left behind due to circumstances beyond their control.",
      ],
  
      stats: [
        { label: "Subjects", value: "2 Core" },
        { label: "Support", value: "Weekly" },
        { label: "Focus", value: "Achievement" },
      ],
  
      highlights: [
        "Homework clubs",
        "Targeted literacy support",
        "Numeracy development",
        "Summer learning programmes",
      ],
    },
  
    {
      value: "show-love",
      label: "Show Your Love",
      icon: HeartHandshake,
      title: "Show Your Love Project",
  
      description:
        "The Show Your Love Project, part of the Thanet Community Inclusion Programme, supports individuals and families facing financial hardship through food vouchers and gift cards. Delivered by trained volunteers, including outreach support, the project works with community partners to ensure help reaches those most in need and is tailored to individual circumstances.",
  
      image: "/images/care.jpg",
  
      dialogDescription:
        "The Show Your Love Project supports individuals and families experiencing financial hardship. It began during the COVID-19 pandemic and continues in response to ongoing needs among low-income households and people affected by unemployment or reduced income.",
  
      dialogSections: [
        "Practical assistance is provided through food vouchers, gift cards and one-to-one support. Volunteers also travel within the community to reach individuals who may struggle to access services.",
        "Where additional assistance is required, people are signposted or referred to relevant local organisations.",
        "The project promotes dignity, compassion and social connection, helping to reduce isolation and strengthen trust within the community.",
      ],
  
      stats: [
        { label: "Support", value: "Direct" },
        { label: "Approach", value: "Personal" },
        { label: "Reach", value: "Community" },
      ],
  
      highlights: [
        "Food vouchers and gift cards",
        "Family support assistance",
        "Volunteer-led outreach",
        "Partnership-based referrals",
      ],
    },
  
    {
      value: "foodbank",
      label: "Food Bank",
      icon: PackageOpen,
      title: "Food Bank & Essential Items Support",
  
      description:
        "Our charity partners with local food banks and community organisations to support people experiencing food insecurity, homelessness, or financial hardship. Through food donations and seasonal essentials such as toiletries and warm clothing, we help ensure vital support reaches those most in need.",
  
      image: "/images/foodbank.jpg",
  
      dialogDescription:
        "We work closely with local food banks and community food organisations to support individuals and families experiencing food insecurity, homelessness or temporary financial hardship.",
  
      dialogSections: [
        "We regularly contribute food items to local distribution services. During periods of increased need, particularly in winter, we also provide toiletries, personal-care items and warm clothing where possible.",
        "This partnership approach ensures that essential supplies reach those who need them in an efficient, respectful and dignified way.",
        "It also reinforces community cohesion by encouraging collaboration, shared responsibility and collective care for vulnerable residents.",
      ],
  
      stats: [
        { label: "Partners", value: "Local" },
        { label: "Support", value: "Year-Round" },
        { label: "Focus", value: "Essentials" },
      ],
  
      highlights: [
        "Food donations",
        "Toiletries and hygiene supplies",
        "Winter clothing support",
        "Community distribution partnerships",
      ],
    },
  ];