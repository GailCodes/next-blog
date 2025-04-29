import { getBlogPosts } from "@/lib/posts";
import { Lora } from "next/font/google";
import Link from "next/link";
import Divider from "../components/Divider";

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export default function Home() {
  const posts = getBlogPosts();
  return (
    <main>
      <h3 className={`${fontLora.className} text-4xl font-semibold mb-4`}>
        All posts:
      </h3>

      <Divider />

      {posts.map((post, index) => (
        <div key={index} className="flex gap-4">
          <div className="relative pb-2">
            <img
              src={post.data.cover}
              alt="Cover image"
              className="rounded-sm w-42"
            />
          </div>

          <div>
            <Link
              href={`posts/${post.filename}`}
              className="text-xl text-blue-800 font-medium hover:text-blue-700 hover:underline"
            >
              {post?.data?.title}
            </Link>
            <p className="font-medium">{post?.data?.author}</p>

            <p className="italic">
              {post?.data?.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
