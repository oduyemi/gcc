"use client";
import Image from "next/image";
import dayjs from "dayjs";
import { Edit, Trash2, FileText } from "lucide-react";
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

            <div className="mt-6 overflow-x-auto rounded-xs">
            <table className="min-w-[900px] w-full">
            <thead>
                <tr className="border-b border-white/10 hover:bg-white/[0.05] transition-colors">
                <th className="w-[45%] pb-4 text-left">
                    Post
                </th>

                <th className="w-[15%] pb-4 text-left">
                    Category
                </th>

                <th className="w-[20%] pb-4 text-left">
                    Published
                </th>

                <th className="w-[20%] pb-4 text-right">
                    Actions
                </th>
                </tr>
            </thead>

            <tbody>
            {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                <tr
                    key={index}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.05]"
                >
                    <td className="py-4">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 animate-pulse rounded-xl bg-white/5" />

                        <div className="space-y-2">
                        <div className="h-4 w-48 animate-pulse rounded bg-white/5" />
                        <div className="h-3 w-72 animate-pulse rounded bg-white/5" />
                        </div>
                    </div>
                    </td>

                    <td>
                    <div className="h-6 w-20 animate-pulse rounded-full bg-white/5" />
                    </td>

                    <td>
                    <div className="h-4 w-24 animate-pulse rounded bg-white/5" />
                    </td>

                    <td>
                    <div className="flex justify-end gap-2">
                        <div className="h-9 w-9 animate-pulse rounded-xl bg-white/5" />
                        <div className="h-9 w-9 animate-pulse rounded-xl bg-white/5" />
                    </div>
                    </td>
                </tr>
                ))
            ) : blogs.length === 0 ? (
                <tr>
                <td
                    colSpan={4}
                    className="py-16 text-center"
                >
                    <div className="flex flex-col items-center gap-3">
                    <div className="rounded-2xl bg-white/5 p-4">
                        <FileText className="h-8 w-8 text-slate-500" />
                    </div>

                    <div>
                        <p className="font-medium text-white">
                        No blog posts yet
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                        Click <span className="font-medium text-primary">"Add Post"</span> to publish your first article.
                        </p>
                    </div>
                    </div>
                </td>
                </tr>
            ) : (
                blogs.map((blog) => (
                <tr
                    key={blog._id}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.05]"
                >
                    <td className="py-4">
                    <div className="flex items-center gap-4">
                        <Image
                        src={blog.image || "/images/blog-placeholder.jpg"}
                        alt={blog.title}
                        width={60}
                        height={60}
                        className="h-[60px] w-[60px] rounded-xl object-cover"
                        />

                        <div className="min-w-0">
                        <p className="max-w-md truncate font-medium text-white">
                            {blog.title}
                        </p>

                        <p className="mt-1 line-clamp-2 text-sm text-slate-400">
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
                    <span className="text-sm text-slate-300">
                        {dayjs(blog.createdAt).format("DD MMM YYYY")}
                    </span>
                    </td>

                    <td>
                    <div className="flex justify-end gap-2">
                        <button
                        onClick={() => onEdit(blog)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
                        >
                        <Edit size={16} />
                        </button>

                        <button
                        onClick={() => onDelete(blog)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-colors hover:bg-red-500/20"
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