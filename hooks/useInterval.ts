import { useEffect, useRef } from "react";

const useInterval = (callback: VoidFunction, delay: number): void => {
  const savedCallback = useRef<VoidFunction>(() => false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => savedCallback && savedCallback.current();
    const id: NodeJS.Timeout = setInterval(tick, delay);

    return (): void => clearInterval(id);
  }, [delay]);
};

export { useInterval };
