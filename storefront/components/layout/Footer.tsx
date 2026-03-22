import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 mt-12 p-12">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  justify-items-center ">
          <div className="">
            <span className="text-amber-400 font-bold text-lg">STOREFRONT</span>
            <p className="text-amber-200  text-sm italic">Quality products at great prices</p>
         
          </div>

          <div>
            <ul>
              <li>
                <Link href="/contact" className="text-amber-400 hover:text-amber-200 font-bold text-lg"> Contact Us</Link>
              </li>
            </ul>
          </div>
          
        </div>
        </div>
        <div className=" text-amber-400 text-sm grid grid-cols-1 justify-items-center md:pt-12 sm:pt-8">
          <p>&copy; {new Date().getFullYear()} Noroff Course Assignment</p>
      </div>
    </footer>
  );
}
