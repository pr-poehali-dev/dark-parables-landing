import AuthorAndStatsSection from "./reviews/AuthorAndStatsSection";
import DetailedReviewsSection from "./reviews/DetailedReviewsSection";
import ReaderInsightsSection from "./reviews/ReaderInsightsSection";
import TargetAudienceSection from "./reviews/TargetAudienceSection";

interface ReviewsSectionsProps {
  scrollToSection?: (id: string) => void;
}

export default function ReviewsSections({ scrollToSection }: ReviewsSectionsProps = {}) {
  return (
    <>
      <AuthorAndStatsSection scrollToSection={scrollToSection} />
      <DetailedReviewsSection scrollToSection={scrollToSection} />
      <ReaderInsightsSection scrollToSection={scrollToSection} />
      <TargetAudienceSection />
    </>
  );
}