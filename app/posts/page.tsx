import { getBlogPosts } from "@/lib/posts";
import { Lora } from "next/font/google";
import Link from "next/link";
import Divider from "../components/Divider";
import PostCardSmall from "../components/Posts/PostCardSmall";

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <main>
      <h3 className={`${fontLora.className} text-4xl font-semibold mb-4`}>
        All posts:
      </h3>

      <Divider />

      {posts.map((post, index) => (
        <PostCardSmall
          key={index}
          coverImage={post.data.cover}
          url={post.filename}
          title={post.data.title}
          author={post.data.author}
          date={post.data.date}
        />
      ))}
    </main>
  );
}
