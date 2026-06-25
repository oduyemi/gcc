"use client";
import { useBlog } from "@/hook/useBlogs";
import Image from "next/image";
import { use } from "react";

export default function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { blog, loading } = useBlog(id);

  if (loading) {
    return (
      <div className="container mx-auto py-32 text-center">
        Loading article...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto py-32 text-center">
        Article not found
      </div>
    );
  }

  return (
    <article className="pb-24">
      {/* Hero */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <span className="rounded-full bg-primary px-4 py-2 text-sm text-white">
              {blog.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black text-white lg:text-7xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="container mx-auto px-4">
        <div className="mx-auto -mt-16 max-w-4xl rounded-4xl glass p-8 lg:p-12">
          <p className="mb-8 text-muted-foreground">
            Published{" "}
            {new Date(
              blog.createdAt
            ).toLocaleDateString()}
          </p>

          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </div>
      </section>
    </article>
  );
}