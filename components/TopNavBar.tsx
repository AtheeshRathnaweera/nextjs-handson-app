"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          href="/"
          className={`border-b-2 text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6 ${
            useActivePath("/")
              ? "border-blue-500"
              : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
          }`}
        >
          home
        </Link>

        <Link
          href="/games"
          className={`border-b-2 text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6 ${
            useActivePath("/games")
              ? "border-blue-500"
              : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
          }`}
        >
          games
        </Link>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{ background: "new 0 0 32 32", fill: "lightgrey" }}
            width="24"
            height="24"
          >
            <path d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z" />
            <path d="M16 20.2a4.605 4.605 0 0 1-4.6-4.6c0-2.537 2.064-4.6 4.6-4.6s4.6 2.063 4.6 4.6c0 2.537-2.064 4.6-4.6 4.6zm0-7.2c-1.434 0-2.6 1.166-2.6 2.6s1.166 2.6 2.6 2.6 2.6-1.167 2.6-2.6S17.434 13 16 13zM16 31c-2.462 0-4.907-.613-7.072-1.772a1.003 1.003 0 0 1-.528-.882V26.33a5.772 5.772 0 0 1 5.765-5.766h3.67a5.772 5.772 0 0 1 5.765 5.766v2.015c0 .368-.204.707-.528.882A15.033 15.033 0 0 1 16 31zm-5.6-3.269c3.48 1.663 7.72 1.663 11.2 0v-1.4a3.77 3.77 0 0 0-3.765-3.766h-3.67a3.77 3.77 0 0 0-3.765 3.766v1.4zm12.2.615h.01-.01z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
