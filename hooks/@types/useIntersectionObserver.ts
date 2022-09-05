export interface IUseIntersectionObserver {
  onElementVisible: (arg1: string) => void;
  selectors: string[];
}

export type TIntersectionObserverType = IntersectionObserver;

export interface IIntersectionObserverWithPolyfill
  extends IntersectionObserver {
  POLL_INTERVAL?: number;
}
