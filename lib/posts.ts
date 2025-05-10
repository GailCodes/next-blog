import { Post } from "@/types/lib/Post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "content/posts");

export async function getBlogPosts(): Promise<Post[]> {
  const files = fs.readdirSync(postsDir);

  return files
    .map((file) => {
      const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data, content: markdown } = matter(content);

      return {
        filename: file.replace(".md", ""),
        data: {
          title: data.title,
          date: new Date(data.date),
          description: data.description,
          author: data.author,
          cover: data.cover || "/covers/default-cover.jpg",
        },
        content: markdown,
      };
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    post: post.filename,
  }));
}
