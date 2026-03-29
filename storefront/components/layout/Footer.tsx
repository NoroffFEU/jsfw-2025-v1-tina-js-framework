import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-indigo-950 py-12 px-12">
      <div className="grid grid-cols-1  gap-8  items-center justify-items-center  ">
        <div className="">
          <h2 className="text-white font-heading font-bold text-3xl">
            STOREFRONT
          </h2>
        </div>

        <div>
          <Link
            href="/contact"
            className="font-heading text-indigo-200 hover:text-white font-bold text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
