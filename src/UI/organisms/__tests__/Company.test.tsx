import React from "react";
import { RenderResult } from "@testing-library/react";

import Company from "<organisms>/Company";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  CompanyProps
} from "<organisms>/__typings__/Company.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organisms / Company", () => {
  test("should have correct structure", () => {
    const {
      CompanyContainer,
      CompanyDescription,
      CompanyInnerFlexContainer,
      CompanyPositionContainer,
      FlexItem,
      Logo,
      LogoFlexContainer,
      Timeline,
      TimelinePositionContainer
    } = setup();

    expect(CompanyContainer.children[0]).toEqual(CompanyPositionContainer);

    expect(CompanyPositionContainer.children[0]).toEqual(TimelinePositionContainer);
    expect(CompanyPositionContainer.children[1]).toEqual(CompanyInnerFlexContainer);

    expect(TimelinePositionContainer.children[0]).toEqual(Timeline);

    expect(CompanyInnerFlexContainer.children[0]).toEqual(FlexItem[0]);
    expect(CompanyInnerFlexContainer.children[1]).toEqual(FlexItem[1]);

    expect(FlexItem[0].children[0]).toEqual(LogoFlexContainer);
    expect(LogoFlexContainer.children[0]).toEqual(Logo);

    expect(FlexItem[1].children[0]).toEqual(CompanyDescription);
  });

  describe("CompanyPositionContainer", () => {
    describe("Props", () => {
      let CompanyPositionContainer: Element;

      beforeEach(() => {
        CompanyPositionContainer = setup().CompanyPositionContainer;
      });

      describe("position", () => {
        test("should have relative", () => {
          expect(CompanyPositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });
  
  describe("TimelinePositionContainer", () => {
    describe("Props", () => {
      let TimelinePositionContainer: Element;

      beforeEach(() => {
        TimelinePositionContainer = setup().TimelinePositionContainer;
      });

      describe("bottom", () => {
        test("should have -1.6rem", () => {
          expect(TimelinePositionContainer).toHaveStyleRule("bottom", "-1.6rem");
        });
      });

      describe("left", () => {
        test("should have 50%", () => {
          expect(TimelinePositionContainer).toHaveStyleRule("left", "50%");
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          expect(TimelinePositionContainer).toHaveStyleRule("position", "absolute");
        });
      });

      describe("top", () => {
        test("should have 1.6rem", () => {
          expect(TimelinePositionContainer).toHaveStyleRule("top", "1.6rem");
        });
      });

      describe("transform", () => {
        test("should have translateX(-50%)", () => {
          expect(TimelinePositionContainer).toHaveStyleRule("transform", "translateX(-50%)");
        });
      });

    });
  });
  
  describe("Timeline", () => {
    test("should render", () => {
      const { Timeline } = setup();

      expect(Timeline).toHaveStyleRule("height", "100%");
      expect(Timeline).toHaveStyleRule("position", "relative");
      expect(Timeline).toHaveStyleRule("width", "1.6rem");
      expect(Timeline.children[1]).toHaveStyleRule("background-color", "#78b0b5");
      expect(Timeline.children[1]).toHaveStyleRule("bottom", "0");
      expect(Timeline.children[1]).toHaveStyleRule("left", "50%");
      expect(Timeline.children[1]).toHaveStyleRule("position", "absolute");
      expect(Timeline.children[1]).toHaveStyleRule("top", "0");
      expect(Timeline.children[1]).toHaveStyleRule("transform", "translateX(-50%)");
      expect(Timeline.children[1]).toHaveStyleRule("width", ".2rem");
    });
  });

  describe("CompanyInnerFlexContainer", () => {
    describe("Props", () => {
      let CompanyInnerFlexContainer: Element;

      beforeEach(() => {
        CompanyInnerFlexContainer = setup().CompanyInnerFlexContainer;
      });

      describe("alignItems", () => {
        test("should have flex-start", () => {
          expect(CompanyInnerFlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          expect(CompanyInnerFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        test("should apply margin-left equal to 8.8rem to all children except the first one", () => {
          expect(CompanyInnerFlexContainer).toHaveStyleRule("margin-left", "8.8rem", {
            modifier: "& > *"
          });
          expect(CompanyInnerFlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("maxWidth", () => {
        test("should have 105.6rem", () => {
          expect(CompanyInnerFlexContainer).toHaveStyleRule("max-width", "105.6rem");
        });
      });
    });
  });

  describe("FlexItem", () => {
    let FlexItem: Element[];

    beforeEach(() => {
      FlexItem = setup().FlexItem;
    });

    describe("FlexItem[0]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 0 50%", () => {
            expect(FlexItem[0]).toHaveStyleRule("flex", "0 0 50%");
          });
        });
      });
    });

    describe("FlexItem[1]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 0 50%", () => {
            expect(FlexItem[1]).toHaveStyleRule("flex", "0 0 50%");
          });
        });
      });
    });
  });

  describe("LogoFlexContainer", () => {
    describe("Props", () => {
      let LogoFlexContainer: Element;

      beforeEach(() => {
        LogoFlexContainer = setup().LogoFlexContainer;
      });

      describe("alignItems", () => {
        test("should have flex-start", () => {
          expect(LogoFlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("justifyContent", () => {
        test("should have flex-end", () => {
          expect(LogoFlexContainer).toHaveStyleRule("justify-content", "flex-end");
        });
      });
    });
  });

  describe("Logo", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 4.8rem", () => {
          const { Logo } = setup();

          expect(Logo).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("iconName", () => {
        test("should have Icon-Apollo.svg when prop logo: apollo", () => {
          const { Logo } = setup({
            logo: "apollo"
          });

          expect(Logo.textContent).toEqual("Icon-Apollo.svg");
        });

        test("should have Company-Omise.svg when prop logo: companyOmise", () => {
          const { Logo } = setup({
            logo: "companyOmise"
          });

          expect(Logo.textContent).toEqual("Company-Omise.svg");
        });

        test("should have Brand-JS.svg when prop logo: brandJS", () => {
          const { Logo } = setup({
            logo: "brandJS"
          });

          expect(Logo.textContent).toEqual("Brand-JS.svg");
        });
      });

      describe("isHeightResponsive", () => {
        describe("svg", () => {
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

      describe("responsibilites", () => {
        test("should render correct responsibilites - test 1", () => {
          const responsibilites: CompanyProps["responsibilites"] = [
            "Create scalable and sane front-end architecture", 
            "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"    
          ];
          const { CompanyDescription } = setup({
            responsibilites
          });
          const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.children.length).toEqual(2);
          responsibilites.forEach((responsibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(responsibility);
          });
        });

        test("should render correct responsibilites - test 2", () => {
          const responsibilites: CompanyProps["responsibilites"] = [
            "Apply development and certify adherence to best practices to deliver PoC based on React.js", 
            "Transform and create reusable components and manage adapters, models and serializers"    
          ];
          const { CompanyDescription } = setup({
            responsibilites
          });
          const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.children.length).toEqual(2);
          responsibilites.forEach((responsibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(responsibility);
          });
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
  CompanyContainer: Element;
  CompanyDescription: Element;
  CompanyInnerFlexContainer: Element;
  CompanyPositionContainer: Element;
  FlexItem: Element[];
  Logo: Element;
  LogoFlexContainer: Element;
  Timeline: Element;
  TimelinePositionContainer: Element;
}

type CompanyTestProps = Partial<CompanyProps>;

function setup(additionalProps?: CompanyTestProps): Setup {
  const responsibilites: CompanyProps["responsibilites"] = [
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
    responsibilites,
    title: "Front end developer",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Company {...props} />
  );

  const { queryAllByTestId } = utils || {};
  
  const CompanyContainer: Element = queryAllByTestId("Company")[0];
  const CompanyDescription: Element = queryAllByTestId("CompanyDescription")[0];
  const CompanyInnerFlexContainer: Element = queryAllByTestId("CompanyInnerFlexContainer")[0];
  const CompanyPositionContainer: Element = queryAllByTestId("CompanyPositionContainer")[0];
  const FlexItem: Element[] = queryAllByTestId("FlexItem");
  const Logo: Element = queryAllByTestId("Logo")[0];
  const LogoFlexContainer: Element = queryAllByTestId("LogoFlexContainer")[0];
  const TimelinePositionContainer: Element = queryAllByTestId("TimelinePositionContainer")[0];
  const Timeline: Element = queryAllByTestId("Timeline")[0];

  return {
    ...utils,
    CompanyContainer,
    CompanyDescription,
    CompanyInnerFlexContainer,
    CompanyPositionContainer,
    FlexItem,
    Logo,
    LogoFlexContainer,
    Timeline,
    TimelinePositionContainer
  };
}
 