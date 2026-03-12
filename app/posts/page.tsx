import { getBlogPosts } from "@/lib/posts";
import { Lora } from "next/font/google";
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
      <h3
        className={`${fontLora.className} text-6xl font-light underline mt-4`}
      >
        All posts:
      </h3>

      <p className="pt-8 pb-14">
        Explore our comprehensive collection of Next.js tutorials, tips, and
        real-world solutions. Whether you're a beginner or an experienced
        developer, our posts cover a wide range of topics to help you master
        Next.js and build efficient web applications. Dive into practical
        guides, best practices, and in-depth articles that will empower you to
        create faster, more dynamic web experiences with Next.js.
      </p>

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
