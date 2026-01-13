import AuthorAndStatsSection from "./reviews/AuthorAndStatsSection";
import DetailedReviewsSection from "./reviews/DetailedReviewsSection";
import ReaderInsightsSection from "./reviews/ReaderInsightsSection";
import TargetAudienceSection from "./reviews/TargetAudienceSection";

export default function ReviewsSections() {
  return (
    <>
      <AuthorAndStatsSection />
      <DetailedReviewsSection />
      <ReaderInsightsSection />
      <TargetAudienceSection />
    </>
  );
}
