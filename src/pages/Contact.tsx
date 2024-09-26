import ContactCard from "../components/Contact-Card";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="md:flex mt-20 mb-3 md:justify-evenly bg-iris_purple rounded-lg shadow-lg md:w-[75%] w-[90%] mx-auto flex-col md:flex-row">
        <ContactForm className="md:order-3 order-1" />

        <div className="w-[1px] bg-white my-14 hidden md:flex md:order-2" />
        <div className="h-[1px] bg-white mx-12 md:hidden order-2" />

        <ContactCard shouldShadow={false} className="md:order-1 order-3" />
      </div>
    </>
  );
}
