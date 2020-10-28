import React from "react";
import { RenderResult } from "@testing-library/react";

import NoMatchPageTemplate from "UI/templates/NoMatchPageTemplate";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { NoMatchPageTemplateProps } from "UI/templates/__typings__/NoMatchPageTemplate";

describe("templates / NoMatchPageTemplate", () => {
  test("should render children", () => {
    const { NoMatchPageTemplateContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(NoMatchPageTemplateContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("align-items", () => {
      test("should have center", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "align-items",
          "center"
        );
      });
    });

    describe("display", () => {
      test("should have flex", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule("display", "flex");
      });
    });

    describe("flex-flow", () => {
      test("should have column nowrap", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "flex-flow",
          "column nowrap"
        );
      });
    });

    describe("justify-content", () => {
      test("should have center", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "justify-content",
          "center"
        );
      });
    });

    describe("margin", () => {
      test("should have 0 auto", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "margin",
          "0 auto"
        );
      });
    });

    describe("min-height", () => {
      test("should have 100vh", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "min-height",
          "100vh"
        );
      });
    });

    describe("padding", () => {
      test("should have 4.8rem", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "padding",
          "4.8rem"
        );
      });
    });

    describe("width", () => {
      test("should have calc(35.6rem + 9.6rem)", () => {
        const { NoMatchPageTemplateContainer } = setup();

        expect(NoMatchPageTemplateContainer).toHaveStyleRule(
          "width",
          "calc(35.6rem + 9.6rem)"
        );
      });
    });

    describe("@media (min-width: 641px) and (max-width: 1280px)", () => {
      describe("width", () => {
        test("should have 50%", () => {
          const { NoMatchPageTemplateContainer } = setup();

          expect(NoMatchPageTemplateContainer).toHaveStyleRule("width", "50%", {
            media: "(min-width: 641px) and (max-width:1280px)"
          });
        });
      });
    });

    describe("@media (max-width: 640px)", () => {
      describe("min-height", () => {
        test("should have initial", () => {
          const { NoMatchPageTemplateContainer } = setup();

          expect(NoMatchPageTemplateContainer).toHaveStyleRule(
            "min-height",
            "initial",
            {
              media: "(max-width:640px)"
            }
          );
        });
      });

      describe("padding", () => {
        test("should have 2.8rem", () => {
          const { NoMatchPageTemplateContainer } = setup();

          expect(NoMatchPageTemplateContainer).toHaveStyleRule(
            "padding",
            "2.8rem",
            {
              media: "(max-width:640px)"
            }
          );
        });
      });

      describe("width", () => {
        test("should have 2.8rem", () => {
          const { NoMatchPageTemplateContainer } = setup();

          expect(NoMatchPageTemplateContainer).toHaveStyleRule(
            "width",
            "100%",
            {
              media: "(max-width:640px)"
            }
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  NoMatchPageTemplateContainer: Element;
}

type NoMatchPageTemplateTestProps = Partial<NoMatchPageTemplateProps>;

function setup(additionalProps?: NoMatchPageTemplateTestProps): Setup {
  const props: NoMatchPageTemplateProps = {
    children: <div>PageTemplate</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <NoMatchPageTemplate {...props}>{props.children}</NoMatchPageTemplate>
  );

  const { queryByTestId } = utils || {};

  const NoMatchPageTemplateContainer: Element = queryByTestId(
    "NoMatchPageTemplate"
  );

  return {
    ...utils,
    NoMatchPageTemplateContainer
  };
}
