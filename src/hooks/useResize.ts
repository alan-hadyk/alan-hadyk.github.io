import { useLayoutEffect, useState } from 'react';

import {
  UseResizeArgs
} from "<hooks>/__typings__/useResize.d.ts";

export default function useResize({
  breakpoint,
  callback
}: UseResizeArgs): void {
  const [called, setCalled] = useState(false);

  useLayoutEffect(() => {
    function executeCallback() {
      if (window.innerWidth >= parseInt(breakpoint) && !called) {
        callback();
        setCalled(true);
      } else {
        setCalled(false);
      }
    }

    window.addEventListener("resize", executeCallback);
    return () => window.removeEventListener("resize", executeCallback);
  }, [breakpoint, callback, called]);
}