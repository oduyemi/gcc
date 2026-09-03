"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programmes";
import { ProgrammeDialog } from "./ProgramDialog";
import { useState } from "react";
import type { CommunityProgramme } from "@/data/programmes";

export const CommunityProgrammes = () => {
  const [selectedProgram, setSelectedProgram] =
    useState<CommunityProgramme | null>(null);

  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              bg-primary/10
              px-4
              py-2
              text-[10px]
              font-black
              uppercase
              tracking-[0.25em]
              text-primary

              sm:text-[11px]
            "
          >
            Our Programmes
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.05em]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Creating Lasting
            <span className="block text-primary">
              Community Impact
            </span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-muted-foreground

              sm:text-lg
              sm:leading-8
            "
          >
            Supporting children, young people, families and vulnerable
            individuals through practical programmes that transform lives.
          </p>
        </motion.div>

        <Tabs defaultValue="music" className="mt-12 sm:mt-14">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 scrollbar-none sm:mx-0 sm:overflow-visible sm:px-0">
            <TabsList
              className="
                flex
                h-auto
                w-max
                min-w-full
                justify-start
                gap-2
                bg-transparent

                sm:w-full
                sm:flex-wrap
                sm:justify-center
              "
            >
              {programs.map((program) => {
                const Icon = program.icon;

                return (
                  <TabsTrigger
                    key={program.value}
                    value={program.value}
                    className="
                      shrink-0
                      rounded-2xl
                      px-4
                      py-3
                      text-xs
                      font-bold

                      data-[state=active]:bg-primary
                      data-[state=active]:text-white

                      sm:px-5
                      sm:text-sm
                    "
                  >
                    <Icon className="mr-2 h-4 w-4" />

                    {program.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {programs.map((program) => (
            <TabsContent
              key={program.value}
              value={program.value}
              className="mt-8 sm:mt-10"
            >
              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-primary/10
                  bg-white
                  shadow-xl

                  sm:rounded-[2.5rem]
                "
              >
                <div
                  className="
                    grid
                    gap-6
                    p-4

                    sm:gap-8
                    sm:p-6

                    lg:grid-cols-[1.2fr_0.9fr]
                    lg:p-8
                  "
                >
                  {/* ==================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-[300px]
                      overflow-hidden
                      rounded-[1.5rem]

                      sm:h-[420px]
                      sm:rounded-[2rem]

                      lg:h-[500px]
                    "
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                    <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary shadow-lg backdrop-blur">
                        {program.label}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center px-2 pb-3 sm:px-2 sm:pb-2 lg:px-2">
                    <h3
                      className="
                        text-2xl
                        font-black
                        leading-tight
                        tracking-[-0.04em]

                        sm:text-3xl

                        lg:text-4xl
                      "
                    >
                      {program.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-muted-foreground

                        sm:mt-5
                        sm:text-base
                        sm:leading-8

                        lg:text-[15px]
                      "
                    >
                      {program.description}
                    </p>

                    {/* Stats */}

                    <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
                      {program.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl bg-primary/5 p-3 text-center sm:p-4"
                        >
                          <div className="text-lg font-black text-primary sm:text-xl">
                            {stat.value}
                          </div>

                          <div className="mt-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}

                    <div className="mt-6 space-y-2 sm:mt-8 sm:space-y-3">
                      {program.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary sm:h-2 sm:w-2" />

                          <span className="text-xs leading-6 text-muted-foreground sm:text-sm sm:leading-7">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}

                    <button
                      type="button"
                      onClick={() => setSelectedProgram(program)}
                      className="
                        group
                        mt-7
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        bg-primary
                        px-5
                        py-3
                        text-xs
                        font-bold
                        text-white
                        shadow-sm
                        transition-all

                        hover:gap-3
                        hover:shadow-lg

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary
                        focus-visible:ring-offset-2

                        sm:mt-8
                        sm:px-6
                        sm:text-sm
                      "
                    >
                      Explore This Programme

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <ProgrammeDialog
        program={selectedProgram}
        programs={programs}
        open={!!selectedProgram}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProgram(null);
          }
        }}
        onProgramChange={setSelectedProgram}
      />
    </section>
  );
};