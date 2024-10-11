import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../components/Button";
import { LanguageContext } from "./LanguageContext";
export default function ContactForm({ className }: { className: string }) {
  const { translations } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "Aïdée",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviceID = import.meta.env.VITE_SERVICE_EMAIL_ID as string;

  const templateID = import.meta.env.VITE_TEMPLATE_EMAIL_ID as string;
  const userID = import.meta.env.VITE_USER_EMAIL_ID as string;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        serviceID, // Remplace avec ton service_id
        templateID, // Remplace avec ton template_id
        formData,
        userID, // Remplace avec ton user_id
      )
      .then((response) => {
        console.log(
          "SUCCESS!",
          response.status,
          response.text,
          response,
          formData,
        );
        alert("Email envoyé avec succès !");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Échec de l'envoi de l'email.");
      });
  };

  return (
    <section className={`mx-5 md:w-[50%] ${className}`}>
      <div className="w-full py-5 text-center md:mx-3 md:py-5">
        <h1 className="mb-4 text-3xl font-bold">
          {translations.message_sentence}
        </h1>

        <div className="-mt-3 mb-4 text-right">* ({translations.required})</div>
        <form className="mx-auto max-w-lg" onSubmit={sendEmail}>
          <div className="relative mb-4">
            <label htmlFor="name" className="mb-2 block text-left">
              {translations.name}*
            </label>
            <span className="absolute inset-y-0 left-0 top-8 flex items-center rounded-s bg-white p-2">
              <FaUser className="h-5 w-5 text-iris_purple" />
            </span>
            <input
              type="text"
              value={formData.from_name}
              name="from_name"
              onChange={handleChange}
              className="w-full rounded border bg-transparent px-3 py-2 pl-10 placeholder-slate-300"
              placeholder={translations.name as string}
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="mb-2 block text-left">
              {translations.email}*
            </label>
            <span className="absolute inset-y-0 left-0 top-8 flex items-center rounded-s bg-white p-2">
              <MdEmail className="h-5 w-5 text-iris_purple" />
            </span>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="w-full rounded border bg-transparent px-3 py-2 pl-10 placeholder-slate-300"
              placeholder={translations.email as string}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-left">
              {translations.message}*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded border bg-transparent px-3 py-2 placeholder-slate-300"
              placeholder={translations.message as string}
              rows={4}
              required
              style={{ resize: "none", height: "auto" }}
            ></textarea>
          </div>
          <Button text={translations.send as string} type="submit" />
        </form>
      </div>
    </section>
  );
}
