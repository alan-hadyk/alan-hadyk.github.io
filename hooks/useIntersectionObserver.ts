import { useEffect } from "react";

import {
  IIntersectionObserverWithPolyfill,
  IUseIntersectionObserver
} from "hooks/@types/useIntersectionObserver";

const useIntersectionObserver = ({
  onElementVisible,
  selectors
}: IUseIntersectionObserver): void => {
  useEffect(() => {
    const observer: IIntersectionObserverWithPolyfill =
      new window.IntersectionObserver(
        (entries: IntersectionObserverEntry[]): void => {
          const intersectingElements: IntersectionObserverEntry[] =
            entries.filter(({ isIntersecting }) => isIntersecting);
          const highestIntersection: IntersectionObserverEntry | false =
            intersectingElements.length > 0 &&
            intersectingElements.reduce((prev, current) =>
              prev.intersectionRatio > current.intersectionRatio
                ? prev
                : current
            );

          if (highestIntersection) {
            onElementVisible(`#${highestIntersection.target.id}`);
          } else {
            onElementVisible("");
          }
        },
        {
          threshold: [0, 0.4]
        }
      );

    observer.POLL_INTERVAL = 100;

    selectors.forEach((selector: string): void => {
      const element = document.querySelector(selector);
      if (element) {
        observer.observe(element);
      }
    });

    return (): void => observer.disconnect();
  }, [onElementVisible, selectors]);
};

export { useIntersectionObserver };
