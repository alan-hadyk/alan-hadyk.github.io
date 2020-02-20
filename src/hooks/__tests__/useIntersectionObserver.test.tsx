import { renderHook } from "@testing-library/react-hooks";

import useIntersectionObserver, { IntersectionObserverType } from "<src>/hooks/useIntersectionObserver";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let windowSpy: any;

beforeEach(() => {
  windowSpy = jest.spyOn(global, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe("hooks / useIntersectionObserver", () => {
  test("should call observe for each selector, and call disconnect when hook gets unmounted", () => {
    const observe = jest.fn();
    const disconnect = jest.fn();

    function IntersectionObserver(this: IntersectionObserverType): void {
      this.observe = observe;
      this.disconnect = disconnect;
      this.takeRecords = jest.fn();
      this.unobserve = jest.fn();
    }
  
    windowSpy.mockImplementation(() => ({
      IntersectionObserver,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }));
  

    const { unmount } = renderHook(() => useIntersectionObserver({
      onElementVisible: jest.fn(),
      selectors: ["#portfolio", "#experience", "#skills", "#about-me", "#contact"]
    }));

    expect(observe).toHaveBeenCalledTimes(5);

    unmount();

    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  test("should call onElementVisible with id element having highest intersection", () => {
    const observe = jest.fn();
    const disconnect = jest.fn();

    const mockEntries = [{
      isIntersecting: true,
      intersectionRatio: 0.3285198509693146,
      target: {
        id: "portfolio"
      }
    }, {
      isIntersecting: false,
      intersectionRatio: 0.3433498509693146,
      target: {
        id: "experience"
      }
    }, {
      isIntersecting: true,
      intersectionRatio: 0.533498509693146,
      target: {
        id: "skills"
      }
    }];

    interface IntersectionObserverEntryTest {
      isIntersecting: boolean;
      intersectionRatio: number;
      target: {
        id: string;
      };
    }


    function IntersectionObserver(this: IntersectionObserverType, entries: (arg1: IntersectionObserverEntryTest[]) => void): void {
      this.observe = observe;
      this.disconnect = disconnect;
      this.takeRecords = jest.fn();
      this.unobserve = jest.fn();

      entries(mockEntries);

    }

    windowSpy.mockImplementation(() => ({
      IntersectionObserver,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }));

    const onElementVisible = jest.fn();
    renderHook(() => useIntersectionObserver({
      onElementVisible,
      selectors: ["#portfolio", "#experience", "#skills", "#about-me", "#contact"]
    }));

    expect(onElementVisible).toHaveBeenNthCalledWith(1, "#skills");
  });
});
