"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto px-4 py-12 text-center font-body">
      <h2 className="font-heading text-2xl font-bold text-indigo-950">
        Something went wrong
      </h2>
      <p className="text-sm text-indigo-800">An error occurred.</p>
      <div className="flex flex-col items-center gap-4 py-6">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-heading font-medium px-6 py-2 transition-colors"
        >
          Try again
        </button>
        <Link href="/" className="text-sm underline hover:text-indigo-600">
          Back to Store
        </Link>
      </div>
    </div>
  );
}
