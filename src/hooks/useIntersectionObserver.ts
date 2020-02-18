import { useLayoutEffect } from "react";

interface UseIntersectionObserver {
  onElementVisible: (arg1: string) => void;
  selectors: string[];
}

interface IntersectionObserverWithPolyfill extends IntersectionObserver {
  POLL_INTERVAL?: number;
}

export default function useIntersectionObserver({
  onElementVisible,
  selectors
}: UseIntersectionObserver): void {
  useLayoutEffect(() => {
    const observer: IntersectionObserverWithPolyfill = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
      const intersectingElements: IntersectionObserverEntry[] = entries
        .filter(({ isIntersecting }) => isIntersecting);
      
      if(intersectingElements && intersectingElements[0]) {
        onElementVisible(`#${intersectingElements[0].target.id}`);
      } else {
        onElementVisible("");
      }
    }, { 
      threshold: [0.4] 
    });

    observer.POLL_INTERVAL = 100;

    selectors.forEach((selector: string): void => {
      observer.observe(document.querySelector(selector));
    });

    return (): void => observer.disconnect();
  }, [onElementVisible, selectors]);
}