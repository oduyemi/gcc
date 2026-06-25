"use client";
import { useState } from "react";
import { BlogHero } from "@/components/blog/Hero";
import { BlogFilters } from "@/components/blog/Filters";
import { BlogGrid } from "@/components/blog/Grid";
import { FeaturedPost } from "@/components/blog/FeaturedArticle";
import { useBlogs } from "@/hook/useBlogs";



export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { blogs } = useBlogs();
  return (
    <>
      <BlogHero />
      <FeaturedPost blog={blogs?.[0]} />
      <section className="container mx-auto px-4">
        <BlogFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </section>
      <BlogGrid
        searchTerm={searchTerm}
      />
    </>
  );
}