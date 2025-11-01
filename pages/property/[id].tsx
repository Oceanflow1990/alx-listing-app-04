import { useRouter } from "next/router";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading property...</p>;

  return (
    <div>
      {/* Your property info here */}
      <ReviewSection propertyId={id as string} />
    </div>
  );
}
