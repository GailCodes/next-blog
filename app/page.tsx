import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/posts";
import { Lora } from "next/font/google";

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export default function Home() {
  const posts = getBlogPosts();
  return (
    <main>
      <h1 className={`${fontLora.className} text-6xl`}>NextJS Blog</h1>

      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
        quos? Ratione porro ducimus cumque hic magnam voluptas libero officia
        molestiae?
      </p>

      <hr className="my-8" />

      <h3 className={`${fontLora.className} text-4xl font-semibold mb-4`}>
        Latest posts:
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div key={index}>
            <div className="relative pb-2">
              <img
                src={post.data.cover}
                alt="Cover image"
                className="rounded-sm"
              />
            </div>

            <Link
              href={`/blog/${post.name}`}
              className="text-3xl text-blue-800 font-medium hover:text-blue-700 hover:underline"
            >
              {post.data.title}
            </Link>
            <p className="font-medium">Author: {post.data.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
