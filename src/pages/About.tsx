import AboutSection from "../components/AboutSection";
import ContactCard from "../components/ContactCard";
import MapSection from "../components/MapSection";

export default function About() {
  return (
    <section className="mb-10">
      <div className="md:mt-16 md:flex">
        <AboutSection />
        <ContactCard shouldShadow={true} />
      </div>
      <MapSection />
    </section>
  );
}
