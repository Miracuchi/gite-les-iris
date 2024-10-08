import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Initialiser le décompte à 5 secondes

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/"); // Rediriger vers la page d'accueil lorsque le décompte atteint 0
          clearInterval(timer); // Nettoyer l'intervalle
          return 0; // S'assurer que le compteur n'affiche pas un nombre négatif
        }
        return prev - 1; // Décrémenter le décompte
      });
    }, 1000); // Met à jour chaque seconde

    return () => clearInterval(timer); // Nettoyer l'intervalle à la destruction du composant
  }, [navigate]);

  return (
    <div className="text-center py-10 mt-16">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
      <p className="text-lg">
        Désolé, la page que vous recherchez n'existe pas. Veuillez vérifier
        l'URL ou revenir à la page d'accueil. Vous serez redirigé dans{" "}
        {countdown} secondes.
      </p>
    </div>
  );
}
