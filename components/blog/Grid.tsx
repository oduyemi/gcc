"use client";
import { useBlogs } from "@/hook/useBlogs";
import { BlogCard } from "./Card";


interface Props {
  searchTerm: string;
}


export function BlogGrid({
  searchTerm,
}: Props) {
  const { blogs } = useBlogs();

  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              title={blog.title}
              excerpt={blog.excerpt}
              image={blog.image}
              category={blog.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}