import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string | number;
  comment: string;
  rating?: number;
  user?: {
    name?: string;
  };
}

interface ReviewSectionProps {
  propertyId: string | number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div>
      <h3>Property Reviews</h3>
      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            borderBottom: "1px solid #ddd",
            marginBottom: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <p style={{ margin: 0, fontStyle: "italic" }}>"{review.comment}"</p>
          {review.user?.name && (
            <p style={{ margin: 0, fontWeight: "bold" }}>
              - {review.user.name}
            </p>
          )}
          {review.rating && (
            <p style={{ margin: 0 }}>Rating: {review.rating}/5</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
