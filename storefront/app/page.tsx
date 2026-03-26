import { SearchBar } from "@/components/ui/SearchBar";
import { getProducts } from "@/services/api";
import { Card } from "@/components/ui/card/Card";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="">
      <div className="bg-indigo-950 py-28 flex flex-col items-center text-center gap-8">
        <h1 className="font-heading text-3xl text-white ">
          Quality products that fits your budget
        </h1>
        <SearchBar products={products} />
      </div>
      <div className="px-12 pt-12 pb-16">
        <h2 className="font-heading text-xl text-indigo-900 font-bold mb-8">Products on sale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
          {products
            .filter((p) => p.discountedPrice < p.price)
            .slice(0, 8)
            .map((p) => (
              <Card key={p.id} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
}
