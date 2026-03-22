import { Review } from "@/schemas/productSchema";

export default function ReviewSection({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div>
        <p>No reviews available for this product yet.</p>
      </div>
    );
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <div>
            <span> {review.username}</span>
          </div>
          <p>{review.description}</p>
        </div>
      ))}
    </div>
  );
}
