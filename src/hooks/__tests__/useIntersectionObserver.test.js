/* eslint-disable */
import { renderHook } from "@testing-library/react-hooks";

import useIntersectionObserver from "<src>/hooks/useIntersectionObserver";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let windowSpy;

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

    function IntersectionObserver() {
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
      intersectionRatio: 0.3285198509693146,
      isIntersecting: true,
      target: {
        id: "portfolio"
      }
    }, {
      intersectionRatio: 0.3433498509693146,
      isIntersecting: false,
      target: {
        id: "experience"
      }
    }, {
      intersectionRatio: 0.533498509693146,
      isIntersecting: true,
      target: {
        id: "skills"
      }
    }];

    function IntersectionObserver(entries) {
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
