import NavItem from "./NavItem";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between text-white bg-black h-18 w-full px-12">
      <ul className="flex gap-6">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/posts">Posts</NavItem>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
