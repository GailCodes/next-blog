import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const fontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Blog",
  description: "A blog made in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRoboto.className} bg-zinc-300 text-black dark:bg-zinc-900 dark:text-white text-lg px-4`}
      >
        <div className="flex flex-col gap-4 my-8 max-w-5xl m-auto">
          <ThemeToggle className="self-end" />
          {children}
        </div>
      </body>
    </html>
  );
}
