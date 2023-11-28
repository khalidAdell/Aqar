"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Commercial", href: "/commercial" },
  ];
  return (
    <nav className="navbar bg-[rgba(0,0,0,0.5)] rounded-t-xl pb-4 px-4 flex gap-6">
      {navLinks.map((link) => {
        const isActive =
          pathname == link.href || (pathname == "/" && link.href == "/buy");

        return (
          <Link
            className={`${
              isActive
                ? "text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[2px] before:bg-white"
                : "text-gray-300"
            } text-[14px] uppercase font-semibold relative`}
            href={link.href || "/"}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
