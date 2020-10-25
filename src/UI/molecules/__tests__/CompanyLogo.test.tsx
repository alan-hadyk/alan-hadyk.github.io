import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyLogo from "molecules/CompanyLogo";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { CompanyLogoProps } from "molecules/__typings__/CompanyLogo";

describe("molecules / CompanyLogo", () => {
  test("should have correct structure", () => {
    const { CompanyLogoFlexContainer, Icon, Logo } = setup();

    expect(CompanyLogoFlexContainer.children[0]).toEqual(Logo);
    expect(Logo.children[0]).toEqual(Icon);
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have flex-start", () => {
          const { CompanyLogoFlexContainer } = setup();

          expect(CompanyLogoFlexContainer).toHaveStyleRule(
            "align-items",
            "flex-start"
          );
        });
      });

      describe("justifyContent", () => {
        test("should have flex-end", () => {
          const { CompanyLogoFlexContainer } = setup();

          expect(CompanyLogoFlexContainer).toHaveStyleRule(
            "justify-content",
            "flex-end"
          );
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
          const { Logo } = setup();

          expect(Logo).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("isHeightResponsive", () => {
        describe("height", () => {
          test("should have 100%", () => {
            const { Logo } = setup();

            expect(Logo).toHaveStyleRule("height", "100%", {
              modifier: "svg"
            });
          });
        });

        describe("width", () => {
          test("should have auto", () => {
            const { Logo } = setup();

            expect(Logo).toHaveStyleRule("width", "auto", {
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
  Icon: SVGSVGElement;
  Logo: Element;
}

type CompanyLogoTestProps = Partial<CompanyLogoProps>;

function setup(additionalProps?: CompanyLogoTestProps): Setup {
  const props: CompanyLogoProps = {
    logo: "companyOmise",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<CompanyLogo {...props} />);

  const { queryAllByTestId }: RenderResult = utils;

  const CompanyLogoFlexContainer: Element = queryAllByTestId(
    "CompanyLogoFlexContainer"
  )[0];
  const Icon: SVGSVGElement = document.querySelector("svg");
  const Logo: Element = queryAllByTestId("Logo")[0];

  return {
    ...utils,
    CompanyLogoFlexContainer,
    Icon,
    Logo
  };
}
