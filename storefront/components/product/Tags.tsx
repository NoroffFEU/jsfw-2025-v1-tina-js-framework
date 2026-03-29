export default function TagsSection({ tags }: { tags: string[] }) {
  if (tags.length === 0) {
    return (
      <div>
        <p className="text-indigo-400 font-body text-sm">
          No tags for this product.
        </p>
      </div>
    );
  }

  return (
    <div>
      {tags.map((tags) => (
        <div
          key={tags}
          className="inline-block bg-indigo-100  px-3 py-1 text-sm font-bold text-indigo-800 mr-2 mb-2"
        >
          {tags}
        </div>
      ))}
    </div>
  );
}
