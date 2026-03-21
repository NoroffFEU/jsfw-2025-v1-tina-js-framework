"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Product} from "@/schemas/productSchema";

export function SearchBar({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Debounced search, used claude. not right because setResult is called synchronously. Need to find a fix
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const lower = query.toLowerCase();
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(lower),
      );
      setResults(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, products]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showDropdown = results.length > 0;

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <input
        className="border"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {showDropdown && (
        <ul className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-background shadow-lg">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                className="block px-3 py-2 text-sm hover:bg-muted"
                href={`/shop/${product.id}`}
                onClick={() => setQuery("")}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
