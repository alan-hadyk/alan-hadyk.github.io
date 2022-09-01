import { RenderResult } from "@testing-library/react";

import Image from "UI/atoms/Image";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("atoms / Line", () => {
  describe("Styles", () => {
    let Img: Element;

    beforeEach(() => {
      Img = setup().Img;
    });

    describe("display", () => {
      test("should have block", () => {
        expect(Img).toHaveStyleRule("display", "block");
      });
    });

    describe("height", () => {
      test("should have auto", () => {
        expect(Img).toHaveStyleRule("height", "auto");
      });
    });

    describe("width", () => {
      test("should have 100%", () => {
        expect(Img).toHaveStyleRule("width", "100%");
      });
    });
  });
});

interface Setup extends RenderResult {
  Img: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<Image />);

  const Img: Element = document.querySelector("img");

  return {
    ...utils,
    Img
  };
}
