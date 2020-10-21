/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */

import { renderHook } from "@testing-library/react-hooks";
import { JSDOM } from "jsdom";

import useIntersectionObserver from "<hooks>/useIntersectionObserver";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(global, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe("hooks / useIntersectionObserver", () => {
  test("should call onElementVisible with id element having highest intersection", () => {
    const observe = jest.fn();
    const disconnect = jest.fn();

    const mockEntries = [
      {
        intersectionRatio: 0.3285198509693146,
        isIntersecting: true,
        target: {
          id: "portfolio"
        }
      },
      {
        intersectionRatio: 0.7433498509693146,
        isIntersecting: false,
        target: {
          id: "experience"
        }
      },
      {
        intersectionRatio: 0.533498509693146,
        isIntersecting: true,
        target: {
          id: "skills"
        }
      }
    ];

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
    renderHook(() =>
      useIntersectionObserver({
        onElementVisible,
        selectors: [
          "#portfolio",
          "#experience",
          "#skills",
          "#about-me",
          "#contact"
        ]
      })
    );

    expect(onElementVisible).toHaveBeenNthCalledWith(1, "#skills");
  });

  test("should call observe for selectors that exist in the DOM, and call disconnect when hook gets unmounted", () => {
    const observe = jest.fn();
    const disconnect = jest.fn();
    const spyQuerySelector = jest.fn();
    const dom = new JSDOM();
    global.document = dom.window.document;

    Object.defineProperty(global.document, "querySelector", {
      value: (selector) => {
        spyQuerySelector(selector);

        return selector === "#portfolio" || selector === "#skills";
      }
    });

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

    const { unmount } = renderHook(() =>
      useIntersectionObserver({
        onElementVisible: jest.fn(),
        selectors: [
          "#portfolio",
          "#experience",
          "#skills",
          "#about-me",
          "#contact"
        ]
      })
    );

    expect(observe).toHaveBeenCalledTimes(2);
    expect(spyQuerySelector).toHaveBeenNthCalledWith(1, "#portfolio");
    expect(spyQuerySelector).toHaveBeenNthCalledWith(2, "#portfolio");
    expect(spyQuerySelector).toHaveBeenNthCalledWith(3, "#experience");
    expect(spyQuerySelector).toHaveBeenNthCalledWith(4, "#skills");
    expect(spyQuerySelector).toHaveBeenNthCalledWith(5, "#skills");
    expect(spyQuerySelector).toHaveBeenNthCalledWith(6, "#about-me");
    expect(spyQuerySelector).toHaveBeenNthCalledWith(7, "#contact");

    expect(disconnect).toHaveBeenCalledTimes(0);

    unmount();

    expect(disconnect).toHaveBeenCalledTimes(1);
  });
});
