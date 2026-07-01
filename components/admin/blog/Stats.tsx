"use client";
import { useEffect, useState } from "react";
import { FileText, Layers, Calendar, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/admin/StatsCard";


interface Blog {
  _id: string;
  category: string;
  createdAt: string;
}

interface Props {
    blogs?: Blog[];
  }
  
  export const BlogStats = ({blogs = []}: Props) => {
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/blog/count");
        const json = await res.json();

        if (json.success) {
          setTotalPosts(json.count);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, []);

  const categories = new Set(
    blogs.map((blog) => blog.category)
  ).size;

  const thisMonth = blogs.filter((blog) => {
    const created = new Date(blog.createdAt);
    const now = new Date();

    return (
      created.getMonth() === now.getMonth() &&
      created.getFullYear() === now.getFullYear()
    );
  }).length;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Posts"
        value={totalPosts}
        icon={FileText}
      />

      <StatCard
        title="Categories"
        value={categories}
        icon={Layers}
      />

      <StatCard
        title="This Month"
        value={thisMonth}
        icon={Calendar}
      />

      <StatCard
        title="Published"
        value={totalPosts}
        icon={TrendingUp}
      />
    </div>
  );
};