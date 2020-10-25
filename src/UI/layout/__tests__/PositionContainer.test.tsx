import React from "react";
import { RenderResult } from "@testing-library/react";

import PositionContainer from "UI/layout/PositionContainer";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { PositionContainerProps } from "UI/layout/__typings__/PositionContainer";

describe("layout / PositionContainer", () => {
  test("should render children", () => {
    const { PositionContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(PositionContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("bottom", () => {
      test("should have unset by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("bottom", "unset");
      });

      test("should have correct value passed via bottom prop", () => {
        const { PositionContainer } = setup({
          bottom: "spacing48"
        });

        expect(PositionContainer).toHaveStyleRule("bottom", "4.8rem");
      });

      test("should have 50% passed via bottom prop", () => {
        const { PositionContainer } = setup({
          bottom: "50%"
        });

        expect(PositionContainer).toHaveStyleRule("bottom", "50%");
      });

      test("should have 100% passed via bottom prop", () => {
        const { PositionContainer } = setup({
          bottom: "100%"
        });

        expect(PositionContainer).toHaveStyleRule("bottom", "100%");
      });
    });

    describe("height", () => {
      test("should have unset by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("height", "unset");
      });

      test("should have correct value passed via height prop", () => {
        const { PositionContainer } = setup({
          height: "spacing48"
        });

        expect(PositionContainer).toHaveStyleRule("height", "4.8rem");
      });

      test("should have 50% passed via height prop", () => {
        const { PositionContainer } = setup({
          height: "50%"
        });

        expect(PositionContainer).toHaveStyleRule("height", "50%");
      });

      test("should have 100% passed via height prop", () => {
        const { PositionContainer } = setup({
          height: "100%"
        });

        expect(PositionContainer).toHaveStyleRule("height", "100%");
      });

      test("should have 22.6vh passed via height prop", () => {
        const { PositionContainer } = setup({
          height: "22.6vh"
        });

        expect(PositionContainer).toHaveStyleRule("height", "22.6vh");
      });
    });

    describe("left", () => {
      test("should have unset by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("left", "unset");
      });

      test("should have correct value passed via left prop", () => {
        const { PositionContainer } = setup({
          left: "spacing48"
        });

        expect(PositionContainer).toHaveStyleRule("left", "4.8rem");
      });

      test("should have 50% passed via left prop", () => {
        const { PositionContainer } = setup({
          left: "50%"
        });

        expect(PositionContainer).toHaveStyleRule("left", "50%");
      });

      test("should have 100% passed via left prop", () => {
        const { PositionContainer } = setup({
          left: "100%"
        });

        expect(PositionContainer).toHaveStyleRule("left", "100%");
      });
    });

    describe("position", () => {
      test("should have relative by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("position", "relative");
      });

      test("should have static passed via position prop", () => {
        const { PositionContainer } = setup({
          position: "static"
        });

        expect(PositionContainer).toHaveStyleRule("position", "static");
      });

      test("should have fixed passed via position prop", () => {
        const { PositionContainer } = setup({
          position: "fixed"
        });

        expect(PositionContainer).toHaveStyleRule("position", "fixed");
      });

      test("should have sticky passed via position prop", () => {
        const { PositionContainer } = setup({
          position: "sticky"
        });

        expect(PositionContainer).toHaveStyleRule("position", "sticky");
      });

      test("should have absolute passed via position prop", () => {
        const { PositionContainer } = setup({
          position: "absolute"
        });

        expect(PositionContainer).toHaveStyleRule("position", "absolute");
      });
    });

    describe("right", () => {
      test("should have unset by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("right", "unset");
      });

      test("should have correct value passed via right prop", () => {
        const { PositionContainer } = setup({
          right: "spacing48"
        });

        expect(PositionContainer).toHaveStyleRule("right", "4.8rem");
      });

      test("should have 50% passed via right prop", () => {
        const { PositionContainer } = setup({
          right: "50%"
        });

        expect(PositionContainer).toHaveStyleRule("right", "50%");
      });

      test("should have 100% passed via right prop", () => {
        const { PositionContainer } = setup({
          right: "100%"
        });

        expect(PositionContainer).toHaveStyleRule("right", "100%");
      });
    });

    describe("top", () => {
      test("should have unset by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("top", "unset");
      });

      test("should have correct value passed via top prop", () => {
        const { PositionContainer } = setup({
          top: "spacing48"
        });

        expect(PositionContainer).toHaveStyleRule("top", "4.8rem");
      });

      test("should have 50% passed via top prop", () => {
        const { PositionContainer } = setup({
          top: "50%"
        });

        expect(PositionContainer).toHaveStyleRule("top", "50%");
      });

      test("should have 100% passed via top prop", () => {
        const { PositionContainer } = setup({
          top: "100%"
        });

        expect(PositionContainer).toHaveStyleRule("top", "100%");
      });
    });

    describe("transform", () => {
      test("should have none by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("transform", "none");
      });

      test("should have translateX(50%) passed via transform prop", () => {
        const { PositionContainer } = setup({
          transform: "translateX(50%)"
        });

        expect(PositionContainer).toHaveStyleRule(
          "transform",
          "translateX(50%)"
        );
      });

      test("should have translateY(75%) passed via transform prop", () => {
        const { PositionContainer } = setup({
          transform: "translateY(75%)"
        });

        expect(PositionContainer).toHaveStyleRule(
          "transform",
          "translateY(75%)"
        );
      });
    });

    describe("width", () => {
      test("should have auto by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("width", "auto");
      });

      test("should have correct value passed via width prop", () => {
        const { PositionContainer } = setup({
          width: "spacing48"
        });

        expect(PositionContainer).toHaveStyleRule("width", "4.8rem");
      });

      test("should have 50% passed via width prop", () => {
        const { PositionContainer } = setup({
          width: "50%"
        });

        expect(PositionContainer).toHaveStyleRule("width", "50%");
      });

      test("should have 100% passed via width prop", () => {
        const { PositionContainer } = setup({
          width: "100%"
        });

        expect(PositionContainer).toHaveStyleRule("width", "100%");
      });
    });

    describe("z-index", () => {
      test("should have 100 by default", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("z-index", "100");
      });

      test("should have correct value passed via zIndex prop", () => {
        const { PositionContainer } = setup({
          zIndex: "layer4"
        });

        expect(PositionContainer).toHaveStyleRule("z-index", "400");
      });
    });
  });
});

interface Setup extends RenderResult {
  PositionContainer: Node;
}

type PositionContainerTestProps = Partial<PositionContainerProps>;

function setup(additionalProps?: PositionContainerTestProps): Setup {
  const props: PositionContainerProps = {
    children: <div>PositionContainer</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <PositionContainer {...props}>{props.children}</PositionContainer>
  );

  const { container } = utils || {};

  return {
    ...utils,
    PositionContainer: container.children[0]
  };
}
