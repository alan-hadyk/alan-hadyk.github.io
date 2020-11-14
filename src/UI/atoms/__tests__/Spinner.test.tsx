import React from "react";
import { RenderResult } from "@testing-library/react";

import Spinner from "UI/atoms/Spinner";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("atoms / Spinner", () => {
  describe("Styles", () => {
    let SpinnerContainer: Element;

    beforeEach(() => {
      SpinnerContainer = setup().SpinnerContainer;
    });

    describe("animation-duration", () => {
      test("should have calc(300ms + 900ms)", () => {
        expect(SpinnerContainer).toHaveStyleRule(
          "animation-duration",
          "calc( 300ms + 900ms )"
        );
      });
    });

    describe("animation-iteration-count", () => {
      test("should have infinite", () => {
        expect(SpinnerContainer).toHaveStyleRule(
          "animation-iteration-count",
          "infinite"
        );
      });
    });

    describe("animation-timing-function", () => {
      test("should have linear", () => {
        expect(SpinnerContainer).toHaveStyleRule(
          "animation-timing-function",
          "linear"
        );
      });
    });

    describe("border", () => {
      test("should have 0.25vh solid", () => {
        expect(SpinnerContainer).toHaveStyleRule("border", "0.25vh solid");
      });
    });

    describe("border-color", () => {
      test("should have #78b0b5 transparent", () => {
        expect(SpinnerContainer).toHaveStyleRule(
          "border-color",
          "#78b0b5 transparent"
        );
      });
    });

    describe("border-radius", () => {
      test("should have 50%", () => {
        expect(SpinnerContainer).toHaveStyleRule("border-radius", "50%");
      });
    });

    describe("display", () => {
      test("should have inline-block", () => {
        expect(SpinnerContainer).toHaveStyleRule("display", "inline-block");
      });
    });

    describe("height", () => {
      test("should have 12vh", () => {
        expect(SpinnerContainer).toHaveStyleRule("height", "12vh");
      });
    });

    describe("width", () => {
      test("should have 12vh", () => {
        expect(SpinnerContainer).toHaveStyleRule("width", "12vh");
      });
    });
  });
});

interface Setup extends RenderResult {
  SpinnerContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<Spinner />);

  const { container } = utils || {};

  const SpinnerContainer: Element = container.children[0];

  return {
    ...utils,
    SpinnerContainer
  };
}
