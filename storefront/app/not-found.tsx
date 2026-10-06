import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto px-4 py-12 text-center font-body">
      <p className="font-heading text-6xl font-bold text-indigo-200">404</p>
      <h1 className="font-heading text-2xl font-bold text-indigo-950">
        Page not found
      </h1>
      <p className="text-sm text-indigo-800">
        We could not find the page or product you were looking for.
      </p>
      <div className="py-6">
        <Link href="/" className="underline hover:text-indigo-600">
          Back to Store
        </Link>
      </div>
    </div>
  );
}