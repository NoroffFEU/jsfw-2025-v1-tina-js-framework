"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import { useState, useEffect } from "react";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const itemCount = useCartStore((state) => state.itemCount());
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className=" bg-white border-b border-indigo-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading md:text-3xl text-2xl font-bold text-indigo-900 "
        >
          STOREFRONT
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/shop"
            className="text-sm font-heading font-semibold text-indigo-900 hover:text-indigo-700 transition-transform"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-sm font-heading font-semibold text-indigo-900 hover:text-indigo-700 transition-transform"
          >
            Contact
          </Link>
          <Link
            href="/cart"
            className="text-indigo-900 hover:text-indigo-700 transition-transform"
          >
            <div className=" relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>{" "}
              {isClient && itemCount > 0 && (
                <span className="absolute bottom-2 left-2 bg-indigo-900 text-white text-xs rounded-sm h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
