import PhilosophySections from "./sections/PhilosophySections";
import BookTopicsSection from "./sections/BookTopicsSection";
import ReviewsSections from "./sections/ReviewsSections";
import AudienceSections from "./sections/AudienceSections";

interface ContentSectionsProps {
  scrollToSection?: (id: string) => void;
}

export default function ContentSections({ scrollToSection }: ContentSectionsProps = {}) {
  return (
    <>
      <PhilosophySections />
      <BookTopicsSection />
      <ReviewsSections scrollToSection={scrollToSection} />
      <AudienceSections scrollToSection={scrollToSection} />
    </>
  );
}