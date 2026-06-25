import Image from "next/image";
import Link from "next/link";


interface Props {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
}: Props) {
  return (
    <Link href={`/blog/${id}`}>
      <article className="glass glass-hover overflow-hidden rounded-4xl">
        <div className="relative h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <p className="text-sm font-medium text-primary">
            {category}
          </p>

          <h3 className="mt-3 text-xl font-bold">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-muted-foreground">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}