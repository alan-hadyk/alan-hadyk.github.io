import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import Section from "<molecules>/Section";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  SectionProps
} from "<molecules>/__typings__/Section";

describe("molecules / Section", () => {
  test("should have correct structure", () => {
    const { 
      container,
      queryByTestId,
      SpacingContainers,
      Text
    } = setup();

    expect(container.children[0]).toEqual(SpacingContainers[0]);
    expect(SpacingContainers[0].children[0]).toEqual(SpacingContainers[1]);
    expect(SpacingContainers[1].children[0]).toEqual(Text);
    expect(SpacingContainers[0].children[1]).toEqual(queryByTestId("children"));
  });

  test("should render children", () => {
    const { 
      queryByTestId
    } = setup({
      children: <div data-testid="customChildren">Custom children</div>
    });

    expect(queryByTestId("customChildren")).toBeTruthy();
  });

  test("should not render SpacingContainers[1] and Text if there is no title", () => {
    const { 
      SpacingContainers,
      Text
    } = setup({
      title: undefined
    });

    expect(SpacingContainers[1]).toBeFalsy();
    expect(Text).toBeFalsy();
  });

  describe("SpacingContainers", () => { 
    describe("SpacingContainers[0]", () => { 
      describe("Styles", () => {
        describe("min-height", () => {      
          test("should not have min-height by default", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[0]).not.toHaveStyleRule("min-height");
          });

          test("should have min-height equal to minHeight prop - spacing value", () => {
            const { SpacingContainers } = setup({
              minHeight: "spacing36"
            });

            expect(SpacingContainers[0]).toHaveStyleRule("min-height", "3.6rem");
          });

          test("should have min-height equal to minHeight prop - vh", () => {
            const { SpacingContainers } = setup({
              minHeight: "100vh"
            });

            expect(SpacingContainers[0]).toHaveStyleRule("min-height", "100vh");
          });
        });

        describe("padding-bottom", () => {      
          test("should have 0 if there is no title", () => {
            const { SpacingContainers } = setup({
              title: undefined
            });

            expect(SpacingContainers[0]).toHaveStyleRule("padding-bottom", "0");
          });

          test("should have 9.6rem if there is title", () => {
            const { SpacingContainers } = setup({
              title: "Custom title"
            });

            expect(SpacingContainers[0]).toHaveStyleRule("padding-bottom", "9.6rem");
          });
        });
      });

      describe("Props", () => {
        describe("id", () => {      
          test("should have id equal to id prop", () => {
            const { SpacingContainers } = setup({
              id: "SectionID"
            });

            expect(SpacingContainers[0].getAttribute("id")).toEqual("SectionID");
          });
        });
      });
    });

    describe("SpacingContainers[1]", () => { 
      describe("Styles", () => {
        describe("margin-bottom", () => {      
          test("should have 9.6rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("margin-bottom", "9.6rem");
          });
        });

        describe("padding-top", () => {      
          test("should have 12.0rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("padding-top", "12.0rem");
          });
        });
      });
    });
  });

  describe("Text", () => { 
    describe("Styles", () => {
      describe("color", () => {      
        test("should have #bcd8db", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("font-family", () => {      
        test("should have ExanModifiedRegular,monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
        });
      });

      describe("font-size", () => {      
        test("should have 72px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "72px");
        });
      });

      describe("line-height", () => {      
        test("should have 8rem", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("line-height", "8rem");
        });
      });

      describe("text-align", () => {      
        test("should have center", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("text-align", "center");
        });
      });

      describe("text-transform", () => {      
        test("should have lowercase", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("text-transform", "lowercase");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  SpacingContainers: Element[];
  Text: Element;
}

type SectionTestProps = Partial<SectionProps>;


function setup(additionalProps?: SectionTestProps): Setup {
  const props: SectionProps = {
    children: <div data-testid="children">Children</div>,
    id: "ID",
    title: "Title",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Section {...props} />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;
  const SpacingContainers: Element[] = queryAllByTestId("SpacingContainer");
  const Text: Element = queryByTestId("Text");

  return {
    ...utils,
    SpacingContainers,
    Text
  };
}
