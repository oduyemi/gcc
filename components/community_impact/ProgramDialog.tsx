"use client";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, UsersRound, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { CommunityProgramme } from "@/data/programmes";


interface ProgrammeDetailsDialogProps {
  program: CommunityProgramme | null;
  programs: CommunityProgramme[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProgramChange: (program: CommunityProgramme) => void;
}


export const ProgrammeDialog = ({
  program,
  programs,
  open,
  onOpenChange,
  onProgramChange,
}: ProgrammeDetailsDialogProps) => {
  if (!program) return null;

  const Icon = program.icon;

  const otherPrograms = programs.filter(
    (item) => item.value !== program.value,
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          flex
          h-[100dvh]
          w-full
          max-w-none
          flex-col
          gap-0
          overflow-hidden
          rounded-none
          border-0
          bg-background
          p-0

          sm:h-auto
          sm:max-h-[92vh]
          sm:max-w-5xl
          sm:rounded-[2rem]
          sm:border
        "
      >
        <div
          className="
            sticky
            top-0
            z-50
            flex
            shrink-0
            items-center
            justify-between
            border-b
            bg-background/95
            px-5
            py-4
            backdrop-blur-xl

            sm:hidden
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold">
                {program.label}
              </p>

              <p className="text-[11px] text-muted-foreground">
                Community Programme
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-muted
              text-muted-foreground
              transition
              hover:bg-muted/70
              hover:text-foreground
            "
            aria-label="Close programme details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <section className="px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-[11px]">
                <UsersRound className="h-3.5 w-3.5" />
                Our Community Programmes
              </div>

              <DialogTitle className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Creating opportunities.
                <span className="block text-primary">
                  Strengthening community.
                </span>
              </DialogTitle>

              <DialogDescription className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Global Crossfire Church delivers a wide range of community
                initiatives through the Thanet Community Inclusion Programme,
                supporting children, young people, adults and families across
                Thanet and the surrounding areas.
              </DialogDescription>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-muted/40 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Our Focus
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Educational disadvantage, unemployment, financial
                    hardship, food insecurity and social isolation.
                  </p>
                </div>

                <div className="rounded-2xl border bg-muted/40 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Open to Everyone
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Our community programmes are non-faith-based, inclusive
                    and open to everyone regardless of background or belief.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                A central aim of our work is to strengthen community cohesion
                by creating safe, supportive and accessible opportunities for
                people to learn, connect and thrive together.
              </p>
            </div>
          </section>

          <section className="bg-muted/40 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                <Sparkles className="h-4 w-4" />
                Featured Programme
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border bg-background shadow-sm sm:rounded-[2rem]">
                <div className="relative h-[230px] w-full sm:h-[320px] lg:h-[390px]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-lg backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary shadow-sm">
                      {program.label}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-8 lg:p-10">
                  <h3 className="max-w-3xl text-2xl font-black leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                    {program.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {program.dialogDescription}
                  </p>

                  <div className="mt-6 space-y-4">
                    {program.dialogSections.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-7 text-muted-foreground sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                    {program.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl bg-primary/5 p-3 text-center sm:p-4"
                      >
                        <p className="text-base font-black text-primary sm:text-xl">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.18em]">
                      Programme Highlights
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {program.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl bg-muted/50 p-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                          <span className="text-xs leading-6 text-muted-foreground sm:text-sm">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                  Explore More
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                  Other Community Programmes
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Discover the other ways we support people and strengthen
                  communities across Thanet.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {otherPrograms.map((otherProgram) => {
                  const OtherIcon = otherProgram.icon;

                  return (
                    <button
                      key={otherProgram.value}
                      type="button"
                      onClick={() => onProgramChange(otherProgram)}
                      className="
                        group
                        flex
                        min-h-[76px]
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        bg-background
                        p-3
                        text-left
                        transition-all

                        hover:-translate-y-0.5
                        hover:border-primary/30
                        hover:shadow-md

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary
                        focus-visible:ring-offset-2

                        sm:gap-4
                        sm:p-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-primary/10
                          text-primary
                          transition-transform
                          group-hover:scale-105
                        "
                      >
                        <OtherIcon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold leading-5">
                          {otherProgram.title}
                        </p>

                        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                          {otherProgram.label}
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ==========================================================
              4. WHY OUR WORK MATTERS
          ========================================================== */}

          <section className="bg-primary px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 sm:text-[11px]">
                    Why Our Work Matters
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                    Together, we can build a more connected community.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/80">
                    Many families in Thanet face challenges that limit
                    opportunity — from financial hardship and food insecurity
                    to educational disadvantage and social isolation.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    Our programmes provide targeted support that changes
                    lives: academic help for children, skills development for
                    young people, practical assistance for families in crisis
                    and inclusive community events that bring people
                    together.
                  </p>
                </div>

                <div className="rounded-[1.75rem] bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                  <p className="text-sm font-bold">
                    By supporting our work, you help us:
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      "Widen opportunity for disadvantaged children",
                      "Empower young people to succeed",
                      "Reduce isolation among vulnerable families",
                      "Strengthen community cohesion across Thanet",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                        <span className="text-sm leading-6 text-white/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================================
              FOOTER
          ========================================================== */}

          <div className="flex justify-center px-5 py-7 sm:px-8">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-bold
                transition-all
                hover:border-primary
                hover:bg-primary
                hover:text-white
              "
            >
              Close Programme Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};