"use client";
import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Users } from "lucide-react";



export const CommunityImpactHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[40rem] w-[40rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),
            linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/10
                bg-white
                px-5 py-2
                shadow-lg
              "
            >
              <HeartHandshake className="h-4 w-4 text-primary" />

              <span
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.28em]
                  text-primary
                "
              >
                Community Impact
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              Empowering People.
              <span className="block text-primary">
                Transforming Communities.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto mt-8
                max-w-4xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Global Crossfire Church exists to support and empower 
              individuals and families, particularly young people and 
              those living in deprived and under-resourced communities
              across Thanet and surrounding areas. We respond to social, 
              educational, and well-being needs by delivering inclusive, 
              community-centred programmes that promote confidence, 
              opportunity, and positive life outcomes.


            </p>

            {/* Stats */}

            <div
              className="
                mt-12
                grid gap-4
                sm:grid-cols-3
                max-w-3xl
                mx-auto
              "
            >
              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <Users className="mx-auto h-8 w-8 text-primary" />

                <h3 className="mt-3 text-3xl font-black">
                  5,000+
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Lives Impacted
                </p>
              </div>

              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <Sparkles className="mx-auto h-8 w-8 text-primary" />

                <h3 className="mt-3 text-3xl font-black">
                  6+
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Active Programmes
                </p>
              </div>

              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <HeartHandshake className="mx-auto h-8 w-8 text-primary" />

                <h3 className="mt-3 text-3xl font-black">
                  Year-Round
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Community Support
                </p>
              </div>
            </div>

            {/* Bottom Statement */}

            <div
              className="
                mx-auto mt-12
                max-w-3xl
                rounded-[2rem]
                border border-primary/10
                bg-primary/5
                px-8 py-6
              "
            >
              <p className="text-base font-medium leading-8">
                Creating safe, inclusive spaces where people from every
                background can connect, learn, grow and reach their
                full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};