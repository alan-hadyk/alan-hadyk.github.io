import { useLayoutEffect } from "react";

export interface UseIntersectionObserver {
  onElementVisible: (arg1: string) => void;
  selectors: string[];
}

export type IntersectionObserverType = IntersectionObserver;

interface IntersectionObserverWithPolyfill extends IntersectionObserver {
  POLL_INTERVAL?: number;
}

export default function useIntersectionObserver({
  onElementVisible,
  selectors
}: UseIntersectionObserver): void {
  useLayoutEffect(() => {
    const observer: IntersectionObserverWithPolyfill = new window.IntersectionObserver((entries: IntersectionObserverEntry[]): void => { 
      const intersectingElements: IntersectionObserverEntry[] = entries
        .filter(({ isIntersecting }) => isIntersecting);
      const highestIntersection: IntersectionObserverEntry = (intersectingElements.length > 0) && 
        intersectingElements.reduce((prev, current) => (prev.intersectionRatio > current.intersectionRatio) ? prev : current);
  
      if(highestIntersection) {
        onElementVisible(`#${highestIntersection.target.id}`);
      } else {
        onElementVisible("");
      }
    }, { 
      threshold: [0, 0.4]
    });

    observer.POLL_INTERVAL = 100;

    selectors.forEach((selector: string): void => {
      observer.observe(document.querySelector(selector));
    });

    return (): void => observer.disconnect();
  }, [onElementVisible, selectors]);
}