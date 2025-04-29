import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  filename: string;
  data: {
    title: string;
    date: Date;
    description: string;
    author: string;
    cover: string;
  };
  content: string;
}

const postsDir = path.join(process.cwd(), "content/posts");

export function getBlogPosts(): BlogPost[] {
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
          cover: data.cover,
        },
        content: markdown,
      };
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
