import React from "react";
import { RenderResult } from "@testing-library/react";

import Responsive from "UI/layout/Responsive";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ResponsiveProps } from "UI/layout/__typings__/Responsive";

describe("layout / Responsive", () => {
  describe("children", () => {
    test("should render children", () => {
      const { ResponsiveContainer } = setup({
        children: <div>Custom children</div>
      });

      expect(ResponsiveContainer.textContent).toEqual("Custom children");
    });
  });

  describe("ResponsiveContainer", () => {
    describe("Styles", () => {
      describe("display", () => {
        test("should have none by default", () => {
          const { ResponsiveContainer } = setup();

          expect(ResponsiveContainer).toHaveStyleRule("display", "none");
        });

        test("should have block for min-width: 1681px if device is tv", () => {
          const { ResponsiveContainer } = setup({
            devices: ["tv"]
          });

          expect(ResponsiveContainer).toHaveStyleRule("display", "block", {
            media: "(min-width:1681px)"
          });
        });

        test("should not have block for min-width: 1681px if device is not tv", () => {
          const { ResponsiveContainer } = setup({
            devices: ["desktop"]
          });

          expect(ResponsiveContainer).not.toHaveStyleRule("display", "block", {
            media: "(min-width:1681px)"
          });
        });

        test("should not have block for min-width: 1281px and max-width: 1680px if device is not desktop", () => {
          const { ResponsiveContainer } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveContainer).not.toHaveStyleRule("display", "block", {
            media: "(min-width:1281px) and (max-width:1680px)"
          });
        });

        test("should have block for min-width: 641px and max-width: 1280px if device is tablet", () => {
          const { ResponsiveContainer } = setup({
            devices: ["tablet"]
          });

          expect(ResponsiveContainer).toHaveStyleRule("display", "block", {
            media: "(min-width:641px) and (max-width:1280px)"
          });
        });

        test("should not have block for min-width: 641px and max-width: 1280px if device is not tablet", () => {
          const { ResponsiveContainer } = setup({
            devices: ["tv"]
          });

          expect(ResponsiveContainer).not.toHaveStyleRule("display", "block", {
            media: "(min-width:641px) and (max-width:1280px)"
          });
        });

        test("should have block for max-width: 640px if device is mobile", () => {
          const { ResponsiveContainer } = setup({
            devices: ["mobile"]
          });

          expect(ResponsiveContainer).toHaveStyleRule("display", "block", {
            media: "(max-width:640px)"
          });
        });

        test("should not have block for max-width: 640px if device is not mobile", () => {
          const { ResponsiveContainer } = setup({
            devices: ["desktop"]
          });

          expect(ResponsiveContainer).not.toHaveStyleRule("display", "block", {
            media: "(max-width:640px)"
          });
        });
      });

      describe("height", () => {
        test("should have auto by default", () => {
          const { ResponsiveContainer } = setup();

          expect(ResponsiveContainer).toHaveStyleRule("height", "auto");
        });

        test("should have 100% passed via height prop", () => {
          const { ResponsiveContainer } = setup({
            height: "100%"
          });

          expect(ResponsiveContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ResponsiveContainer } = setup();

          expect(ResponsiveContainer).toHaveStyleRule("width", "auto");
        });

        test("should have 100% passed via width prop", () => {
          const { ResponsiveContainer } = setup({
            width: "100%"
          });

          expect(ResponsiveContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ResponsiveContainer: Element;
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

  const ResponsiveContainer: Element = queryByTestId("Responsive");

  return {
    ...utils,
    ResponsiveContainer
  };
}
