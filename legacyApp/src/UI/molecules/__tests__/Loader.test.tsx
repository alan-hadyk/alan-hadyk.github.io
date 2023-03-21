import { RenderResult } from "@testing-library/react";

import Loader from "UI/molecules/Loader";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("molecules / Loader", () => {
  let FlexContainer: Element;
  let PositionContainer: Element;
  let Spinner: Element;

  beforeEach(() => {
    const setupResult = setup();

    FlexContainer = setupResult.FlexContainer;
    PositionContainer = setupResult.PositionContainer;
    Spinner = setupResult.Spinner;
  });

  test("should have correct structure", () => {
    expect(PositionContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(Spinner);
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          expect(PositionContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center", () => {
          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {
        test("should have center", () => {
          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  PositionContainer: Element;
  Spinner: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<Loader />);

  const { queryAllByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryAllByTestId("FlexContainer")[0];
  const PositionContainer: Element = queryAllByTestId("Loader")[0];
  const Spinner: Element = queryAllByTestId("Spinner")[0];

  return {
    ...utils,
    FlexContainer,
    PositionContainer,
    Spinner
  };
}
