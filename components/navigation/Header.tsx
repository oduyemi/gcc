"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  HeartHandshake,
  Menu,
  Mic2,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const resources =[
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Podcast",
    href: "/podcast",
    icon: Mic2
  },
]

const ministries = [
  {
    title: "Men's Ministry",
    href: "/ministries/men",
    description: "Building godly men with strength, integrity, and purpose.",
  },
  {
    title: "Women's Ministry",
    href: "/ministries/women",
    description: "Empowering women through faith, fellowship, and service.",
  },
  {
    title: "Youth Ministry",
    href: "/ministries/youth",
    description: "Raising passionate young leaders rooted in Christ.",
  },
  {
    title: "Kids & Teens Church",
    href: "/ministries/kids-teens",
    description: "Fun, faith-filled experiences for children and teenagers.",
  },
  {
    title: "Prayer & Caring Ministry",
    href: "/ministries/prayer-caring",
    description: "Standing in prayer and caring for the church family.",
  },
  {
    title: "Music & Technical",
    href: "/ministries/music-tech",
    description: "Creating powerful worship experiences with excellence.",
  },
  {
    title: "Ushering & Hospitality",
    href: "/ministries/hospitality",
    description: "Welcoming every guest with warmth and love.",
  },
];

// const missions = [
//   {
//     title: "Local Missions",
//     href: "/missions/local",
//     description: "Serving and impacting communities close to home.",
//   },
//   {
//     title: "International Missions",
//     href: "/missions/international",
//     description: "Taking the Gospel across nations and cultures.",
//   },
// ];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Podcast", href: "/podcast", icon: Mic2 },
  { label: "Community Impact", href:"/community"},
  { label: "Overseas Missions", href: "/missions" },
  // {label:"Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donation", href: "/donation" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full px-3 pt-4 md:px-6">
      {/* cinematic blur */}
      <div className="absolute inset-0 -z-10 backdrop-blur-xl" />

      <div
        className="
        relative mx-auto flex h-[88px] max-w-7xl items-center justify-between
        rounded-[2.2rem]
        border border-white/30
        bg-white/[0.42]
        px-5 md:px-8
        shadow-[0_8px_60px_rgba(255,220,180,0.10),0_20px_120px_rgba(216,164,91,0.08)]
        backdrop-blur-[24px]
        transition-all duration-700
      "
      >
        {/* ambient top light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_28%)]" />

        {/* warm gold */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(216,164,91,0.12),transparent_30%)]" />

        {/* lavender atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(233,199,255,0.10),transparent_35%)]" />

        {/* edge shine */}
        <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/20" />

        {/* LOGO */}
        <Link
          href="/"
          className="group relative z-10 flex items-center gap-4"
        >
          <div
            className="
            relative flex h-14 w-14 overflow-hidden
            rounded-[1.35rem]
            border border-white/40
            bg-gradient-to-br from-white to-white/70
            shadow-[0_10px_40px_rgba(216,164,91,0.16)]
            backdrop-blur-xl
          "
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_60%)]" />

            <Image
              src="/images/logo.png"
              alt="Site logo"
              fill
              className="object-cover p-2 transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="hidden sm:block">
            <h1
              className="
              font-heading
              text-[1.05rem]
              font-black
              tracking-[-0.04em]
              text-slate-800
              leading-none
            "
            >
              Global Crossfire Church UK
            </h1>

            {/* <p
              className="
              mt-1.5
              text-[10px]
              font-semibold
              tracking-[0.38em]
              text-slate-500/90
              uppercase
            "
            >
              Love • Faith • Purpose
            </p> */}
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="relative z-10 hidden items-center gap-3 xl:flex">
        <NavigationMenu>
            <NavigationMenuList className="gap-1">

            {/* FIRST LINKS */}
            {navLinks.slice(0, 3).map((item) => (
                <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                    <Link
                    href={item.href}
                    className={cn(
                        `
                        group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-2xl px-5
                        text-[14px] font-semibold tracking-[-0.01em]
                        text-slate-700/85
                        transition-all duration-500
                        hover:text-primary
                        hover:bg-white/55
                        hover:shadow-[0_10px_40px_rgba(216,164,91,0.10)]
                    `,
                    )}
                    >
                    <div
                        className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-white/40
                        via-white/10
                        to-primary/10
                        opacity-0
                        transition-all duration-700
                        group-hover:opacity-100
                    "
                    />

                    <span className="relative z-10 flex items-center gap-2">
                        {item.label}
                    </span>

                    <div
                        className="
                        absolute bottom-[7px] left-1/2
                        h-[2px] w-0
                        -translate-x-1/2
                        rounded-full
                        bg-primary
                        transition-all duration-500
                        group-hover:w-7
                    "
                    />
                    </Link>
                </NavigationMenuLink>
                </NavigationMenuItem>
            ))}

            {/* PODCAST */}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                className="
                group h-10 rounded-2xl bg-transparent px-4
                text-[14px] font-semibold tracking-[-0.01em]
                text-slate-700/85
                transition-all duration-500
                hover:bg-white/55
                hover:text-primary
                hover:shadow-[0_10px_40px_rgba(216,164,91,0.10)]
                data-[state=open]:bg-white/55
                "
                >
                  Resources
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                <div
                    className="
                    relative w-[470px]
                    overflow-hidden
                    rounded-[2rem]
                    border border-white/30
                    bg-white/[0.55]
                    p-6
                    shadow-[0_20px_80px_rgba(216,164,91,0.12)]
                    backdrop-blur-[30px]
                "
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_30%)]" />

                    <div className="relative z-10 space-y-4">
                    {resources.map((item) => (
                        <Link
                        key={item.title}
                        href={item.href}
                        className="
                        group relative block overflow-hidden
                        rounded-[1.6rem]
                        border border-white/20
                        bg-white/[0.58]
                        p-5
                        transition-all duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1
                        hover:bg-white/[0.72]
                        hover:shadow-[0_20px_60px_rgba(216,164,91,0.12)]
                        "
                        >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-primary/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                        <div className="relative z-10">
                        <span className="relative z-10 flex items-center gap-2">
                        {item.icon && (
                        <item.icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                        )}

                        {item.title}
                            <h4 className="mb-2 text-[15px] font-bold tracking-[-0.02em] text-slate-800 transition-colors duration-500 group-hover:text-primary">
                            {item.title}
                            </h4>
                        </span>

                            {/* <p className="text-sm leading-relaxed text-slate-500">
                            {item.description}
                            </p> */}
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
            {/* MINISTRIES */}
            <NavigationMenuItem>
                <NavigationMenuTrigger
                className="
                group h-10 rounded-2xl bg-transparent px-4
                text-[14px] font-semibold tracking-[-0.01em]
                text-slate-700/85
                transition-all duration-500
                hover:bg-white/55
                hover:text-primary
                hover:shadow-[0_10px_40px_rgba(216,164,91,0.10)]
                data-[state=open]:bg-white/55
                "
                >
                Ministries
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                <div
                    className="
                    relative w-[760px]
                    overflow-hidden
                    rounded-[2rem]
                    border border-white/30
                    bg-white/[0.55]
                    p-6
                    shadow-[0_20px_80px_rgba(216,164,91,0.12)]
                    backdrop-blur-[30px]
                "
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.75),transparent_30%)]" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(233,199,255,0.14),transparent_35%)]" />

                    <div className="relative z-10 mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-primary/10 ring-1 ring-primary/20">
                        <HeartHandshake className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <Link href="/ministries">
                        <h3 className="font-heading text-xl font-black tracking-[-0.03em] text-slate-800">
                          Church Ministries
                        </h3>
                      </Link>

                        <p className="mt-1 text-sm text-slate-500">
                        Find your place to grow, serve, and belong.
                        </p>
                    </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                    {ministries.map((item) => (
                        <Link
                        key={item.title}
                        href={item.href}
                        className="
                        group relative overflow-hidden
                        rounded-[1.7rem]
                        border border-white/20
                        bg-white/[0.58]
                        p-5
                        transition-all duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1.5
                        hover:bg-white/[0.72]
                        hover:shadow-[0_25px_70px_rgba(216,164,91,0.14)]
                        "
                        >
                        <div
                            className="
                            absolute inset-0
                            bg-gradient-to-br
                            from-white/60
                            via-transparent
                            to-primary/[0.05]
                            opacity-0
                            transition-all duration-700
                            group-hover:opacity-100
                        "
                        />

                        <div
                            className="
                            absolute -right-10 -top-10
                            h-28 w-28 rounded-full
                            bg-primary/5 blur-3xl
                            opacity-0
                            transition-all duration-700
                            group-hover:opacity-100
                        "
                        />

                        <div className="relative z-10">
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                            <Sparkles className="h-4 w-4 text-primary" />
                            </div>

                            <h4 className="mb-2 text-[15px] font-bold tracking-[-0.02em] text-slate-800 transition-colors duration-500 group-hover:text-primary">
                            {item.title}
                            </h4>

                            <p className="text-sm leading-relaxed text-slate-500">
                            {item.description}
                            </p>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
                </NavigationMenuContent>
            </NavigationMenuItem>

            {/* MISSIONS */}
            {/* <NavigationMenuItem>
                <NavigationMenuTrigger
                className="
                group h-10 rounded-2xl bg-transparent px-4
                text-[14px] font-semibold tracking-[-0.01em]
                text-slate-700/85
                transition-all duration-500
                hover:bg-white/55
                hover:text-primary
                hover:shadow-[0_10px_40px_rgba(216,164,91,0.10)]
                data-[state=open]:bg-white/55
                "
                >
                Missions
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                <div
                    className="
                    relative w-[470px]
                    overflow-hidden
                    rounded-[2rem]
                    border border-white/30
                    bg-white/[0.55]
                    p-6
                    shadow-[0_20px_80px_rgba(216,164,91,0.12)]
                    backdrop-blur-[30px]
                "
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_30%)]" />

                    <div className="relative z-10 space-y-4">
                    {missions.map((item) => (
                        <Link
                        key={item.title}
                        href={item.href}
                        className="
                        group relative block overflow-hidden
                        rounded-[1.6rem]
                        border border-white/20
                        bg-white/[0.58]
                        p-5
                        transition-all duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1
                        hover:bg-white/[0.72]
                        hover:shadow-[0_20px_60px_rgba(216,164,91,0.12)]
                        "
                        >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-primary/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                        <div className="relative z-10">
                            <h4 className="mb-2 text-[15px] font-bold tracking-[-0.02em] text-slate-800 transition-colors duration-500 group-hover:text-primary">
                            {item.title}
                            </h4>

                            <p className="text-sm leading-relaxed text-slate-500">
                            {item.description}
                            </p>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
                </NavigationMenuContent>
            </NavigationMenuItem> */}

            {/* LAST LINKS */}
            {navLinks.slice(3).map((item) => (
                <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                    <Link
                    href={item.href}
                    className="
                    group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-2xl px-4
                    text-[14px] font-semibold tracking-[-0.01em]
                    text-slate-700/85
                    transition-all duration-500
                    hover:text-primary
                    hover:bg-white/55
                    hover:shadow-[0_10px_40px_rgba(216,164,91,0.10)]
                    "
                    >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <span className="relative z-10">
                        {item.label}
                    </span>

                    <div className="absolute bottom-[7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-500 group-hover:w-7" />
                    </Link>
                </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
            </NavigationMenuList>

            {/* MUST BE INSIDE NavigationMenu */}
            <NavigationMenuViewport className="top-full mt-5" />
        </NavigationMenu>

        {/* CTA */}
        <Link href="/visit">
          <Button
              className="
              group relative ml-2 h-11 overflow-hidden
              rounded-2xl
              border border-primary/20
              bg-primary
              px-6
              font-semibold
              text-white
              shadow-[0_10px_50px_rgba(216,164,91,0.35)]
              transition-all duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              hover:bg-[#d6a05a]
              hover:shadow-[0_20px_80px_rgba(216,164,91,0.45)]
          "
          >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="relative z-10">
                Join Us Sunday
              </span>
          </Button>
        </Link>
        </div>

        {/* MOBILE */}
        <div className="relative z-10 xl:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="
                h-12 w-12 rounded-2xl
                border border-white/30
                bg-white/40
                backdrop-blur-xl
                transition-all duration-500
                hover:scale-105
                hover:bg-white/60
              "
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="
                    z-[9999]
                    w-[92%]
                    border-l border-white/20
                    bg-[#f7f2ec]/96
                    p-0
                    backdrop-blur-3xl
                "
            >
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_40%)]" />

              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(216,164,91,0.08),transparent_35%)]" />

              <div className="relative z-[9999] flex h-full flex-col">
                {/* TOP */}
                <div className="relative z-[10000] flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 overflow-hidden rounded-[1.2rem] border border-white/40 bg-white shadow-[0_10px_40px_rgba(216,164,91,0.16)]">
                      <Image
                        src="/images/logo.png"
                        alt="Site logo"
                        fill
                        className="object-cover p-2"
                      />
                    </div>

                    <div className="relative z-[10001]">
                        <h2
                            className="
                            font-heading
                            text-base
                            font-black
                            uppercase
                            tracking-[-0.03em]
                            text-black
                            leading-none
                            "
                        >
                            Global Crossfire
                        </h2>

                        <p
                            className="
                            mt-1
                            text-[10px]
                            font-semibold
                            tracking-[0.32em]
                            text-black/70
                            uppercase
                            "
                        >
                            Church
                        </p>
                        </div>
                    </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl"
                    onClick={() => setOpen(false)}
                  >
                    {/* <X className="h-5 w-5" /> */}
                  </Button>
                </div>

                {/* MOBILE LINKS */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <nav className="space-y-3">
                    {navLinks.slice(0, 3).map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                        group relative block overflow-hidden
                        rounded-[1.6rem]
                        border border-white/30
                        bg-white/[0.58]
                        px-5 py-4
                        shadow-[0_10px_30px_rgba(216,164,91,0.06)]
                        backdrop-blur-xl
                        transition-all duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1
                        hover:bg-white/[0.72]
                      "
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-primary/[0.05] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                        <span className="relative z-10 flex items-center gap-3 font-semibold text-slate-700">
                          {/* {item.icon && <item.icon className="h-4 w-4" />} */}
                          {item.label}
                        </span>
                      </Link>
                    ))}

                    <MobileDropdown
                      title="Ministries"
                      items={ministries}
                      onItemClick={() => setOpen(false)}
                    />

                    {/* <MobileDropdown
                      title="Missions"
                      items={missions}
                      onItemClick={() => setOpen(false)}
                    /> */}

                    {navLinks.slice(3).map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                        group relative block overflow-hidden
                        rounded-[1.6rem]
                        border border-white/30
                        bg-white/[0.58]
                        px-5 py-4
                        shadow-[0_10px_30px_rgba(216,164,91,0.06)]
                        backdrop-blur-xl
                        transition-all duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1
                        hover:bg-white/[0.72]
                      "
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-primary/[0.05] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                        <span className="relative z-10 font-semibold text-slate-700">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* CTA */}
                <div className="border-t border-white/10 p-6">
                  <Button
                    className="
                    group relative h-12 w-full overflow-hidden
                    rounded-2xl
                    bg-primary
                    text-white
                    shadow-[0_10px_50px_rgba(216,164,91,0.30)]
                    transition-all duration-700
                    hover:-translate-y-1
                    hover:bg-[#d6a05a]
                    hover:shadow-[0_20px_80px_rgba(216,164,91,0.40)]
                  "
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <span className="relative z-10">
                      Plan Your Visit
                    </span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

function MobileDropdown({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
  onItemClick?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      overflow-hidden
      rounded-[1.6rem]
      border border-white/30
      bg-white/[0.58]
      shadow-[0_10px_30px_rgba(216,164,91,0.06)]
      backdrop-blur-xl
    "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
        flex w-full items-center justify-between
        px-5 py-4
        text-left
        font-semibold
        text-slate-700
      "
      >
        {title}

        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-500",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <>
          <Separator className="bg-white/10" />

          <div className="space-y-1 p-2">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onItemClick}
                className="
                group flex items-center justify-between
                rounded-2xl
                px-4 py-3
                text-sm
                text-slate-500
                transition-all duration-500
                hover:bg-white/60
                hover:text-primary
              "
              >
                {item.title}

                <div className="h-1.5 w-1.5 rounded-full bg-primary/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}