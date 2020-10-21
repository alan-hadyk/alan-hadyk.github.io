import { useLayoutEffect, useRef } from "react";

import { UseResizeArgs } from "<hooks>/__typings__/useResize.d.ts";

// TODO: Add tests for this hook
export default function useResize({
  breakpoint,
  callback
}: UseResizeArgs): void {
  const called = useRef<boolean>(false);

  useLayoutEffect(() => {
    function executeCallback() {
      if (window.innerWidth >= parseInt(breakpoint) && !called.current) {
        callback();
        called.current = true;
      } else {
        called.current = false;
      }
    }

    window.addEventListener("resize", executeCallback);

    return () => window.removeEventListener("resize", executeCallback);
  }, [breakpoint, callback, called]);
}
