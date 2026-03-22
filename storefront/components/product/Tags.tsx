export default function TagsSection({ tags }: { tags: string[] }) {
  if (tags.length === 0) {
    return (
      <div>
        <p>No tags for this product.</p>
      </div>
    );
  }

  return (
    <div>
      {tags.map((tags) => (
        <div
          key={tags}
          className="inline-block bg-amber-100  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tags}
        </div>
      ))}
    </div>
  );
}
