import { UINavItem } from "@/types/ui/NavItem";
import Link from "next/link";
import { fontLora } from "@/lib/fonts";

export default function NavItem({ href, children }: UINavItem) {
  return (
    <li>
      <Link
        href={href}
        className={`${fontLora.className} text-xl hover:underline`}
      >
        {children}
      </Link>
    </li>
  );
}
