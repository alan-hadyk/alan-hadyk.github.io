import React from "react";
import { RenderResult } from "@testing-library/react";

import ColumnsContainer from "UI/layout/ColumnsContainer";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ColumnsContainerProps } from "UI/layout/__typings__/ColumnsContainer";

describe("layout / ColumnsContainer", () => {
  test("should render children", () => {
    const { ColumnsContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(ColumnsContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("column-count", () => {
      test("should have 1 by default", () => {
        const { ColumnsContainer } = setup();

        expect(ColumnsContainer).toHaveStyleRule("column-count", "1");
      });

      test("should have value equal to columnCount prop", () => {
        const { ColumnsContainer } = setup({
          columnCount: 6
        });

        expect(ColumnsContainer).toHaveStyleRule("column-count", "6");
      });
    });

    describe("column-gap", () => {
      test("should have 0 by default", () => {
        const { ColumnsContainer } = setup();

        expect(ColumnsContainer).toHaveStyleRule("column-gap", "0");
      });

      test("should have value equal to columnGap prop", () => {
        const { ColumnsContainer } = setup({
          columnGap: "spacing32"
        });

        expect(ColumnsContainer).toHaveStyleRule("column-gap", "3.2rem");
      });
    });

    describe("& > *", () => {
      describe("break-inside", () => {
        test("should have avoid-column", () => {
          const { ColumnsContainer } = setup();

          expect(ColumnsContainer).toHaveStyleRule(
            "break-inside",
            "avoid-column",
            {
              modifier: "& > *"
            }
          );
        });
      });

      describe("page-break-inside", () => {
        test("should have avoid", () => {
          const { ColumnsContainer } = setup();

          expect(ColumnsContainer).toHaveStyleRule(
            "page-break-inside",
            "avoid",
            {
              modifier: "& > *"
            }
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ColumnsContainer: Node;
}

type ColumnsContainerTestProps = Partial<ColumnsContainerProps>;

function setup(additionalProps?: ColumnsContainerTestProps): Setup {
  const props: ColumnsContainerProps = {
    children: <div>ColumnsContainer</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ColumnsContainer {...props}>{props.children}</ColumnsContainer>
  );

  const { container } = utils || {};

  return {
    ...utils,
    ColumnsContainer: container.children[0]
  };
}
