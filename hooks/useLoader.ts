import { useEffect } from "react";

const useLoader = () => {
  useEffect(() => {
    if (typeof window === undefined) return;

    let timeout: number | undefined;

    const initialTimeout = window.setTimeout(() => {
      const loader: HTMLElement | null = document.querySelector(".loader");

      if (loader) {
        loader.style.opacity = "0";

        timeout = window.setTimeout(() => {
          loader?.parentNode?.removeChild(loader);
        }, 300);
      }
    }, 600);

    return () => {
      if (typeof window !== undefined) {
        window.clearTimeout(timeout);
        window.clearTimeout(initialTimeout);
      }
    };
  }, []);
};

export { useLoader };
