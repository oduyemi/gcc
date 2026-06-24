"use client";
import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  CreditCard,
  UserPlus,
  Bell,
  FileText,
  Images,
  MessageSquare,
  Menu,
  HeartHandshake,
} from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";
import { StatCard } from "@/components/admin/StatsCard";


const dashboardStats = [
  {
    title: "Blog Posts",
    value: "43",
    icon: FileText,
    tone: "blue",
  },
  {
    title: "Events",
    value: "12",
    icon: CalendarDays,
    tone: "purple",
  },
  {
    title: "Gallery Images",
    value: "385",
    icon: Images,
    tone: "amber",
  },
  {
    title: "Pending Requests",
    value: "27",
    icon: Bell,
    tone: "rose",
  },
];

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Tomorrow • 10:00 AM",
  },
  {
    title: "Midweek Prayer Meeting",
    date: "Wednesday • 7:00 PM",
  },
  {
    title: "Youth Fellowship",
    date: "Friday • 6:00 PM",
  },
];

const quickActions = [
  {
    label: "Add Admin",
    icon: UserPlus,
  },
  {
    label: "Create Event",
    icon: CalendarDays,
  },
  {
    label: "Post an Article",
    icon: Menu,
  },
  {
    label: "Upload Gallery",
    icon: MessageSquare,
  },
];

const recentMembers = [
  "John Smith",
  "Mary Johnson",
  "David Williams",
  "Sarah Brown",
];

const notifications = [
  "5 prayer requests awaiting review",
  "3 new guest registrations",
  "Monthly report is ready",
  "Youth event registration opened",
];

const ministryMetrics = [
  {
    label: "Attendance Rate",
    value: "92%",
  },
  {
    label: "Volunteer Engagement",
    value: "78%",
  },
  {
    label: "New Member Retention",
    value: "88%",
  },
];



export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass overflow-hidden rounded-4xl"
      >
        <div className="relative p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

          <div className="relative">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium text-primary">
                  Global Crossfire Church UK
                </p>

                <h1 className="mt-2 text-4xl font-bold tracking-tight">
                  Welcome back, Pastor
                </h1>

                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Here's a snapshot of ministry activities, membership growth,
                  events, and church engagement.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-2xl bg-primary px-5 py-3 font-medium text-white shadow-lg transition hover:opacity-90">
                  Create Event
                </button>

                <button className="glass rounded-2xl px-5 py-3 font-medium transition hover:bg-white/10">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* KPI Stats */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            // change={stat.change}
          />
        ))}
      </section>

      {/* Main Grid */}

      <section className="grid gap-6 xl:grid-cols-3">
        {/* Upcoming Events */}

        <AdminCard className="xl:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Upcoming Events</h2>

            <CalendarDays
              className="text-primary"
              aria-label="Upcoming Events"
            />
          </div>

          <div className="mt-6 space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/30
                  p-4
                  transition-all
                  hover:bg-white/40
                "
              >
                <h3 className="font-semibold">{event.title}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </AdminCard>

        {/* Quick Actions */}

        <AdminCard>
          <h2 className="text-xl font-bold">Quick Actions</h2>

          <div className="mt-6 space-y-3">
            {quickActions.map((item) => (
              <button
                key={item.label}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white/30
                  p-4
                  text-left
                  transition
                  hover:bg-white/50
                "
              >
                <item.icon
                  size={18}
                  className="text-primary"
                />

                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </AdminCard>
      </section>

      {/* Secondary Grid */}

      <section className="grid gap-6 lg:grid-cols-2">
        {/* Recent Members */}

        <AdminCard>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent New Members</h2>

            <Users
              className="text-primary"
              aria-label="Recent Members"
            />
          </div>

          <div className="mt-6 space-y-4">
            {recentMembers.map((name) => (
              <div
                key={name}
                className="flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {name.charAt(0)}
                </div>

                <div>
                  <p className="font-medium">{name}</p>

                  <p className="text-sm text-muted-foreground">
                    Joined recently
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        {/* Notifications */}

        <AdminCard>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Notifications</h2>

            <Bell
              className="text-primary"
              aria-label="Notifications"
            />
          </div>

          <div className="mt-6 space-y-4">
            {notifications.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/30 p-4"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </AdminCard>
      </section>

      {/* Ministry Snapshot */}

      <AdminCard>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Ministry Health Snapshot
          </h2>

          <HeartHandshake
            className="text-primary"
            aria-label="Ministry Health Snapshot"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ministryMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-sm text-muted-foreground">
                {metric.label}
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                {metric.value}
              </h3>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}