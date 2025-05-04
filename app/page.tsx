import { fontLora } from "@/lib/fonts";
import { getBlogPosts } from "@/lib/posts";
import Link from "next/link";
import Divider from "./components/Divider";
import PostCardBig from "./components/Posts/PostCardBig";
import PostCardSmall from "./components/Posts/PostCardSmall";

export default function Home() {
  const posts = getBlogPosts();
  return (
    <main>
      <h1 className={`${fontLora.className} text-6xl`}>NextJS Blog</h1>

      <p className="mt-8">
        Welcome to NextJS Blog, where John Doe and guest writers share practical
        Next.js tutorials, tips, and real-world solutions. Whether you're
        learning the basics or optimizing complex applications, we break down
        concepts with clear examples and actionable code. Join a community of
        developers building faster, more efficient web experiences with Next.js.
      </p>

      <Divider />

      <h3 className={`${fontLora.className} text-4xl font-semibold mb-4`}>
        Latest posts:
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(0, 2).map((post, index) => (
          <PostCardBig
            key={index}
            coverImage={post.data.cover}
            url={post.filename}
            title={post.data.title}
            author={post.data.author}
            date={post.data.date}
          />
        ))}
      </div>

      <Divider />

      {posts.slice(2, 6).map((post, index) => (
        <PostCardSmall
          key={index}
          coverImage={post.data.cover}
          url={post.filename}
          title={post.data.title}
          author={post.data.author}
          date={post.data.date}
        />
      ))}

      <Link
        href={"/posts"}
        className="text-md text-black dark:text-white hover:underline"
      >
        View all posts
      </Link>
    </main>
  );
}
