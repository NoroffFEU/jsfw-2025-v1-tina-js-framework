
// import { Products } from "@/types";
// import { Card } from "@/components/ui/card/Card";



// export function ProductGrid({ products }: { products: Products[] }) {
//       if (products.length === 0) {
//     return (
//       <div className="text-center py-20 text-gray-500">
//         <p className="text-lg">No products found.</p>
//       </div>
//     );
//   }

//     return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => (
//         <Card key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }
import { Product } from "@/types/index"
import { Card } from "@/components/ui/card/Card";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}