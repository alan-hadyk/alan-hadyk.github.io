import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyMobile from "<organisms>/Company/CompanyMobile";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

jest.mock("<hooks>/useIntersectionObserver");

describe("organisms / CompanyMobile", () => {
  test("should have correct structure", () => {
    const {
      CompanyDescription,
      CompanyLogo,
      FlexContainer,
      ResponsiveMobile
    } = setup();

    expect(ResponsiveMobile.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(CompanyLogo);
    expect(FlexContainer.children[1]).toEqual(CompanyDescription);
  });

  describe("ResponsiveMobile", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { ResponsiveMobile } = setup();
      
            expect(ResponsiveMobile).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
            });
          });
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {  
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("flexFlow", () => {  
        test("should have column nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });

      describe("gap", () => {
        test("should have margin-top: 4.8rem for all children (except first)", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("margin-top", "4.8rem", {
            modifier: "& > *"
          });

          expect(FlexContainer).toHaveStyleRule("margin-top", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("maxWidth", () => {  
        test("should have 105.6rem", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("max-width", "105.6rem");
        });
      });
    });
  });

  describe("CompanyLogo", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 4.8rem", () => {
          const { CompanyLogo } = setup();

          expect(CompanyLogo.children[0]).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("logo", () => {
        test("should have Company-Omise.svg when prop logo: companyOmise", () => {
          const { CompanyLogo } = setup({
            logo: "companyOmise"
          });

          expect(CompanyLogo.children[0].textContent).toEqual("Company-Omise.svg");
        });

        test("should have Company-SAP.svg when prop logo: companySAP", () => {
          const { CompanyLogo } = setup({
            logo: "companySAP"
          });

          expect(CompanyLogo.children[0].textContent).toEqual("Company-SAP.svg");
        });
      });
    });
  });

  describe("CompanyDescription", () => {
    describe("Props", () => {
      describe("date", () => {
        test("should render label equal to date prop - July 2016 to present", () => {
          const { CompanyDescription } = setup({
            date: "July 2016 to present"
          });

          expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("July 2016 to present");
        });

        test("should render label equal to date prop - March 2017 to August 2018", () => {
          const { CompanyDescription } = setup({
            date: "March 2017 to August 2018"
          });

          expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("March 2017 to August 2018");
        });
      });

      describe("iconsWithLabels", () => {
        test("should render correct icons - Webpack, Node", () => {
          const { CompanyDescription } = setup({
            iconsWithLabels: [
              {
                iconName: "brandWebpack",
                label: "Webpack"
              },
              {
                iconName: "node",
                label: "Node"
              }
            ]
          });
          const IconsWithLabels: Element = CompanyDescription.children[2].children[1].children[0];

          expect(IconsWithLabels.children.length).toEqual(2);
          expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-Webpack.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Webpack");
          expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Icon-Node.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Node");
        });

        test("should render correct icons - React, Apollo", () => {
          const { CompanyDescription } = setup({
            iconsWithLabels: [
              {
                iconName: "brandReact",
                label: "React"
              },
              {
                iconName: "apollo",
                label: "Apollo"
              }
            ]
          });
          const IconsWithLabels: Element = CompanyDescription.children[2].children[1].children[0];

          expect(IconsWithLabels.children.length).toEqual(2);
          expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-React.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual("React");
          expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Icon-Apollo.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Apollo");
        });
      });

      describe("responsibilities", () => {
        test("should render correct responsibilities - test 1", () => {
          const responsibilities: CompanyProps["responsibilities"] = [
            "Create scalable and sane front-end architecture", 
            "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"    
          ];
          const { CompanyDescription } = setup({
            responsibilities
          });
          const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.children.length).toEqual(2);
          responsibilities.forEach((responsibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(responsibility);
          });
        });

        test("should render correct responsibilities - test 2", () => {
          const responsibilities: CompanyProps["responsibilities"] = [
            "Apply development and certify adherence to best practices to deliver PoC based on React.js", 
            "Transform and create reusable components and manage adapters, models and serializers"    
          ];
          const { CompanyDescription } = setup({
            responsibilities
          });
          const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.children.length).toEqual(2);
          responsibilities.forEach((responsibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(responsibility);
          });
        });
      });

      describe("responsibilitiesPaddingBottom", () => {
        test("should have correct value passed by responsibilitiesPaddingBottom", () => {
          const { CompanyDescription } = setup({
            responsibilitiesPaddingBottom: "spacing52"
          });
          
          expect(CompanyDescription.children[3]).toHaveStyleRule("padding-bottom", "5.2rem");
        });
      });

      describe("textAlign", () => {
        test("should have center", () => {
          const { CompanyDescription } = setup();

          expect(CompanyDescription.children[0]).toHaveStyleRule("text-align", "center");
        });
      });

      describe("title", () => {
        test("should render correct title - test 1", () => {
          const title: CompanyProps["title"] = "Front-end developer";
          const { CompanyDescription } = setup({
            title
          });
          const Title: string = CompanyDescription.children[0].textContent;

          expect(Title).toEqual(title);
        });

        test("should render correct title - test 2", () => {
          const title: CompanyProps["title"] = "Freelancer";
          const { CompanyDescription } = setup({
            title
          });
          const Title: string = CompanyDescription.children[0].textContent;

          expect(Title).toEqual(title);
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescription: Element;
  CompanyLogo: Element;
  FlexContainer: Element;
  ResponsiveMobile: Element;
}

type CompanyTestProps = Partial<CompanyProps>;

function setup(additionalProps?: CompanyTestProps): Setup {
  const responsibilities: CompanyProps["responsibilities"] = [
    "Create scalable and sane front-end architecture", 
    "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
  ];

  const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: CompanyProps = {
    date: "August 2018 to present",
    iconsWithLabels,
    logo: "companyOmise",
    responsibilities,
    title: "Front end developer",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <CompanyMobile {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const CompanyDescription: Element = queryAllByTestId("CompanyDescription")[0];
  const CompanyLogo: Element = queryAllByTestId("CompanyLogoFlexContainer")[0];
  const FlexContainer: Element = queryAllByTestId("CompanyMobileFlexContainer")[0];
  const ResponsiveMobile: Element = queryAllByTestId("ResponsiveMobile")[0];

  return {
    ...utils,
    CompanyDescription,
    CompanyLogo,
    FlexContainer,
    ResponsiveMobile
  };
}
