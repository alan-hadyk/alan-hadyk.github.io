import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyMobile from "UI/organisms/Company/CompanyMobile";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("hooks/useIntersectionObserver");

describe("organisms / CompanyMobile", () => {
  test("should have correct structure", () => {
    const {
      CompanyDescription,
      CompanyMobileName,
      FlexContainer,
      CompanyMobileContainer
    } = setup();

    expect(CompanyMobileContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(CompanyMobileName);
    expect(FlexContainer.children[1]).toEqual(CompanyDescription);
  });

  describe("CompanyMobileContainer", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { CompanyMobileContainer } = setup();

            expect(CompanyMobileContainer).toHaveStyleRule("display", "block", {
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

  describe("CompanyMobileName", () => {
    describe("Props", () => {
      describe("name", () => {
        test("should have Omise when prop name: Omise", () => {
          const { CompanyMobileName } = setup({
            name: "Omise"
          });

          expect(CompanyMobileName.textContent).toEqual("Omise");
        });

        test("should have SAP when prop name: SAP", () => {
          const { CompanyMobileName } = setup({
            name: "SAP"
          });

          expect(CompanyMobileName.textContent).toEqual("SAP");
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

          expect(
            CompanyDescription.children[1].children[0].children[1].textContent
          ).toEqual("July 2016 to present");
        });

        test("should render label equal to date prop - March 2017 to August 2018", () => {
          const { CompanyDescription } = setup({
            date: "March 2017 to August 2018"
          });

          expect(
            CompanyDescription.children[1].children[0].children[1].textContent
          ).toEqual("March 2017 to August 2018");
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
          const IconsWithLabels: Element =
            CompanyDescription.children[2].children[1].children[0];

          expect(IconsWithLabels.children.length).toEqual(2);
          expect(
            IconsWithLabels.children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandWebpack.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
            "Webpack"
          );
          expect(
            IconsWithLabels.children[1].children[0].children[0].textContent
          ).toEqual("Icon-Node.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "Node"
          );
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
          const IconsWithLabels: Element =
            CompanyDescription.children[2].children[1].children[0];

          expect(IconsWithLabels.children.length).toEqual(2);
          expect(
            IconsWithLabels.children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandReact.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
            "React"
          );
          expect(
            IconsWithLabels.children[1].children[0].children[0].textContent
          ).toEqual("Icon-Apollo.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "Apollo"
          );
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
          const UnorderedList: Element =
            CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.children.length).toEqual(2);
          responsibilities.forEach((responsibility, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(
              responsibility
            );
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
          const UnorderedList: Element =
            CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.children.length).toEqual(2);
          responsibilities.forEach((responsibility, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(
              responsibility
            );
          });
        });
      });

      describe("responsibilitiesPaddingBottom", () => {
        test("should have correct value passed by responsibilitiesPaddingBottom", () => {
          const { CompanyDescription } = setup({
            responsibilitiesPaddingBottom: "spacing52"
          });

          expect(CompanyDescription.children[3]).toHaveStyleRule(
            "padding-bottom",
            "5.2rem"
          );
        });
      });

      describe("textAlign", () => {
        test("should have center", () => {
          const { CompanyDescription } = setup();

          expect(CompanyDescription.children[0]).toHaveStyleRule(
            "text-align",
            "center"
          );
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
  CompanyMobileContainer: Element;
  CompanyMobileName: Element;
  FlexContainer: Element;
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
    name: "Omise",
    responsibilities,
    title: "Front end developer",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<CompanyMobile {...props} />);

  const { queryAllByTestId } = utils || {};

  const CompanyDescription: Element = queryAllByTestId("CompanyDescription")[0];
  const CompanyMobileName: Element = queryAllByTestId("CompanyMobileName")[0];
  const FlexContainer: Element = queryAllByTestId(
    "CompanyMobileFlexContainer"
  )[0];
  const CompanyMobileContainer: Element = queryAllByTestId("CompanyMobile")[0];

  return {
    ...utils,
    CompanyDescription,
    CompanyMobileContainer,
    CompanyMobileName,
    FlexContainer
  };
}
