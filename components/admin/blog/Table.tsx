"use client";
import Image from "next/image";
import dayjs from "dayjs";
import { Edit, Trash2 } from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";
import { Button } from "@/components/ui/button";

interface Props {
    blogs: any[];
    loading?: boolean;
    onAdd: () => void;
    onEdit: (blog: any) => void;
    onDelete: (blog: any) => void;
}

export const BlogTable = ({blogs, loading = false, onAdd, onEdit, onDelete}: Props) => {
    return (
        <AdminCard>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                    Blog Posts
                </h2>

                <Button onClick={onAdd}>
                    Add Post
                </Button>
            </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-4 text-left">
                Post
              </th>

              <th className="pb-4 text-left">
                Category
              </th>

              <th className="pb-4 text-left">
                Published
              </th>

              <th className="pb-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
                <tr>
                <td
                    colSpan={4}
                    className="py-10 text-center text-slate-400"
                >
                    Loading blog posts...
                </td>
                </tr>
            ) : blogs.length === 0 ? (
                <tr>
                <td
                    colSpan={4}
                    className="py-10 text-center text-slate-400"
                >
                    No blog posts found.
                </td>
                </tr>
            ) : (
                blogs.map((blog) => (
                <tr
                    key={blog._id}
                    className="border-b border-white/5"
                >
                    <td className="py-4">
                    <div className="flex items-center gap-4">
                        <Image
                        src={blog.image}
                        alt={blog.title}
                        width={60}
                        height={60}
                        className="rounded-xl object-cover"
                        />

                        <div>
                        <p className="font-medium text-white">
                            {blog.title}
                        </p>

                        <p className="line-clamp-1 text-sm text-slate-400">
                            {blog.excerpt}
                        </p>
                        </div>
                    </div>
                    </td>

                    <td>
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">
                        {blog.category}
                    </span>
                    </td>

                    <td>
                    {dayjs(blog.createdAt).format("DD MMM YYYY")}
                    </td>

                    <td>
                    <div className="flex justify-end gap-2">
                        <button
                        onClick={() => onEdit(blog)}
                        className="rounded-xl bg-white/5 p-2"
                        >
                        <Edit size={16} />
                        </button>

                        <button
                        onClick={() => onDelete(blog)}
                        className="rounded-xl bg-red-500/10 p-2 text-red-400"
                        >
                        <Trash2 size={16} />
                        </button>
                    </div>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>
      </div>
    </AdminCard>
  );
};