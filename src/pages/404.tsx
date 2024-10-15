import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../components/LanguageContext";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const { translations } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const notFoundMessage = translations.not_found_message as string;
  const notFoundMessageWithCountDown = notFoundMessage.replace(
    "{countdown}",
    countdown.toString(),
  );

  return (
    <div className="relative w-screen space-x-3 py-10 text-center md:mt-16 md:h-screen lg:flex">
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="relative z-10 mx-auto my-auto flex flex-col items-center px-10 lg:h-full lg:w-[50%] lg:justify-center">
        <h1 className="mb-4 text-4xl font-bold">
          {translations.not_found_error}
        </h1>
        <p className="text-lg">{notFoundMessageWithCountDown}</p>
      </div>
      <div className="relative h-fit lg:flex lg:h-full lg:w-[50%]">
        <img
          src="/src/assets/pictures/dog.png"
          alt="Chien"
          className="mx-auto h-full w-full"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-[10rem] font-bold text-black opacity-60">
          404
        </h1>
      </div>
    </div>
  );
}
