import { SearchBar } from "@/components/ui/SearchBar";
import Link from "next/link";
import { getProducts } from "@/services/api"; 

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="font-heading">Hello there this is the store heading </h1>
        <p className="font-body">this is the body it is a text bla bla</p>
        <Link href="/shop"> Shop </Link>
        <Link href="/contact"> Contact Us </Link>
        <SearchBar products={products} />
      
      </main>
    </div>
  );
}
