"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Products } from "@/types";

export function SearchBar({ products }: { products: Products[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Products[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Debounced search, used claude
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const lower = query.toLowerCase();
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(lower)
      );
      setResults(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, products]);


  useEffect(() => {
    setOpen(results.length > 0);
  }, [results]);

  return (
    <div className="relative w-full max-w-md">
      <input
      className="border"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {open && (
        <ul className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-background shadow-lg">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                href={`/shop/${product.id}`}
                onClick={() => {
                  setQuery("");
                  setOpen(false);
                }}
                className="block px-3 py-2 text-sm hover:bg-muted"
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