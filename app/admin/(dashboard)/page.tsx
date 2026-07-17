"use client";
import { motion } from "framer-motion";
import { Users, CalendarDays, Bell, FileText, Images } from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";
import { StatCard } from "@/components/admin/StatsCard";
import { Meeting } from "@/types/meeting";
import { useEffect, useState } from "react";
import { UpcomingMeetingsCard } from "@/components/admin/Meetings/Upcoming";
import { AdminQuickActions } from "@/components/admin/administrators/QuickActions";
import Link from"next/link";

interface NewMember {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  interest: string;
  status: string;
  createdAt: string;
}

const notifications = [
  "5 prayer requests awaiting review",
  "3 new guest registrations",
  "Monthly report is ready",
  "Youth event registration opened",
];

export default function DashboardPage() {
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [membersLoading, setMembersLoading] = useState(true);
  const [weeklyMeetings, setWeeklyMeetings] = useState<Meeting[]>([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState<Meeting[]>([]);
  const [blogCount, setBlogCount] = useState(0);
  const[galleryCount, setGalleryCount] = useState(0);
  const [recentMembers, setRecentMembers] = useState<NewMember[]>([]);
  const [notificationsLoading] = useState(false);

  const fetchDashboardData = async () => {
    try {
      setDashboardLoading(true);
      const [
        weeklyRes,
        upcomingRes,
        blogCountRes,
        galleryCountRes,
      ] = await Promise.all([
        fetch("/api/meetings/weekly"),
        fetch("/api/meetings/upcoming"),
        fetch("/api/blog/count"),
        fetch("/api/gallery/count")
      ]);
  
      const [
        weeklyJson,
        upcomingJson,
        blogsJson,
        galleryJson
      ] = await Promise.all([
        weeklyRes.json(),
        upcomingRes.json(),
        blogCountRes.json(),
        galleryCountRes.json()
      ]);
  
      setWeeklyMeetings(weeklyJson.data || []);
      setUpcomingMeetings(upcomingJson.data || []);
      // setBlogCount(Array.isArray(blogsJson) ? blogsJson.length : 0);
      setBlogCount(blogsJson.count ?? 0);
      setGalleryCount(galleryJson.count ?? 0);
    } catch (error) {
      console.error(error);
    } finally {
      setDashboardLoading(false);
    }
  };


  const fetchRecentMembers = async () => {
    try {
      setMembersLoading(true);
      const res = await fetch("/api/new-to-church");
      const json = await res.json();
      if (json.success) {
        const latestMembers = [...json.data]
          .sort(
            (a: NewMember, b: NewMember) =>
              new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime()
          )
          .slice(0, 5);
    
        setRecentMembers(latestMembers);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setMembersLoading(false);
    }

  useEffect(() => {
    fetchDashboardData();
    fetchRecentMembers();
  }, []);
}

  const dashboardStats = [
    {
      title: "Meetings This Week",
      value: dashboardLoading ? "..." : weeklyMeetings.length,
      icon: CalendarDays,
      tone: "purple",
    },
    {
      title: "Blog Posts",
      value: dashboardLoading ? "..." : blogCount,
      icon: FileText,
      tone: "blue",
    },
    {
      title: "Upcoming Meetings",
      value: dashboardLoading ? "..." : upcomingMeetings.length,
      icon: Bell,
      tone: "green",
    },
    {
      title: "Gallery Images",
      value: dashboardLoading ? "..." : galleryCount,
      icon: Images,
      tone: "amber",
    }
  ];

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

                <p className="mt-3 max-w-2xl text-gray-200">
                  Here's a snapshot of ministry activities, membership growth,
                  events, and church engagement.
                </p>
              </div>

              <div className="flex gap-3">
              <Link
                href="/admin/events"
                className="rounded-2xl bg-primary px-5 py-3 font-medium text-white shadow-lg transition hover:opacity-90"
              >
                Create Event
              </Link>

                <Link 
                  href="/admin/profile"
                  className="glass rounded-2xl px-5 py-3 font-medium transition hover:bg-white/10"
                >
                    Admin Profile
                </Link>
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
            tone={stat.tone as
              | "blue"
              | "green"
              | "purple"
              | "amber"
              | "rose"}
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

          {dashboardLoading ? (
          <div className="space-y-3 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-20 animate-pulse rounded-2xl bg-white/5"
              />
            ))}
          </div>
        ) : (
          <UpcomingMeetingsCard meetings={upcomingMeetings} />
        )}
        </AdminCard>

        {/* Quick Actions */}
        <AdminQuickActions />
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
            {membersLoading ? (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-14 animate-pulse rounded-xl bg-white/5"
                  />
                ))}
              </>
            ) : recentMembers.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No recent members.
              </p>
            ) : (
              recentMembers.map((member) => (
                <div
                  key={member._id}
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
                    {member.fullname.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">
                      {member.fullname}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {member.interest.replace(/([A-Z])/g, " $1")}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {new Date(member.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
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
            {notificationsLoading ? (
              <>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-16 animate-pulse rounded-2xl bg-white/5"
                  />
                ))}
              </>
            ) : (
                notifications.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/30 p-4"
                  >
                    <p>{item}</p>
                  </div>
                ))
            )}
          </div>
        </AdminCard>
      </section>
    </div>
  );
}