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
      ResponsiveDesktop,
      ResponsiveMobile,
      ResponsiveTablet,
      ResponsiveTv,
      SectionContainer,
      Text,
      TitleSpacingContainer
    } = setup();

    expect(SectionContainer.children[0]).toEqual(ResponsiveTv);
    expect(SectionContainer.children[1]).toEqual(ResponsiveDesktop);
    expect(SectionContainer.children[2]).toEqual(ResponsiveTablet);
    expect(SectionContainer.children[3]).toEqual(ResponsiveMobile);

    expect(ResponsiveTv.children[0]).toEqual(TitleSpacingContainer[0]);
    expect(TitleSpacingContainer[0].children[0]).toEqual(Text[0]);

    expect(ResponsiveDesktop.children[0]).toEqual(TitleSpacingContainer[1]);
    expect(TitleSpacingContainer[1].children[0]).toEqual(Text[1]);

    expect(ResponsiveTablet.children[0]).toEqual(TitleSpacingContainer[2]);
    expect(TitleSpacingContainer[2].children[0]).toEqual(Text[2]);

    expect(ResponsiveMobile.children[0]).toEqual(TitleSpacingContainer[3]);
    expect(TitleSpacingContainer[3].children[0]).toEqual(Text[3]);
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

    TitleSpacingContainer.forEach((_TitleSpacingContainer) => {
      expect(_TitleSpacingContainer).toBeFalsy();
    });

    Text.forEach((_Text) => {
      expect(_Text).toBeFalsy();
    });
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
          test("should have 9.6rem for tv, desktop and tablet", () => {
            const { TitleSpacingContainer } = setup();

            expect(TitleSpacingContainer[0]).toHaveStyleRule("margin-bottom", "9.6rem");
            expect(TitleSpacingContainer[1]).toHaveStyleRule("margin-bottom", "9.6rem");
            expect(TitleSpacingContainer[2]).toHaveStyleRule("margin-bottom", "9.6rem");
          });

          test("should have 4.8rem for tv, desktop and tablet", () => {
            const { TitleSpacingContainer } = setup();

            expect(TitleSpacingContainer[3]).toHaveStyleRule("margin-bottom", "4.8rem");
          });
        });

        describe("paddingTop", () => {      
          test("should have 10.8rem", () => {
            const { TitleSpacingContainer } = setup();

            
            TitleSpacingContainer.forEach((_TitleSpacingContainer: Element) => {
              expect(_TitleSpacingContainer).toHaveStyleRule("padding-top", "10.8rem");
            });
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

          Text.forEach((_Text: Element) => {
            expect(_Text).toHaveStyleRule("color", "#bcd8db");
          });
        });
      });

      describe("fontFamily", () => {      
        test("should have ExanModifiedRegular,monospace", () => {
          const { Text } = setup();

          Text.forEach((_Text: Element) => {
            expect(_Text).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
          });
        });
      });

      describe("fontSize", () => {      
        test("should have 72px for tv, desktop and tablet", () => {
          const { Text } = setup();

          expect(Text[0]).toHaveStyleRule("font-size", "72px");
          expect(Text[1]).toHaveStyleRule("font-size", "72px");
          expect(Text[2]).toHaveStyleRule("font-size", "72px");
        });

        test("should have 48px for mobile", () => {
          const { Text } = setup();

          expect(Text[3]).toHaveStyleRule("font-size", "48px");
        });
      });

      describe("lineHeight", () => {      
        test("should have 8rem", () => {
          const { Text } = setup();

          Text.forEach((_Text: Element) => {
            expect(_Text).toHaveStyleRule("line-height", "8rem");
          });
        });
      });

      describe("textAlign", () => {      
        test("should have center", () => {
          const { Text } = setup();

          Text.forEach((_Text: Element) => {
            expect(_Text).toHaveStyleRule("text-align", "center");
          });
        });
      });

      describe("textTransform", () => {      
        test("should have lowercase", () => {
          const { Text } = setup();

          Text.forEach((_Text: Element) => {
            expect(_Text).toHaveStyleRule("text-transform", "lowercase");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
  ResponsiveTv: Element;
  SectionContainer: Element;
  Text: Element[];
  TitleSpacingContainer: Element[];
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

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveMobile: Element = queryByTestId("ResponsiveMobile");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");
  const ResponsiveTv: Element = queryByTestId("ResponsiveTv");
  const SectionContainer: Element = queryByTestId("Section");
  const TitleSpacingContainer: Element[] = queryAllByTestId("TitleSpacingContainer");
  const Text: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTablet,
    ResponsiveTv,
    SectionContainer,
    Text,
    TitleSpacingContainer
  };
}