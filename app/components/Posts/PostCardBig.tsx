import { formatDateTime } from "@/lib/date";
import { PostCard } from "@/types/ui/PostCard";
import Link from "next/link";

export default function PostCardBig({
  coverImage,
  url,
  title,
  author,
  date,
}: PostCard) {
  return (
    <div>
      <div className="relative pb-4">
        <img
          src={coverImage}
          alt="Cover image"
          className="rounded-sm h-70 w-full"
        />
      </div>

      <Link
        href={`posts/${url}`}
        className="text-3xl text-blue-800 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
      >
        {title}
      </Link>
      <p>
        <span className="font-medium">By {author}</span>
        {" | "}
        <span className="italic">{formatDateTime(date)}</span>
      </p>
    </div>
  );
}
