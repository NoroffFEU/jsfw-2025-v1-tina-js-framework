// Add star icon rating later

export default function RatingSection({ rating }: { rating: number }) {
  if (rating === 0) {
    return (
      <div>
        <p>No rating for this product yet.</p>
      </div>
    );
  }
return (
    <div className="text-md">
        Rated <span className=" text-l font-bold text-indigo-500">{rating}/5 </span>
        by our customers
    </div>
)

}

