import Link from "next/link";
export default async function CheckoutSuccess() {


  return (
    <div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Order successfully placed</h1>
        
        <Link href="/"> Back to store </Link>
    
      
      </main>
    </div>
  );
}