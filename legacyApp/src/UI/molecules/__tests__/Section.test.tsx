import { RenderResult } from "@testing-library/react";

import Section from "UI/molecules/Section";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { SectionProps } from "UI/molecules/__typings__/Section";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("molecules / Section", () => {
  test("should have correct structure", () => {
    const {
      ResponsiveTitleMobile,
      ResponsiveTitleTvDesktopTablet,
      SectionContainer,
      Texts,
      TitleSpacingContainers
    } = setup();

    expect(SectionContainer.children[0]).toEqual(
      ResponsiveTitleTvDesktopTablet
    );
    expect(SectionContainer.children[1]).toEqual(ResponsiveTitleMobile);

    expect(ResponsiveTitleTvDesktopTablet.children[0]).toEqual(
      TitleSpacingContainers[0]
    );
    expect(TitleSpacingContainers[0].children[0]).toEqual(Texts[0]);

    expect(ResponsiveTitleMobile.children[0]).toEqual(
      TitleSpacingContainers[1]
    );
    expect(TitleSpacingContainers[1].children[0]).toEqual(Texts[1]);
  });

  test("should render children", () => {
    const { queryByTestId } = setup({
      children: <div data-testid="customChildren">Custom children</div>
    });

    expect(queryByTestId("customChildren")).toBeTruthy();
  });

  test("should not render TitleSpacingContainer and Text if there is no title", () => {
    const { Texts, TitleSpacingContainers } = setup({
      title: undefined
    });

    TitleSpacingContainers.forEach((TitleSpacingContainer: Element) => {
      expect(TitleSpacingContainer).toBeFalsy();
    });

    Texts.forEach((Text: Element) => {
      expect(Text).toBeFalsy();
    });
  });

  describe("SpacingContainers", () => {
    describe("SectionContainer", () => {
      describe("Props", () => {
        describe("id", () => {
          test("should have correct value passed via id prop", () => {
            const { SectionContainer } = setup({
              id: "SectionID"
            });

            expect(SectionContainer.getAttribute("id")).toEqual("SectionID");
          });
        });

        describe("marginBottom", () => {
          test("should have 0 by default", () => {
            const { SectionContainer } = setup();

            expect(SectionContainer).toHaveStyleRule("margin-bottom", "0");
          });

          test("should have correct value passed via marginBottom prop", () => {
            const { SectionContainer } = setup({
              marginBottom: "spacing24"
            });

            expect(SectionContainer).toHaveStyleRule("margin-bottom", "2.4rem");
          });
        });

        describe("minHeight", () => {
          test("should not have min-height by default", () => {
            const { SectionContainer } = setup();

            expect(SectionContainer).not.toHaveStyleRule("min-height");
          });

          test("should have correct value passed via minHeight prop", () => {
            const { SectionContainer } = setup({
              minHeight: "spacing36"
            });

            expect(SectionContainer).toHaveStyleRule("min-height", "3.6rem");
          });

          test("should have 100vh passed via minHeight prop", () => {
            const { SectionContainer } = setup({
              minHeight: "100vh"
            });

            expect(SectionContainer).toHaveStyleRule("min-height", "100vh");
          });
        });

        describe("paddingTop", () => {
          test("should have 0 if there is no title", () => {
            const { SectionContainer } = setup({
              title: undefined
            });

            expect(SectionContainer).toHaveStyleRule("padding-top", "0");
          });

          test("should have 9.6rem if there is title", () => {
            const { SectionContainer } = setup({
              title: "Custom title"
            });

            expect(SectionContainer).toHaveStyleRule("padding-top", "9.6rem");
          });
        });
      });
    });

    describe("TitleSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 9.6rem for tv, desktop and tablet", () => {
            const { TitleSpacingContainers } = setup();

            expect(TitleSpacingContainers[0]).toHaveStyleRule(
              "margin-bottom",
              "9.6rem"
            );
          });

          test("should have 4.8rem for mobile", () => {
            const { TitleSpacingContainers } = setup();

            expect(TitleSpacingContainers[1]).toHaveStyleRule(
              "margin-bottom",
              "4.8rem"
            );
          });
        });
      });
    });
  });

  describe("Texts", () => {
    describe("Props", () => {
      describe("color", () => {
        test("should have #bcd8db", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("color", "#bcd8db");
          });
        });
      });

      describe("fontFamily", () => {
        test("should have ExanModifiedRegular,monospace if isIE11 returns false", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule(
              "font-family",
              "ExanModifiedRegular,monospace"
            );
          });
        });

        test("should have AnonymousPro,monospace if isIE11 returns true", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule(
              "font-family",
              "'Anonymous Pro',monospace"
            );
          });
        });
      });

      describe("fontSize", () => {
        test("should have 72px for tv, desktop and tablet", () => {
          const { Texts } = setup();

          expect(Texts[0]).toHaveStyleRule("font-size", "72px");
        });

        test("should have 48px for mobile", () => {
          const { Texts } = setup();

          expect(Texts[1]).toHaveStyleRule("font-size", "48px");
        });
      });

      describe("lineHeight", () => {
        test("should have 8rem", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("line-height", "8rem");
          });
        });
      });

      describe("textAlign", () => {
        test("should have center", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("text-align", "center");
          });
        });
      });

      describe("textTransform", () => {
        test("should have lowercase if isIE11 returns false", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("text-transform", "lowercase");
          });
        });

        test("should have uppercase if isIE11 returns true", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ResponsiveTitleMobile: Element;
  ResponsiveTitleTvDesktopTablet: Element;
  SectionContainer: Element;
  Texts: Element[];
  TitleSpacingContainers: Element[];
}

type SectionTestProps = Partial<SectionProps>;

function setup(additionalProps?: SectionTestProps): Setup {
  const props: SectionProps = {
    children: <div data-testid="children">Children</div>,
    id: "ID",
    title: "Title",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Section {...props} />);

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const ResponsiveTitleMobile: Element = queryByTestId("ResponsiveTitleMobile");
  const ResponsiveTitleTvDesktopTablet: Element = queryByTestId(
    "ResponsiveTitleTvDesktopTablet"
  );
  const SectionContainer: Element = queryByTestId("Section");
  const TitleSpacingContainers: Element[] = queryAllByTestId(
    "TitleSpacingContainer"
  );
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    ResponsiveTitleMobile,
    ResponsiveTitleTvDesktopTablet,
    SectionContainer,
    Texts,
    TitleSpacingContainers
  };
}
