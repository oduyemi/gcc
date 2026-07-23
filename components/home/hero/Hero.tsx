"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroSlides } from "./data";
import { HeroBackground } from "./Background";
import { HeroContent } from "./Content";
import { HeroImage } from "./Image";


export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 8000);

    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    heroSlides.forEach((slide) => {
      const image = new window.Image();
      image.src = slide.image;
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-b-[3rem]
            lg:rounded-b-[4rem]
            border
            border-white/60
            bg-transparent
            shadow-[0_40px_120px_rgba(34,0,124,.08)]
            backdrop-blur-sm
          "
        >
          <div
            className="
              mx-auto
              grid
              min-h-[800px]
              max-w-7xl
              items-start
              gap-20
              px-6
              pb-28
              pt-20 lg:pt-24
              lg:grid-cols-[1fr_.95fr]
              lg:px-12
            "
          >
            <HeroContent
              current={current}
              slide={heroSlides[current]}
            />

            <HeroImage
              current={current}
              slide={heroSlides[current]}
            />
          </div>

          {/* Navigation */}
          <div
            className="
              absolute
              bottom-8
              right-8
              z-30
              flex
              items-center
              gap-4
            "
          >
            <button
              onClick={previousSlide}
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-transparent
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <ChevronLeft className="h-5 w-5 text-[#22007C] transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={nextSlide}
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-tansparent
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1"
              >
              <ChevronRight className="h-5 w-5 text-[#22007C] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Indicators */}
          <div
            className="
              absolute
              bottom-10
              left-1/2
              z-30
              flex
              -translate-x-1/2
              items-center
              gap-3
            "
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  relative
                  overflow-hidden
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    current === index
                      ? "h-2.5 w-16 bg-[#AF3800]/20"
                      : "h-2.5 w-2.5 bg-slate-300 hover:bg-[#22007C]"
                  }
                `}
              >
                {current === index && (
                  <motion.div
                    key={current}
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                    }}
                    style={{
                      originX: 0,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#AF3800]
                    "
                  />

                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};