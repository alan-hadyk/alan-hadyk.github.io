import { useEffect } from "react";

const useLoader = () => {
  useEffect(() => {
    if (typeof window === undefined) return;
    const hideLoader = () => {
      const loader = document.querySelector(".loader") as HTMLElement | null;
      if (!loader) return;

      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 300);
    };

    const initialTimeout = window.setTimeout(hideLoader, 600);

    return () => {
      window.clearTimeout(initialTimeout);
    };
  }, []);
};

export { useLoader };
