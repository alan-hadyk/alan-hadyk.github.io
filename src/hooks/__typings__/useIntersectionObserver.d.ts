export interface UseIntersectionObserver {
  onElementVisible: (arg1: string) => void;
  selectors: string[];
}

export type IntersectionObserverType = IntersectionObserver;

export interface IntersectionObserverWithPolyfill extends IntersectionObserver {
  POLL_INTERVAL?: number;
}
