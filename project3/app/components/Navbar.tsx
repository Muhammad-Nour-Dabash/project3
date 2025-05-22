"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors duration-200 ${
              pathname === href
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pt-3 text-gray-700 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute right-4 top-16 bg-white shadow-md rounded-md border p-4 flex flex-col space-y-3 z-50">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)} // close on click
                className={`transition-colors duration-200 ${
                  pathname === href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
