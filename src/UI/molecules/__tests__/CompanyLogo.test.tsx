import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyLogo from "<molecules>/CompanyLogo";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { CompanyLogoProps } from "<molecules>/__typings__/CompanyLogo.d.ts";

describe("molecules / CompanyLogo", () => {
  test("should have correct structure", () => {
    const { 
      CompanyLogoFlexContainer,
      Icon,
      IconContainer
    } = setup();

    expect(CompanyLogoFlexContainer.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(Icon);
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => { 
        test("should have flex-start", () => {
          const { CompanyLogoFlexContainer } = setup();
  
          expect(CompanyLogoFlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("justifyContent", () => { 
        test("should have flex-end", () => {
          const { CompanyLogoFlexContainer } = setup();
  
          expect(CompanyLogoFlexContainer).toHaveStyleRule("justify-content", "flex-end");
        });
      });
    });
  });

  describe("Icon", () => {
    test("should render correct SVG passed via logo prop", () => {
      const { Icon } = setup({
        logo: "companySAP"
      });

      expect(Icon.textContent).toEqual("Company-SAP.svg");
    });

    describe("Props", () => {
      describe("height", () => { 
        test("should have 4.8rem", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("isHeightResponsive", () => {
        describe("height", () => {
          test("should have 100%", () => {
            const { IconContainer } = setup();
      
            expect(IconContainer).toHaveStyleRule("height", "100%", {
              modifier: "svg"
            });
          });
        });

        describe("width", () => {
          test("should have auto", () => {
            const { IconContainer } = setup();
      
            expect(IconContainer).toHaveStyleRule("width", "auto", {
              modifier: "svg"
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyLogoFlexContainer: Element;
  Icon: Element;
  IconContainer: Element;
}

type CompanyLogoTestProps = Partial<CompanyLogoProps>;

function setup(additionalProps?: CompanyLogoTestProps): Setup {
  const props: CompanyLogoProps = {
    logo: "companyOmise",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <CompanyLogo {...props} />
  );

  const { queryAllByTestId }: RenderResult = utils;

  const CompanyLogoFlexContainer: Element  = queryAllByTestId("CompanyLogoFlexContainer")[0];
  const Icon: SVGSVGElement = document.querySelector("svg");
  const IconContainer: Element = queryAllByTestId("IconContainer")[0];

  return {
    ...utils,
    CompanyLogoFlexContainer,
    Icon,
    IconContainer
  };
}
