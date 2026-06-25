"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/hook/useBlogs";

interface Props {
  blog?: Blog
}

export function FeaturedPost({ blog }: Props) {
  if (!blog) return null;

  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">
        <div className="glass overflow-hidden rounded-4xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[400px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-10">
              <span className="text-primary font-semibold">
                Featured Article
              </span>

              <h2 className="mt-4 text-4xl font-black">
                {blog.title}
              </h2>

              <p className="mt-6 text-muted-foreground">
                {blog.excerpt}
              </p>

              <Link
                href={`/blog/${blog._id}`}
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold"
              >
                Read Article
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}