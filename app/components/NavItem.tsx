import { UINavItem } from "@/types/ui/NavItem";
import Link from "next/link";

export default function NavItem({ href, children }: UINavItem) {
  return (
    <li>
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    </li>
  );
}
