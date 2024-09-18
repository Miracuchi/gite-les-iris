export default function Contact() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Contactez-Nous</h1>
      <p className="text-lg mb-6">
        Pour toute question ou demande d'information, n'hésitez pas à nous
        contacter.
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded"
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded"
            placeholder="Votre message"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
