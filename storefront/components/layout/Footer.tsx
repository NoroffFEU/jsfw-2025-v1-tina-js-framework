import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-indigo-950 mt-12 p-12">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center justify-items-center  ">
          <div className="">
            <h2 className="text-white font-heading font-bold text-3xl">
              STOREFRONT
            </h2>
          </div>

          <div>
            <Link
              href="/contact"
              className="font-heading text-indigo-200 hover:text-white font-bold text-lg transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-indigo-400 text-sm grid grid-cols-1 justify-items-center md:pt-12 sm:pt-8">
        <p> {new Date().getFullYear()} Noroff Course Assignment</p>
      </div>
    </footer>
  );
}
