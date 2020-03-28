import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import Section from "<molecules>/Section";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  SectionProps
} from "<molecules>/__typings__/Section.d.ts";

describe("molecules / Section", () => {
  test("should have correct structure", () => {
    const { 
      container,
      queryByTestId,
      SectionContainer,
      TitleSpacingContainer,
      Text
    } = setup();

    expect(container.children[0]).toEqual(SectionContainer);
    expect(SectionContainer.children[0]).toEqual(TitleSpacingContainer);
    expect(TitleSpacingContainer.children[0]).toEqual(Text);
    expect(SectionContainer.children[1]).toEqual(queryByTestId("children"));
  });

  test("should render children", () => {
    const { 
      queryByTestId
    } = setup({
      children: <div data-testid="customChildren">Custom children</div>
    });

    expect(queryByTestId("customChildren")).toBeTruthy();
  });

  test("should not render TitleSpacingContainer and Text if there is no title", () => {
    const { 
      Text,
      TitleSpacingContainer
    } = setup({
      title: undefined
    });

    expect(TitleSpacingContainer).toBeFalsy();
    expect(Text).toBeFalsy();
  });

  describe("SpacingContainers", () => { 
    describe("SectionContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 1.6rem", () => {
            const { SectionContainer } = setup();

            expect(SectionContainer).toHaveStyleRule("margin-bottom", "1.6rem");
          });
        });

        describe("minHeight", () => {      
          test("should not have min-height by default", () => {
            const { SectionContainer } = setup();

            expect(SectionContainer).not.toHaveStyleRule("min-height");
          });

          test("should have min-height equal to minHeight prop - spacing value", () => {
            const { SectionContainer } = setup({
              minHeight: "spacing36"
            });

            expect(SectionContainer).toHaveStyleRule("min-height", "3.6rem");
          });

          test("should have min-height equal to minHeight prop - vh", () => {
            const { SectionContainer } = setup({
              minHeight: "100vh"
            });

            expect(SectionContainer).toHaveStyleRule("min-height", "100vh");
          });
        });

        describe("paddingBottom", () => {      
          test("should have 0 if there is no title", () => {
            const { SectionContainer } = setup({
              title: undefined
            });

            expect(SectionContainer).toHaveStyleRule("padding-bottom", "0");
          });

          test("should have 9.6rem if there is title", () => {
            const { SectionContainer } = setup({
              title: "Custom title"
            });

            expect(SectionContainer).toHaveStyleRule("padding-bottom", "9.6rem");
          });
        });
      });

      describe("Props", () => {
        describe("id", () => {      
          test("should have id equal to id prop", () => {
            const { SectionContainer } = setup({
              id: "SectionID"
            });

            expect(SectionContainer.getAttribute("id")).toEqual("SectionID");
          });
        });
      });
    });

    describe("TitleSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 9.6rem", () => {
            const { TitleSpacingContainer } = setup();

            expect(TitleSpacingContainer).toHaveStyleRule("margin-bottom", "9.6rem");
          });
        });

        describe("paddingTop", () => {      
          test("should have 10.8rem", () => {
            const { TitleSpacingContainer } = setup();

            expect(TitleSpacingContainer).toHaveStyleRule("padding-top", "10.8rem");
          });
        });
      });
    });
  });

  describe("Text", () => { 
    describe("Props", () => {
      describe("color", () => {      
        test("should have #bcd8db", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("fontFamily", () => {      
        test("should have ExanModifiedRegular,monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
        });
      });

      describe("fontSize", () => {      
        test("should have 72px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "72px");
        });
      });

      describe("lineHeight", () => {      
        test("should have 8rem", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("line-height", "8rem");
        });
      });

      describe("textAlign", () => {      
        test("should have center", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("text-align", "center");
        });
      });

      describe("textTransform", () => {      
        test("should have lowercase", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("text-transform", "lowercase");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  SectionContainer: Element;
  Text: Element;
  TitleSpacingContainer: Element;
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

  const { queryByTestId }: RenderResult = utils;
  const SectionContainer: Element = queryByTestId("Section");
  const TitleSpacingContainer: Element = queryByTestId("TitleSpacingContainer");
  const Text: Element = queryByTestId("Text");

  return {
    ...utils,
    SectionContainer,
    Text,
    TitleSpacingContainer
  };
}
