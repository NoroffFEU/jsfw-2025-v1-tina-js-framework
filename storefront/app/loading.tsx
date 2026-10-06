export default function Loading() {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto px-4 py-24 font-body"
    >
      <div
        className="size-10 rounded-full border-2 border-indigo-100 border-t-indigo-600 animate-spin"
        aria-hidden="true"
      />
      <p className="text-sm text-indigo-800">Loading...</p>
    </div>
  );
}