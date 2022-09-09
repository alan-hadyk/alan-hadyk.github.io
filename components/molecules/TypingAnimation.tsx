import React, { useRef } from "react";
import { useInterval } from "hooks/useInterval";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const CODE = `import { useLayoutEffect } from "react";

import {
  IntersectionObserverWithPolyfill,
  UseIntersectionObserver
} from "hooks/__typings__/useIntersectionObserver";

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
  
      if (highestIntersection) {
        onElementVisible(\`#\${highestIntersection.target.id}\`);
      } else {
        onElementVisible("");
      }
    }, { 
      threshold: [0, 0.4]
    });

    observer.POLL_INTERVAL = 100;

    selectors.forEach((selector: string): void => {
      document.querySelector(selector) && observer.observe(document.querySelector(selector));
    });

    return (): void => observer.disconnect();
  }, [onElementVisible, selectors]);`;

function TypingAnimation(): JSX.Element {
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const currentChar = useRef<number>(0);

  const updateText = (): void => {
    if (!codeContainerRef.current) {
      return;
    }

    if (currentChar.current <= CODE.length) {
      codeContainerRef.current.innerHTML += CODE.charAt(currentChar.current);

      currentChar.current++;
    } else {
      codeContainerRef.current.innerHTML = "";

      currentChar.current = 0;
    }
  };

  useInterval(() => {
    updateText();
  }, 50);

  return (
    <LayoutContainer height="h-100%" position="relative">
      <pre data-testid="TypingAnimationPre">
        <code
          className={trimTemplateLiteral(`
            bottom-0 left-0 right-0 absolute
          text-blue300 text-8 font-anonymousPro
            leading-12
            min-h-100%

            after:animate-blink-default
            after:bg-blue100
            after:content-['']
            after:inline-block
            after:h-8 after:w-4
            after:ml-4
            after:translate-y-1
          `)}
          data-testid="TypingAnimationCode"
          ref={codeContainerRef}
        />
      </pre>
    </LayoutContainer>
  );
}

export { TypingAnimation, CODE };
