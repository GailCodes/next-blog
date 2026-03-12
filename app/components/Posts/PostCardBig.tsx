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
    <div className="flex flex-col gap-4 shadow-lg dark:shadow-sm shadow-gray-400 pb-4 rounded-lg">
      <div className="relative">
        <img
          src={coverImage}
          alt="Cover image"
          className="rounded-t-lg h-70 w-full"
        />
      </div>

      <Link
        href={`posts/${url}`}
        className="text-2xl text-blue-800 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 hover:underline px-4"
      >
        {title}
      </Link>
      <p className="text-base px-4">
        <span className="font-medium">By {author}</span>
        {" | "}
        <span className="italic">{formatDateTime(date)}</span>
      </p>
    </div>
  );
}
