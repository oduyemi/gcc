"use client";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";


const pillars = [
  {
    icon: Users,
    title: "Community Inclusion",
    description:
      "Creating welcoming spaces where people of every background can connect, participate and thrive.",
  },
  {
    icon: GraduationCap,
    title: "Education & Development",
    description:
      "Providing learning support, mentoring and skills development that help individuals reach their full potential.",
  },
  {
    icon: HeartHandshake,
    title: "Practical Support",
    description:
      "Responding to real-life needs through community programmes, outreach initiatives and family support services.",
  },
  {
    icon: ShieldCheck,
    title: "Wellbeing & Opportunity",
    description:
      "Helping individuals build confidence, resilience and positive pathways for the future.",
  },
];

export const CommunityMission = () => {
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
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
            Our Mission
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
            Building Stronger People,
            <span className="block text-primary">
              Stronger Communities
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Our work provides access to educational support, mentoring, 
            counselling, skills development, and community engagement 
            activities for people facing challenges such as unemployment, 
            social isolation, and limited access to opportunity. All 
            community outreach programmes are delivered on a 
            non-faith-based basis and are open to all, regardless of 
            background, belief, or circumstance.
            <br /><br />
            We actively promote social inclusion, diversity, and 
            community cohesion by creating safe, supportive spaces where 
            people from different backgrounds can connect, learn, and grow. 
            Working in partnership with local organisations and professionals, 
            we aim to reduce barriers, strengthen resilience, and support 
            individuals to reach their full potential. At the heart of our mission 
            is a commitment to equality, participation, and meaningful community impact.


          </p>

          <p
            className="
              mt-4
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            All community initiatives are delivered on a non-faith-based
            basis and are open to everyone, regardless of background,
            belief or circumstance.
          </p>
        </motion.div>

        {/* Pillars */}

        {/* <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
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
                  p-7
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
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div> */}

        {/* Bottom Statement */}

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
              bg-white
              p-8 md:p-10
              text-center
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
              Through partnerships with schools, community organisations,
              volunteers and local professionals, we help reduce barriers,
              strengthen resilience and create opportunities that enable
              individuals and families to flourish.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};