import React from "react";
import { RenderResult } from "@testing-library/react";

import Responsive from "<layout>/Responsive";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ResponsiveProps
} from "<layout>/__typings__/Responsive.d.ts";

describe("layout / Responsive", () => {
  describe("children", () => {
    test("should render children for desktop", () => {
      const { ResponsiveDesktop } = setup({
        children: <div>Custom children</div>,
        devices: ["desktop"]
      });
  
      expect(ResponsiveDesktop.textContent).toEqual("Custom children");
    });
  
    test("should render children for tablet", () => {
      const { ResponsiveTablet } = setup({
        children: <div>Custom children</div>,
        devices: ["tablet"]
      });
  
      expect(ResponsiveTablet.textContent).toEqual("Custom children");
    });

    test("should render children for mobile", () => {
      const { ResponsiveMobile } = setup({
        children: <div>Custom children</div>,
        devices: ["mobile"]
      });
  
      expect(ResponsiveMobile.textContent).toEqual("Custom children");
    });
  });

  describe("ResponsiveDesktop", () => {
    test("should render if device is equal desktop", () => {
      const { ResponsiveDesktop } = setup({
        children: <div>Custom children</div>,
        devices: ["desktop"]
      });
  
      expect(ResponsiveDesktop).toBeTruthy();
    });

    describe("Styles", () => {
      describe("display", () => {      
        test("should have none for max-width: 1680px", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"]
          });
    
          expect(ResponsiveDesktop).toHaveStyleRule("display", "none", {
            media: "(max-width:1680px)"
          });
        });
      });
    });
  });

  describe("ResponsiveTablet", () => {
    test("should render if device is equal tablet", () => {
      const { ResponsiveTablet } = setup({
        children: <div>Custom children</div>,
        devices: ["tablet"]
      });

      expect(ResponsiveTablet).toBeTruthy();
    });

    describe("Styles", () => {
      describe("display", () => {      
        test("should have none for max-width: 1280px and min-width: 1680px", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"]
          });
    
          expect(ResponsiveTablet).toHaveStyleRule("display", "none", {
            media: "(max-width:1280px)"
          });

          expect(ResponsiveTablet).toHaveStyleRule("display", "none", {
            media: "(min-width:1680px)"
          });
        });
      });
    });
  });

  describe("ResponsiveMobile", () => {
    test("should render if device is equal mobile", () => {
      const { ResponsiveMobile } = setup({
        children: <div>Custom children</div>,
        devices: ["mobile"]
      });

      expect(ResponsiveMobile).toBeTruthy();
    });

    describe("Styles", () => {
      describe("display", () => {      
        test("should have none for min-width: 1680px", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveMobile).toHaveStyleRule("display", "none", {
            media: "(min-width:1280px)"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
}

type ResponsiveTestProps = Partial<ResponsiveProps>;

function setup(additionalProps?: ResponsiveTestProps): Setup {
  const props: ResponsiveProps = {
    children: <div>Responsive</div>,
    devices: ["desktop"],
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Responsive {...props}>
      {props.children}
    </Responsive>
  );

  const { queryByTestId }: RenderResult = utils;

  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveMobile: Element = queryByTestId("ResponsiveMobile");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");

  return {
    ...utils,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTablet
  };
}
