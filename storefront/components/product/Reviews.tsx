import { Review } from "@/schemas/productSchema";
import RatingSection from "@/components/product/Rating";

export default function ReviewSection({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div>
        <p className="font-body text-indigo-400 text-sm">
          No reviews available for this product yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-indigo-50 border-indigo-100  p-4 sm:p-6 md:p12">
      <h2 className="font-heading text-2xl font-bold mb-6 text-indigo-950">
        Reviews
      </h2>
      {reviews.map((review) => (
        <div key={review.id} className="pb-8">
          <h3 className="font-heading text-sm font-bold text-indigo-800 mb-1">
            {" "}
            {review.username}
          </h3>
          <RatingSection rating={review.rating} />
          <p className="text-base text text-indigo-900">{review.description}</p>
        </div>
      ))}
    </div>
  );
}
