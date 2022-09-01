import { useState, useRef, useLayoutEffect, useEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { IUseResizeArgs } from "hooks/@types/useResize";

const useResize = ({ breakpoint, callback }: IUseResizeArgs) => {
  const targetElement = useRef<HTMLBodyElement | null>(
    document.querySelector("body")
  );
  const [size, setSize] = useState<DOMRectReadOnly | undefined>(undefined);
  const called = useRef<boolean>(false);

  useLayoutEffect(() => {
    if (targetElement.current) {
      setSize(targetElement.current.getBoundingClientRect());
    }
  }, [targetElement]);

  useResizeObserver(targetElement, (entry) => setSize(entry?.contentRect));

  useEffect(() => {
    if (size && size?.width >= parseInt(breakpoint) && !called.current) {
      callback?.();
      called.current = true;
    } else {
      called.current = false;
    }
  }, [breakpoint, callback, size]);
};

export { useResize };
