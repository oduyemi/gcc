"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Music4,
  Users,
  PartyPopper,
  BookOpen,
  HeartHandshake,
  PackageOpen,
} from "lucide-react";

const programs = [
  {
    value: "music",
    label: "Music Training",
    icon: Music4,
    title: "Musical Instrument Training Programme",
    description:
      // "Providing children and young people aged 9–20 with structured musical instrument training, helping them build confidence, creativity, discipline and practical skills through weekly lessons and instrument loans.",
      "The Musical Instrument Training Programme, part of the Thanet Community Inclusion Programme, provides young people aged 9–20 with structured lessons in instruments such as guitar, keyboard, drums, and saxophone. Instruments are loaned for home practice, helping remove financial barriers. The programme builds confidence, creativity, discipline, and positive engagement, with additional funding enabling more young people to take part.",
    image: "/images/musictraining.jpg",

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
      // "Creating safe, inclusive spaces where young people and young adults can develop confidence, practical skills and positive connections through mentoring, employability support and personal development activities.",
      "The Youth and Young Adults Engagement Programme, part of the Thanet Initiative Community Programme, supports young people aged 14–25 from diverse and under-represented backgrounds. It provides safe, inclusive spaces to build confidence, develop practical and employability skills, access creative training and counselling, and connect with others. Through regular community engagement, we identify those needing additional support and work with partner organisations to provide appropriate guidance and early intervention.",
    image: "/images/youthengagement.jpeg",

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
      // "An annual summer event bringing together families, children and young people through free activities that strengthen relationships, encourage wellbeing and build community cohesion.",
        "The Community Fun Day Project is an annual summer event that brings together local families, children, and young people through free, inclusive activities that promote social interaction, community cohesion, and well-being. Activities include bouncy castles, arts and crafts, stationery and books, face and nail painting, hair braiding, and a free barbecue meal for all attendees. The event provides a safe, welcoming environment where people of all backgrounds can connect, enjoy shared experiences, and build stronger community relationships, supporting positive outcomes for children and families.",
    image: "/images/funn.jpeg",

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
      // "Helping primary and secondary school pupils improve literacy, numeracy and learning confidence through after-school support, homework clubs and intensive summer programmes.",
      "The Maths & English Learning Support Programme, part of the Thanet Community Inclusion Programme, supports primary and secondary school pupils who may be struggling academically, including those from disadvantaged backgrounds and young people with English as an additional language. Through after-school homework clubs, targeted learning sessions, and an intensive summer programme, trained volunteers help develop literacy, numeracy, confidence, and positive learning habits. The programme improves engagement in education and supports better outcomes for children and young people. All donations and contributions directly support the delivery and development of this programme.",
    image: "/images/support.jpg",

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
      // "Providing practical assistance to individuals and families facing financial hardship through vouchers, gift cards and personalised community support.",
      "The Show Your Love Project, part of the Thanet Community Inclusion Programme, supports individuals and families facing financial hardship through food vouchers and gift cards. Delivered by trained volunteers, including outreach support, the project works with community partners to ensure help reaches those most in need and is tailored to individual circumstances. All donations and contributions directly support the delivery and growth of this project.",
    image: "/images/care.jpg",

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
    title: "Food Bank Support",
    description:
      // "Working alongside local food banks and community organisations to provide food, toiletries and seasonal essentials to individuals experiencing hardship or food insecurity.",
      "Our charity partners with local food banks and community organisations to support people experiencing food insecurity, homelessness, or financial hardship. Through food donations and seasonal essentials such as toiletries and warm clothing, we help ensure vital support reaches those most in need.",
    image: "/images/eat.jpeg",

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

export const CommunityProgrammes = () => {
  return (
    <section className="bg-white px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center
              rounded-full
              bg-primary/10
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Our Programmes
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-5xl
            "
          >
            Creating Lasting
            <span className="block text-primary">
              Community Impact
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Supporting children, young people, families and vulnerable
            individuals through practical programmes that transform lives.
          </p>
        </motion.div>

        <Tabs
          defaultValue="music"
          className="mt-14"
        >
          <TabsList
            className="
              flex h-auto w-full flex-wrap
              justify-center gap-2 bg-transparent
            "
          >
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <TabsTrigger
                  key={program.value}
                  value={program.value}
                  className="
                    rounded-2xl
                    px-5 py-3
                    data-[state=active]:bg-primary
                    data-[state=active]:text-white
                  "
                  style={{ fontWeight:"700" }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {program.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {programs.map((program) => (
            <TabsContent
              key={program.value}
              value={program.value}
              className="mt-10"
            >
              <div
                className="
                  overflow-hidden
                  rounded-[2.5rem]
                  border border-primary/10
                  bg-white
                  shadow-xl
                "
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[1.3fr_0.9fr]">
                  {/* Image */}

                  <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}

                  <div className="flex flex-col justify-center">
                    <h3 className="text-4xl font-black tracking-[-0.04em]">
                      {program.title}
                    </h3>

                    <p className="mt-5 leading-8 text-muted-foreground">
                      {program.description}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {program.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="
                            rounded-2xl
                            bg-primary/5
                            p-4
                            text-center
                          "
                        >
                          <div className="text-xl font-black text-primary">
                            {stat.value}
                          </div>

                          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 space-y-3">
                      {program.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-2 h-2 w-2 rounded-full bg-primary" />

                          <span className="text-sm leading-7 text-muted-foreground">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};