"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function TopNavBar() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("TopNavBar rendered. Current pathname:", pathname);
  }, [pathname]); 

  function useActivePath(path: string): boolean {
    if (path === "/" && pathname !== path) {
      return false;
    }
    
    return pathname.startsWith(path);
  }

  return (
    <nav className="top-nav-bar">
      <div
        className="container flex items-center justify-center mx-auto capitalize"
        style={{ height: "var(--navbar-height)" }}
      >
        <Link
          href="/"
          className={`border-b-2 mx-1.5 sm:mx-6 ${
            useActivePath("/")
              ? "border-white dark:border-white"
              : "border-transparent hover:border-white dark:hover:border-white"
          }`}
        >
          home
        </Link>
        <Link
          href="/random_delights"
          className={`border-b-2 mx-1.5 sm:mx-6 ${
            useActivePath("/random_delights")
              ? "border-white dark:border-white"
              : "border-transparent hover:border-white dark:hover:border-white"
          }`}
        >
          Random Delights
        </Link>
        <Link
          href="/games"
          className={`border-b-2 mx-1.5 sm:mx-6 ${
            useActivePath("/games")
              ? "border-white dark:border-white"
              : "border-transparent hover:border-white dark:hover:border-white"
          }`}
        >
          games
        </Link>
        <Link
          href="/about"
          className={`border-b-2 mx-1.5 sm:mx-6 ${
            useActivePath("/about")
              ? "border-white dark:border-white"
              : "border-transparent hover:border-white dark:hover:border-white"
          }`}
        >
          about
        </Link>
        <HiOutlineUserCircle className="h-6 w-6 mx-1.5 sm:mx-6 cursor-pointer" />
        <div className="mx-1.5 sm:mx-6">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
