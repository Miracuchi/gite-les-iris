import AboutSection from "../components/AboutSection";
import ContactCard from "../components/Contact-Card";

export default function About() {
  return (
    <div className="md:flex md:mt-16">
      <AboutSection />
      <ContactCard shouldShadow={true} />
    </div>
  );
}
