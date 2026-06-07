"use client";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


type NextStepPageProps = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  form: React.ReactNode;

  highlights: {
    title: string;
    description: string;
  }[];

  scripture?: {
    verse: string;
    reference: string;
  };
};

export function NextStepPage({
  title,
  subtitle,
  description,
  badge,
  icon: Icon,
  form,
  highlights,
  scripture,
}: NextStepPageProps) {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.025)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/60 px-5 py-2.5 backdrop-blur-2xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
              <Icon className="h-4 w-4 text-primary" />
            </div>

            <span className="text-xs font-black uppercase tracking-[0.3em]">
              {badge}
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-[-0.06em] lg:text-7xl">
            {title}
          </h1>

          <p className="mt-4 text-xl text-primary font-semibold">
            {subtitle}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <h2 className="mb-6 text-3xl font-black">
              What Happens Next?
            </h2>

            <div className="grid gap-5">
              {highlights.map((item) => (
                <Card
                  key={item.title}
                  className="
                    border-white/30
                    bg-white/55
                    backdrop-blur-2xl
                    shadow-xl
                  "
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />

                      <div>
                        <h3 className="font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-muted-foreground leading-7">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {scripture && (
              <div
                className="
                mt-10 rounded-[2rem]
                border border-white/30
                bg-gradient-to-br
                from-primary/10
                via-white/50
                to-accent/10
                p-8
                backdrop-blur-xl
              "
              >
                <p className="text-lg italic leading-8">
                  "{scripture.verse}"
                </p>

                <p className="mt-4 font-bold text-primary">
                  {scripture.reference}
                </p>
              </div>
            )}
          </div>

          {/* FORM */}
          <div
            className="
            rounded-[2rem]
            border border-white/30
            bg-white/55
            p-8
            backdrop-blur-3xl
            shadow-[0_25px_70px_rgba(175,56,0,0.08)]
          "
          >
            {form}
          </div>
        </div>
      </div>
    </section>
  );
}