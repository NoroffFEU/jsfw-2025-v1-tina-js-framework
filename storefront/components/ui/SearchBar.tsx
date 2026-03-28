"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Product} from "@/schemas/productSchema";

export function SearchBar({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const ref = useRef<HTMLDivElement>(null);

    // Used claude to research. setResult is the method i went for

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
        className="bg-white text-indigo-900 border p-2 w-full"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {showDropdown && (
        <ul className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto  border bg-white shadow-lg ">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                className="block px-3 py-2 text-sm hover:bg-muted"
                href={`/product/${product.id}`}
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
