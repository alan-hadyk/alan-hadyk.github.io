import React from "react";
import { RenderResult } from "@testing-library/react";

import Responsive from "layout/Responsive";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ResponsiveProps } from "layout/__typings__/Responsive";

describe("layout / Responsive", () => {
  describe("children", () => {
    test("should render children for tv", () => {
      const { ResponsiveTV } = setup({
        children: <div>Custom children</div>,
        devices: ["tv"]
      });

      expect(ResponsiveTV.textContent).toEqual("Custom children");
    });

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

  describe("ResponsiveTv", () => {
    test("should render if device is tv", () => {
      const {
        ResponsiveDesktop,
        ResponsiveMobile,
        ResponsiveTV,
        ResponsiveTablet
      } = setup({
        children: <div>Custom children</div>,
        devices: ["tv"]
      });

      expect(ResponsiveTV).toBeTruthy();
      expect(ResponsiveDesktop).toBeFalsy();
      expect(ResponsiveMobile).toBeFalsy();
      expect(ResponsiveTablet).toBeFalsy();
    });

    describe("Styles", () => {
      describe("display", () => {
        test("should have none by default", () => {
          const { ResponsiveTV } = setup({
            devices: ["tv"]
          });

          expect(ResponsiveTV).toHaveStyleRule("display", "none");
        });

        test("should have block for min-width: 1681px", () => {
          const { ResponsiveTV } = setup({
            devices: ["tv"]
          });

          expect(ResponsiveTV).toHaveStyleRule("display", "block", {
            media: "(min-width:1681px)"
          });
        });
      });

      describe("height", () => {
        test("should have auto by default", () => {
          const { ResponsiveTV } = setup({
            devices: ["tv"]
          });

          expect(ResponsiveTV).toHaveStyleRule("height", "auto");
        });

        test("should have 100% passed via height prop", () => {
          const { ResponsiveTV } = setup({
            devices: ["tv"],
            height: "100%"
          });

          expect(ResponsiveTV).toHaveStyleRule("height", "100%");
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ResponsiveTV } = setup({
            devices: ["tv"]
          });

          expect(ResponsiveTV).toHaveStyleRule("width", "auto");
        });

        test("should have 100% passed via width prop", () => {
          const { ResponsiveTV } = setup({
            devices: ["tv"],
            width: "100%"
          });

          expect(ResponsiveTV).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("ResponsiveDesktop", () => {
    test("should render if device is desktop", () => {
      const {
        ResponsiveDesktop,
        ResponsiveMobile,
        ResponsiveTV,
        ResponsiveTablet
      } = setup({
        children: <div>Custom children</div>,
        devices: ["desktop"]
      });

      expect(ResponsiveDesktop).toBeTruthy();
      expect(ResponsiveTV).toBeFalsy();
      expect(ResponsiveMobile).toBeFalsy();
      expect(ResponsiveTablet).toBeFalsy();
    });

    describe("Styles", () => {
      describe("display", () => {
        test("should have none by default", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"]
          });

          expect(ResponsiveDesktop).toHaveStyleRule("display", "none");
        });

        test("should have block for min-width: 1281px and max-width: 1680px", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"]
          });

          expect(ResponsiveDesktop).toHaveStyleRule("display", "block", {
            media: "(min-width:1281px) and (max-width:1680px)"
          });
        });
      });

      describe("height", () => {
        test("should have auto by default", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"]
          });

          expect(ResponsiveDesktop).toHaveStyleRule("height", "auto");
        });

        test("should have 100% passed via height prop", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"],
            height: "100%"
          });

          expect(ResponsiveDesktop).toHaveStyleRule("height", "100%");
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"]
          });

          expect(ResponsiveDesktop).toHaveStyleRule("width", "auto");
        });

        test("should have 100% passed via width prop", () => {
          const { ResponsiveDesktop } = setup({
            devices: ["desktop"],
            width: "100%"
          });

          expect(ResponsiveDesktop).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("ResponsiveTablet", () => {
    test("should render if device is tablet", () => {
      const {
        ResponsiveDesktop,
        ResponsiveMobile,
        ResponsiveTV,
        ResponsiveTablet
      } = setup({
        children: <div>Custom children</div>,
        devices: ["tablet"]
      });

      expect(ResponsiveTablet).toBeTruthy();
      expect(ResponsiveTV).toBeFalsy();
      expect(ResponsiveDesktop).toBeFalsy();
      expect(ResponsiveMobile).toBeFalsy();
    });

    describe("Styles", () => {
      describe("display", () => {
        test("should have none by default", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"]
          });

          expect(ResponsiveTablet).toHaveStyleRule("display", "none");
        });

        test("should have block for min-width: 641px and max-width: 1280px", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"]
          });

          expect(ResponsiveTablet).toHaveStyleRule("display", "block", {
            media: "(min-width:641px) and (max-width:1280px)"
          });
        });
      });

      describe("height", () => {
        test("should have auto by default", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"]
          });

          expect(ResponsiveTablet).toHaveStyleRule("height", "auto");
        });

        test("should have 100% passed via height prop", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"],
            height: "100%"
          });

          expect(ResponsiveTablet).toHaveStyleRule("height", "100%");
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"]
          });

          expect(ResponsiveTablet).toHaveStyleRule("width", "auto");
        });

        test("should have 100% passed via width prop", () => {
          const { ResponsiveTablet } = setup({
            devices: ["tablet"],
            width: "100%"
          });

          expect(ResponsiveTablet).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("ResponsiveMobile", () => {
    test("should render if device is mobile", () => {
      const {
        ResponsiveDesktop,
        ResponsiveMobile,
        ResponsiveTV,
        ResponsiveTablet
      } = setup({
        children: <div>Custom children</div>,
        devices: ["mobile"]
      });

      expect(ResponsiveMobile).toBeTruthy();
      expect(ResponsiveTablet).toBeFalsy();
      expect(ResponsiveTV).toBeFalsy();
      expect(ResponsiveDesktop).toBeFalsy();
    });

    describe("Styles", () => {
      describe("display", () => {
        test("should have none by default", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveMobile).toHaveStyleRule("display", "none");
        });

        test("should have block for max-width: 640px", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveMobile).toHaveStyleRule("display", "block", {
            media: "(max-width:640px)"
          });
        });
      });

      describe("height", () => {
        test("should have auto by default", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveMobile).toHaveStyleRule("height", "auto");
        });

        test("should have 100% passed via height prop", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"],
            height: "100%"
          });

          expect(ResponsiveMobile).toHaveStyleRule("height", "100%");
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveMobile).toHaveStyleRule("width", "auto");
        });

        test("should have 100% passed via width prop", () => {
          const { ResponsiveMobile } = setup({
            devices: ["mobile"],
            width: "100%"
          });

          expect(ResponsiveMobile).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTV: Element;
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
    <Responsive {...props}>{props.children}</Responsive>
  );

  const { queryByTestId }: RenderResult = utils;

  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveMobile: Element = queryByTestId("ResponsiveMobile");
  const ResponsiveTV: Element = queryByTestId("ResponsiveTv");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");

  return {
    ...utils,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTV,
    ResponsiveTablet
  };
}
