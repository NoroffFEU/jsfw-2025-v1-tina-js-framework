import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-white border-b border-indigo-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600 hover:text-indigo-700 "
        >
          STOREFRONT
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/shop"
            className="text-m font-semibold text-indigo-600 hover:text-indigo-700 "
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-m font-semibold text-indigo-600 hover:text-indigo-700 "
          >
            Contact
          </Link>
          
        </nav>
      </div>
    </header>
  );
}