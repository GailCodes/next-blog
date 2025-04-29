"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface CodeBlockProps {
  language: string;
  children: string;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      showLineNumbers
      customStyle={{
        margin: "1.5rem 0",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "1rem",
        lineHeight: "1.5",
      }}
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
}
