"use client";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Hospital,
  Flower2,
  Users,
  MessageSquareHeart,
} from "lucide-react";
import { FaShieldHeart } from "react-icons/fa6";

const services = [
  {
    icon: HeartHandshake,
    title: "Prayer Requests",
    description:
      "Share confidential prayer needs and allow our team to stand with you in faith.",
  },
  {
    icon: FaShieldHeart,
    title: "Intercessory Prayer",
    description:
      "Dedicated prayer support for individuals, families, ministries and special situations.",
  },
  {
    icon: Hospital,
    title: "Hospital Visits",
    description:
      "Pastoral visits, encouragement and prayer during illness, treatment and recovery.",
  },
  {
    icon: Flower2,
    title: "Bereavement Support",
    description:
      "Compassionate care and prayer for individuals and families experiencing loss.",
  },
  {
    icon: Users,
    title: "Family Care",
    description:
      "Support, encouragement and guidance for families navigating life's seasons.",
  },
  {
    icon: MessageSquareHeart,
    title: "Encouragement Ministry",
    description:
      "Ongoing follow-up, care calls and spiritual encouragement throughout the week.",
  },
];

export const PrayerServices = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
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
              tracking-[0.25em]
              uppercase
              text-primary
            "
          >
            Ministry Services
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              text-foreground
              md:text-5xl
            "
          >
            How We Serve & Support
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Practical care, prayer support and compassionate ministry for every
            season of life.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-8
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-primary/[0.03]
                    via-transparent
                    to-[#AF3800]/[0.03]
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                    "
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Large Decorative Icon */}

                <Icon
                  className="
                    absolute
                    bottom-4
                    right-4
                    h-24
                    w-24
                    text-primary/[0.04]
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-16
            max-w-5xl
            rounded-[2.5rem]
            border border-primary/10
            bg-gradient-to-br
            from-primary/[0.03]
            via-white
            to-[#AF3800]/[0.03]
            p-8 md:p-10
            text-center
          "
        >
          <h3 className="text-3xl font-black">
            Caring Beyond The Church Walls
          </h3>

          <p className="mt-5 max-w-3xl mx-auto leading-8 text-muted-foreground">
            Whether through prayer, encouragement, visitation or practical
            support, our heart is to reflect Christ's compassion and ensure that
            no one walks through life's challenges alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};