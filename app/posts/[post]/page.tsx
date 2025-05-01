import HighlightedCodeBlock from "@/app/components/HighlightedCodeBlock";
import { getBlogPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export default function Post({ params }: { params: { post: string } }) {
  const posts = getBlogPosts();
  const post = posts.find((blogPost) => blogPost.filename === params.post);

  return (
    <article id="blog-post" className="prose mx-auto">
      {/* Hero Section with Overlay */}
      <div className="relative h-90 rounded-lg overflow-hidden">
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url('${post?.data.cover}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 h-full flex items-center p-8">
          <h1 className="text-3xl md:text-6xl text-white font-bold drop-shadow-lg">
            {post?.data.title}
          </h1>
        </div>
      </div>

      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-semibold mt-12 mb-2" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-medium mt-12 mb-2" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg font-medium py-4" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="rounded-md w-2xl" {...props} />
          ),
          code({ node, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");

            return "inline" in props ? (
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
                {children}
              </code>
            ) : (
              <HighlightedCodeBlock language={match?.[1] || "javascript"}>
                {String(children).replace(/\n$/, "")}
              </HighlightedCodeBlock>
            );
          },
        }}
      >
        {post?.content}
      </ReactMarkdown>
    </article>
  );
}
