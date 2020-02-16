import React from "react";
import { RenderResult } from "@testing-library/react";

import PageTemplate, { PageTemplateProps } from "<templates>/PageTemplate";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("templates / PageTemplate", () => {
  test("should render children", () => {
    const { PageTemplate } = setup({
      children: <div>Custom children</div>
    });

    expect(PageTemplate.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("padding", () => {      
      test("should have '9.6rem 4.8rem' by default", () => {
        const { PageTemplate } = setup();
  
        expect(PageTemplate).toHaveStyleRule("padding", "9.6rem 4.8rem");
      });
    });

    describe("max-width", () => {      
      test("should have '1920px' by default", () => {
        const { PageTemplate } = setup();
  
        expect(PageTemplate).toHaveStyleRule("max-width", "1920px");
      });
    }); 

    describe("margin", () => {      
      test("should have '0 auto' by default", () => {
        const { PageTemplate } = setup();
  
        expect(PageTemplate).toHaveStyleRule("margin", "0 auto");
      });
    });
  });
});

interface Setup extends RenderResult {
  PageTemplate: Node;
}

type PageTemplateTestProps = Partial<PageTemplateProps>;

function setup(addedProps?: PageTemplateTestProps): Setup {
  const props: PageTemplateProps = {
    children: <div>PageTemplate</div>,
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <PageTemplate {...props}>
      {props.children}
    </PageTemplate>
  );

  const { container } = utils || {};

  return {
    ...utils,
    PageTemplate: container.children[0]
  };
}
