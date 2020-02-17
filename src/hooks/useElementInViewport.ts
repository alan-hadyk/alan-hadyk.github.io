import { useLayoutEffect } from "react";

interface UseElementInViewport {
  onElementVisible: (arg1: string) => void;
  selectors: string[];
}

export default function useElementInViewport({
  onElementVisible,
  selectors
}: UseElementInViewport): void {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true) {
        onElementVisible(`#${entries[0].target.id}`);
      }
    }, { threshold: [0.5] });

    selectors.forEach(selector => observer.observe(document.querySelector(selector)));
  }, []);
}