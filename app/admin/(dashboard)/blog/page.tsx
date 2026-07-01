"use client";
import { BlogStats } from "@/components/admin/blog/Stats";
import { BlogTable } from "@/components/admin/blog/Table";
import { BlogDialog } from "@/components/admin/dialog/BlogDialog";
import { useEffect, useState } from "react";



export default function Blogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<any[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

    const fetchBlogs = async () => {
        try {
          setLoading(true);
          const res = await fetch("/api/blog");
          const data = await res.json();
          setBlogs(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        fetchBlogs();
      }, []);

    const handleDelete = async (blog: any) => {
        if (!confirm(`Delete "${blog.title}"?`))
            return;
    
        try {
            await fetch(`/api/blog/${blog._id}`, {
                method: "DELETE",
            });
    
            fetchBlogs();
        } catch (err) {
            console.error(err);
        }
    }


    return(
        <>
            <div className="mb-4">
                <BlogStats />
            </div>
            <BlogTable
                blogs={blogs}
                loading={loading}
                onAdd={() => {
                    setSelectedBlog(null);
                    setDialogOpen(true);
                }}
                onEdit={(blog) => {
                    setSelectedBlog(blog);
                    setDialogOpen(true);
                }}
                onDelete={handleDelete}
            />

            <BlogDialog
                open={dialogOpen}
                onOpenChange={(open) => {
                    setDialogOpen(open);

                    if (!open) {
                        setSelectedBlog(null);
                    }
                }}
                blog={selectedBlog}
                onSaved={async () => {
                    setDialogOpen(false);
                    setSelectedBlog(null);
                    await fetchBlogs();
                }}
            />
        </>
    )
}