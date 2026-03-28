"use client";
import Link from "next/link";
export default function ContactFormSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto px-4 py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="size-20 text-indigo-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <h1 className="font-heading text-2xl font-bold text-indigo-950">
        Thank you for your request!
      </h1>
      <p className="text-sm">
        We have received your contact form and will reach out to you as soon as
        possible.
      </p>
      <div className="py-6">
        <Link href="/" className="underline hover:text-indigo-600 ">
          Back to Store
        </Link>
      </div>
    </div>
  );
}
