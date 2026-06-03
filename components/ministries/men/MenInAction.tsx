"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Users,
  BriefcaseBusiness,
  Trophy,
  HeartHandshake,
  Shield,
} from "lucide-react";

const activities = [
  {
    value: "fathers-day",
    label: "Father's Day",
    icon: Shield,
    title: "Celebrating Godly Fathers",
    description:
      "Special services and celebrations honouring fathers and father figures while encouraging men to lead their families with faith, wisdom and integrity.",

    featuredImage: "/images/men/fathers1.jpg",

    gallery: [
      "/images/men/fathers2.jpg",
      "/images/men/fathers3.jpg",
      "/images/men/fathers4.jpg",
    ],

    stats: [
      { label: "Families", value: "50+" },
      { label: "Annual Event", value: "1x" },
      { label: "Focus", value: "Family" },
    ],
  },

  {
    value: "gatherings",
    label: "Gatherings",
    icon: Users,
    title: "Brotherhood & Fellowship",
    description:
      "Regular men's meetings focused on discipleship, prayer, accountability, encouragement and building meaningful relationships.",

    featuredImage: "/images/men/gathering1.jpg",

    gallery: [
      "/images/men/gathering2.jpg",
      "/images/men/gathering3.jpg",
      "/images/men/gathering4.jpg",
    ],

    stats: [
      { label: "Meetings", value: "Monthly" },
      { label: "Focus", value: "Growth" },
      { label: "Community", value: "Strong" },
    ],
  },

  {
    value: "business",
    label: "Business & Leadership",
    icon: BriefcaseBusiness,
    title: "Leadership Beyond Sunday",
    description:
      "Equipping men with practical leadership skills, mentorship opportunities and networking that strengthens both ministry and career development.",

    featuredImage: "/images/men/business1.jpg",

    gallery: [
      "/images/men/business2.jpg",
      "/images/men/business3.jpg",
      "/images/men/business4.jpg",
    ],

    stats: [
      { label: "Mentorship", value: "Ongoing" },
      { label: "Leadership", value: "Practical" },
      { label: "Networking", value: "Active" },
    ],
  },

  {
    value: "sports",
    label: "Sports",
    icon: Trophy,
    title: "Fun, Fitness & Friendship",
    description:
      "Sports and recreational activities create opportunities for connection, teamwork and authentic friendships outside the church walls.",

    featuredImage: "/images/men/sport1.jpg",

    gallery: [
      "/images/men/sport2.jpg",
      "/images/men/sport3.jpg",
      "/images/men/sport4.jpg",
    ],

    stats: [
      { label: "Activities", value: "Seasonal" },
      { label: "Focus", value: "Fitness" },
      { label: "Community", value: "Fun" },
    ],
  },

  {
    value: "outreach",
    label: "Outreach",
    icon: HeartHandshake,
    title: "Serving Our Community",
    description:
      "Demonstrating God's love through practical service, outreach initiatives and support for those in need within our communities.",

    featuredImage: "/images/men/outreach1.jpg",

    gallery: [
      "/images/men/outreach2.jpg",
      "/images/men/outreach3.jpg",
      "/images/men/outreach4.jpg",
    ],

    stats: [
      { label: "Impact", value: "Local" },
      { label: "Service", value: "Regular" },
      { label: "Mission", value: "Love" },
    ],
  },
];

export const MenInAction = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            Men In Action
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
            Brotherhood Beyond Sunday
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Discover how men connect, grow, lead and serve throughout the year.
          </p>
        </motion.div>

        <Tabs
          defaultValue="fathers-day"
          className="mt-14"
        >
          {/* Tabs */}

          <TabsList
            className="
              flex w-full flex-wrap justify-center
              gap-2 bg-transparent h-auto
            "
          >
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <TabsTrigger
                  key={activity.value}
                  value={activity.value}
                  className="
                    rounded-2xl
                    px-5 py-3
                    data-[state=active]:bg-primary
                    data-[state=active]:text-white
                  "
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {activity.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {activities.map((activity) => (
            <TabsContent
              key={activity.value}
              value={activity.value}
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
                <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] p-8">
                  {/* Image */}

                  <div className="relative">
                    <div className="relative h-[450px] overflow-hidden rounded-[2rem]">
                      <Image
                        src={activity.featuredImage}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary shadow-lg">
                        Faith • Brotherhood • Leadership
                      </div>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="flex flex-col justify-center">
                    <h3 className="text-4xl font-black tracking-[-0.04em]">
                      {activity.title}
                    </h3>

                    <p className="mt-5 leading-8 text-muted-foreground">
                      {activity.description}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {activity.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="
                            rounded-2xl
                            bg-primary/5
                            p-4
                            text-center
                          "
                        >
                          <div className="text-2xl font-black text-primary">
                            {stat.value}
                          </div>

                          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gallery Strip */}

                <div className="grid gap-4 p-8 pt-0 md:grid-cols-3">
                  {activity.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="
                        relative
                        h-56
                        overflow-hidden
                        rounded-[1.5rem]
                      "
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="
                          object-cover
                          transition-transform duration-700
                          hover:scale-105
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};