import { RenderResult } from "@testing-library/react";

import PageTemplate from "UI/templates/PageTemplate";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { PageTemplateProps } from "UI/templates/__typings__/PageTemplate";

describe("templates / PageTemplate", () => {
  test("should render children", () => {
    const { PageTemplateContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(PageTemplateContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("padding", () => {
      test("should have '0 4.8rem 9.6rem'", () => {
        const { PageTemplateContainer } = setup();

        expect(PageTemplateContainer).toHaveStyleRule(
          "padding",
          "0 4.8rem 9.6rem"
        );
      });
    });

    describe("max-width", () => {
      test("should have '1920px'", () => {
        const { PageTemplateContainer } = setup();

        expect(PageTemplateContainer).toHaveStyleRule("max-width", "1920px");
      });
    });

    describe("margin", () => {
      test("should have '0 auto'", () => {
        const { PageTemplateContainer } = setup();

        expect(PageTemplateContainer).toHaveStyleRule("margin", "0 auto");
      });
    });

    describe("@media (max-width: 640px)", () => {
      describe("padding", () => {
        test("should have '0 2.8rem 9.6rem'", () => {
          const { PageTemplateContainer } = setup();

          expect(PageTemplateContainer).toHaveStyleRule(
            "padding",
            "0 2.8rem 9.6rem",
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
  PageTemplateContainer: Element;
}

type PageTemplateTestProps = Partial<PageTemplateProps>;

function setup(additionalProps?: PageTemplateTestProps): Setup {
  const props: PageTemplateProps = {
    children: <div>PageTemplate</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <PageTemplate {...props}>{props.children}</PageTemplate>
  );

  const { queryByTestId } = utils || {};

  const PageTemplateContainer: Element = queryByTestId("PageTemplate");

  return {
    ...utils,
    PageTemplateContainer
  };
}
