import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello there</h1>
        <Link href="/shop"> Shop </Link>
        <Link href="/contact"> Contact Us </Link>
      </main>
    </div>
  );
}
