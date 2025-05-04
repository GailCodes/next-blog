import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <ul className="flex gap-6">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/posts">Posts</NavItem>
      </ul>
      <ul>
        <ThemeToggle />
      </ul>
    </nav>
  );
}
