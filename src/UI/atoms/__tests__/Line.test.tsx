import React from "react";
import { RenderResult } from "@testing-library/react";

import Line from "atoms/Line";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { LineProps } from "atoms/__typings__/Line";

describe("atoms / Line", () => {
  describe("Styles", () => {
    describe("background-color", () => {
      test("should have #fff", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule("background-color", "#fff");
      });
    });

    describe("bottom", () => {
      test("should have 0", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule("bottom", "0");
      });
    });

    describe("box-shadow", () => {
      test("should have 0px 0px .4rem 0px #bcd8db", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule(
          "box-shadow",
          "0px 0px .4rem 0px #bcd8db"
        );
      });
    });

    describe("display", () => {
      test("should have block", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule("display", "block");
      });
    });

    describe("height", () => {
      test("should have 1px", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule("height", "1px");
      });
    });

    describe("opacity", () => {
      test("should have 1 when is active", () => {
        const { LineContainer } = setup({
          isActive: true
        });

        expect(LineContainer).toHaveStyleRule("opacity", "1");
      });

      test("should have 0 when is not active", () => {
        const { LineContainer } = setup({
          isActive: false
        });

        expect(LineContainer).toHaveStyleRule("opacity", "0");
      });
    });

    describe("position", () => {
      test("should have absolute", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule("position", "absolute");
      });
    });

    describe("transition", () => {
      test("should have all 150ms ease-in-out", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule(
          "transition",
          "all 150ms ease-in-out"
        );
      });
    });

    describe("visibility", () => {
      test("should have visible when is active", () => {
        const { LineContainer } = setup({
          isActive: true
        });

        expect(LineContainer).toHaveStyleRule("visibility", "visible");
      });

      test("should have hidden when is not active", () => {
        const { LineContainer } = setup({
          isActive: false
        });

        expect(LineContainer).toHaveStyleRule("visibility", "hidden");
      });
    });

    describe("width", () => {
      test("should have 50% when is active", () => {
        const { LineContainer } = setup({
          isActive: true
        });

        expect(LineContainer).toHaveStyleRule("width", "50%");
      });

      test("should have 0 when is not active", () => {
        const { LineContainer } = setup({
          isActive: false
        });

        expect(LineContainer).toHaveStyleRule("width", "0");
      });
    });

    describe("z-index", () => {
      test("should have 100", () => {
        const { LineContainer } = setup();

        expect(LineContainer).toHaveStyleRule("z-index", "100");
      });
    });

    describe("left", () => {
      test("should have 50% if direction is set to left", () => {
        const { LineContainer } = setup({
          direction: "left"
        });

        expect(LineContainer).toHaveStyleRule("left", "50%");
      });

      test("should not have if direction is set to right", () => {
        const { LineContainer } = setup({
          direction: "right"
        });

        expect(LineContainer).not.toHaveStyleRule("left", "50%");
      });
    });

    describe("right", () => {
      test("should have 50% if direction is set to right", () => {
        const { LineContainer } = setup({
          direction: "right"
        });

        expect(LineContainer).toHaveStyleRule("right", "50%");
      });

      test("should not have if direction is set to left", () => {
        const { LineContainer } = setup({
          direction: "left"
        });

        expect(LineContainer).not.toHaveStyleRule("right", "50%");
      });
    });
  });
});

interface Setup extends RenderResult {
  LineContainer: Element;
}

type LineTestProps = Partial<LineProps>;

function setup(additionalProps?: LineTestProps): Setup {
  const props: LineProps = {
    direction: "left",
    isActive: false,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Line {...props} />);

  const { queryByTestId } = utils || {};

  const LineContainer: Element = queryByTestId("Line");

  return {
    ...utils,
    LineContainer
  };
}
