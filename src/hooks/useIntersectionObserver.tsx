import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  elementRef: RefObject<HTMLDivElement>,
  options: IntersectionObserverInit,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Déconnecter l'observateur une fois que l'élément est visible (si l'animation doit se déclencher qu'une seule fois)
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [elementRef, options]);

  return isVisible;
};
