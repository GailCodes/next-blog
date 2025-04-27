import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export function getBlogPosts() {
  const files = fs.readdirSync(postsDir);

  return files.map((file) => {
    const name = file.replace(".md", "");
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return { name, data, content };
  });
}
