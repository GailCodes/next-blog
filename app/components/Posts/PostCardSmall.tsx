import { formatDateTime } from "@/lib/date";
import { PostCard } from "@/types/ui/PostCard";
import Link from "next/link";

export default function PostCardSmall({
  coverImage,
  url,
  title,
  author,
  date,
}: PostCard) {
  return (
    <div className="flex gap-4">
      <div className="relative pb-2">
        <img src={coverImage} alt="Cover image" className="rounded-sm w-42" />
      </div>

      <div>
        <Link
          href={`posts/${url}`}
          className="text-xl text-blue-800 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
        >
          {title}
        </Link>
        <p className="font-medium">{author}</p>

        <p className="italic">{formatDateTime(date)}</p>
      </div>
    </div>
  );
}
