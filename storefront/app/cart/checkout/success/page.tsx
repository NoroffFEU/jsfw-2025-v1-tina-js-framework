import Link from "next/link";
export default function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-18  text-center">
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
      <h1 className="font-heading text-2xl ">
        Order Confirmed!
      </h1>
      <p className="text-sm">Thank you for your purchase. Your order has been received and is being
        processed.</p>
        <div className="py-6">
      <Link
        href="/"
        className="underline hover:text-indigo-600 "
      >
        Back to Store
      </Link>
      </div>
    </div>
  );
}
