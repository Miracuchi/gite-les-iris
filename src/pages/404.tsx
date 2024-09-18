import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
      <p className="text-lg">
        Désolé, la page que vous recherchez n'existe pas. Veuillez vérifier
        l'URL ou revenir à la page d'accueil. Vous serez redirigé dans 5
        secondes
      </p>
    </div>
  );
}
