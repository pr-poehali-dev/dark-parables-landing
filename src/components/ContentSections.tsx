import PhilosophySections from "./sections/PhilosophySections";
import BookTopicsSection from "./sections/BookTopicsSection";
import ReviewsSections from "./sections/ReviewsSections";
import AudienceSections from "./sections/AudienceSections";

export default function ContentSections() {
  return (
    <>
      <PhilosophySections />
      <BookTopicsSection />
      <ReviewsSections />
      <AudienceSections />
    </>
  );
}
