"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Music4,
  Users,
  Megaphone,
  Tent,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    title: "Fellowship & Community",
    icon: Users,
    image: "/images/youth/fellowship.jpg",
    items: [
      "Youth Hangouts",
      "Game Nights",
      "Sports Activities",
      "Social Gatherings",
    ],
  },
  {
    title: "Worship & Prayer",
    icon: Music4,
    image: "/images/youth/worship.jpg",
    items: [
      "Worship Nights",
      "Prayer Meetings",
      "Bible Study Sessions",
      "Encounter Gatherings",
    ],
  },
  {
    title: "Outreach & Service",
    icon: Megaphone,
    image: "/images/youth/outreach.jpg",
    items: [
      "Community Outreach",
      "Evangelism Projects",
      "School Initiatives",
      "Volunteer Opportunities",
    ],
  },
  {
    title: "Retreats & Conferences",
    icon: Tent,
    image: "/images/youth/conference.jpg",
    items: [
      "Youth Conferences",
      "Retreat Weekends",
      "Leadership Camps",
      "Special Events",
    ],
  },
];

export const YouthMinistryActivities = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Life Together
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
            More Than A Meeting
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Youth ministry is about friendships, faith, fun, growth and
            creating unforgettable moments together.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div
                  className="
                    group
                    overflow-hidden
                    rounded-[2.5rem]
                    border border-primary/10
                    bg-white
                    shadow-sm
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div
                      className="
                        absolute left-6 top-6
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        bg-white
                        shadow-lg
                      "
                    >
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white">
                        {activity.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-3">
                      {activity.items.map((item) => (
                        <div
                          key={item}
                          className="
                            rounded-xl
                            border border-primary/10
                            bg-primary/[0.03]
                            px-4 py-3
                            text-sm
                            font-medium
                          "
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div
                      className="
                        mt-6
                        flex items-center gap-2
                        font-bold
                        text-primary
                      "
                    >
                      Explore Activities

                      <ArrowRight
                        className="
                          h-4 w-4
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-10
            "
          >
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-3xl font-black md:text-4xl">
                Faith. Friendship. Purpose.
              </h3>

              <p className="mt-5 text-muted-foreground">
                From worship nights and conferences to outreach projects
                and community events, there's always something happening
                within our youth ministry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};