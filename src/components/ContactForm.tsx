import emailjs from "emailjs-com";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../components/Button";
import { buttonText } from "../data/constant";
export default function ContactForm({ className }: { className: string }) {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "Aïdée",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        userID // Remplace avec ton user_id
      )
      .then((response) => {
        console.log(
          "SUCCESS!",
          response.status,
          response.text,
          response,
          formData
        );
        alert("Email envoyé avec succès !");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Échec de l'envoi de l'email.");
      });
  };

  return (
    <section className={`md:w-[50%] mx-5 ${className}`}>
      <div className="text-center py-10 md:mx-3 w-full">
        <h1 className="text-3xl font-bold mb-4">
          Pour prendre contact directement
        </h1>
        <div className="text-right mb-4 -mt-3">* (champs obligatoire)</div>
        <form className="max-w-lg mx-auto" onSubmit={sendEmail}>
          <div className="mb-4 relative">
            <label htmlFor="name" className="block text-left mb-2">
              Nom*
            </label>
            <span className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
              <FaUser className="text-iris_purple h-5 w-5" />
            </span>
            <input
              type="text"
              value={formData.from_name}
              name="from_name"
              onChange={handleChange}
              className="w-full px-3 pl-10 py-2 border rounded"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-left mb-2">
              Email*
            </label>
            <span className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
              <MdEmail className="text-iris_purple h-5 w-5" />
            </span>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded pl-10"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">
              Message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Votre message"
              rows={4}
              required
              style={{ resize: "none", height: "auto" }}
            ></textarea>
          </div>
          <Button text={buttonText.send} type="submit" />
        </form>
      </div>
    </section>
  );
}
