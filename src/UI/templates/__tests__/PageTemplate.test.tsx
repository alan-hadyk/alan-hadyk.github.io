import React from "react";
import { RenderResult } from "@testing-library/react";

import PageTemplate from "UI/templates/PageTemplate";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { PageTemplateProps } from "UI/templates/__typings__/PageTemplate";

describe("templates / PageTemplate", () => {
  test("should render children", () => {
    const { PageTemplate } = setup({
      children: <div>Custom children</div>
    });

    expect(PageTemplate.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("padding", () => {
      test("should have '0 4.8rem 9.6rem'", () => {
        const { PageTemplate } = setup();

        expect(PageTemplate).toHaveStyleRule("padding", "0 4.8rem 9.6rem");
      });
    });

    describe("max-width", () => {
      test("should have '1920px'", () => {
        const { PageTemplate } = setup();

        expect(PageTemplate).toHaveStyleRule("max-width", "1920px");
      });
    });

    describe("margin", () => {
      test("should have '0 auto'", () => {
        const { PageTemplate } = setup();

        expect(PageTemplate).toHaveStyleRule("margin", "0 auto");
      });
    });

    describe("@media (max-width: 640px)", () => {
      describe("padding", () => {
        test("should have '0 2.8rem 9.6rem'", () => {
          const { PageTemplate } = setup();

          expect(PageTemplate).toHaveStyleRule("padding", "0 2.8rem 9.6rem", {
            media: "(max-width:640px)"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  PageTemplate: Node;
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

  const { container } = utils || {};

  return {
    ...utils,
    PageTemplate: container.children[0]
  };
}
