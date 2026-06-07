"use client";
import { motion } from "framer-motion";
import {
  School,
  Users,
  HeartHandshake,
  ShieldCheck,
  BriefcaseBusiness,
  HandHelping,
} from "lucide-react";


const partners = [
  {
    icon: School,
    title: "Schools & Education",
    description:
      "Working alongside local schools and educators to support learning, mentoring and positive outcomes for children and young people.",
  },
  {
    icon: HeartHandshake,
    title: "Community Organisations",
    description:
      "Collaborating with local groups and charities to extend support, share resources and strengthen community wellbeing.",
  },
  {
    icon: HandHelping,
    title: "Food Banks & Support Services",
    description:
      "Partnering with food banks and community support organisations to help individuals and families facing hardship.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Wellbeing Services",
    description:
      "Connecting people with appropriate wellbeing, counselling and support services when additional assistance is needed.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Local Professionals",
    description:
      "Drawing on the expertise of skilled volunteers and professionals who contribute knowledge, mentoring and practical support.",
  },
  {
    icon: Users,
    title: "Volunteers & Community Leaders",
    description:
      "Empowering dedicated volunteers who give their time and talents to help programmes reach more people across the community.",
  },
];


export const CommunityPartnerships = () => {
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
            Working Together
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
            Strong Partnerships,
            <span className="block text-primary">
              Greater Community Impact
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Lasting change happens when communities work together.
            Through collaboration with local organisations, schools,
            professionals and volunteers, we can reach more people and
            provide more effective support.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Featured Statement */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              rounded-[2.5rem]
              bg-gradient-to-br
              from-primary
              to-[#3b139e]
              p-8
              text-white
              md:p-10
            "
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
              Community Collaboration
            </p>

            <h3
              className="
                mt-4
                text-4xl
                font-black
                leading-tight
                tracking-[-0.04em]
              "
            >
              Better Outcomes Through Partnership
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              We believe no single organisation can meet every need
              alone. By working together with trusted partners, we help
              reduce barriers, improve access to support and create
              opportunities for individuals and families to flourish.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-black">Education</div>
                <div className="mt-1 text-sm text-white/75">
                  Learning & mentoring
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-black">Support</div>
                <div className="mt-1 text-sm text-white/75">
                  Practical assistance
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-black">Community</div>
                <div className="mt-1 text-sm text-white/75">
                  Connection & inclusion
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partner Cards */}

          <div className="grid gap-6 sm:grid-cols-2">
            {partners.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <motion.div
                  key={partner.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    rounded-[2rem]
                    border border-primary/10
                    bg-white
                    p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-primary/10
                    "
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mt-5 text-xl font-black">
                    {partner.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {partner.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-primary/5
              p-8 text-center
              md:p-10
            "
          >
            <p
              className="
                mx-auto
                max-w-4xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Together with our partners, volunteers and supporters, we
              are helping build stronger communities where people feel
              supported, valued and empowered to reach their full
              potential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};