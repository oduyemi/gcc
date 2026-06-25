"use client";
import { instagramPosts } from "@/data/posts";
import { InstagramCard } from "./Card";

export function InstagramFeed() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Instagram
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Latest Highlights
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => (
            <InstagramCard
              key={post.id}
              image={post.image}
              caption={post.caption}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}