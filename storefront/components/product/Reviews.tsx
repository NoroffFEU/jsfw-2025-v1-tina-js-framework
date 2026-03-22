import { Review } from "@/schemas/productSchema";

export default function ReviewSection({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div>
        <p className=" text-gray-500">
          No reviews available for this product yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-indigo-200  md:p-12 sm:p-6" >
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3 className="text-sm"> {review.username}</h3>

          <p className="text-l">{review.description}</p>
        </div>
      ))}
    </div>
  );
}
