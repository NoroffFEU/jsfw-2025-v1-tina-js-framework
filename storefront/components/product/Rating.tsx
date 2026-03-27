// Add star icon rating later

export default function RatingSection({ rating }: { rating: number }) {
  if (rating === 0) {
    return (
      <div>
        <p className="text-indigo-400 font-body text-sm">No rating for this product yet.</p>
      </div>
    );
  }
return (
    <div className="text-sm text-indigo-800">
        Rated <span className=" text-lg font-bold text-indigo-900">{rating}/5 </span>
        by our customers
    </div>
)

}

