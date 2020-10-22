import { useEffect, useRef } from "react";

export default function useInterval(
  callback: VoidFunction,
  delay: number
): void {
  const savedCallback = useRef<VoidFunction>(() => false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => savedCallback && savedCallback.current();
    const id: number = setInterval(tick, delay);

    return (): void => clearInterval(id);
  }, [delay]);
}
