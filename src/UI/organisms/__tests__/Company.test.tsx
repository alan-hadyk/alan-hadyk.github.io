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
  
  describe.skip("IconsWithLabels", () => {
    const iconsWithLabels: IconWithLabelProps[] = [
      {
        iconName: "brandWebpack",
        label: "Webpack"
      },
      {
        iconName: "node",
        label: "Node"
      }
    ];

    test("there should be correct number of icons", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons.length).toEqual(3);
    });

    test("icons should render correct SVGs passed via iconsWithLabels.iconName props", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons[1].textContent).toEqual("Brand-Webpack.svg");
      expect(Icons[2].textContent).toEqual("Icon-Node.svg");
    });

    test("should have correct content passed via iconsWithLabels.label props", () => {
      const { IconsWithLabels } = setup({
        iconsWithLabels
      });

      expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Webpack");
      expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Node");
    });

    describe("Props", () => {
      describe("size - small", () => {
        describe("FlexContainer - gap", () => {    
          test("should have 1.6rem in all children, except the first one", () => {
            const { IconsWithLabels } = setup();
            
            expect(IconsWithLabels).toHaveStyleRule("margin-left", "1.6rem", {
              modifier: "& > *"
            });
            expect(IconsWithLabels).toHaveStyleRule("margin-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });

        describe("IconContainer - height", () => {
          test("should have 2.8rem", () => {
            const { IconsWithLabels } = setup();
    
            expect(IconsWithLabels.children[0].children[0].children[0]).toHaveStyleRule("height", "2.8rem");
            expect(IconsWithLabels.children[1].children[0].children[0]).toHaveStyleRule("height", "2.8rem");
          });
        });

        describe("IconWithLabelSpacingContainer - paddingRight", () => {
          test("should have .8rem", () => {
            const { IconsWithLabels } = setup();
    
            expect(IconsWithLabels.children[0].children[0]).toHaveStyleRule("padding-right", ".8rem");
            expect(IconsWithLabels.children[0].children[0]).toHaveStyleRule("padding-right", ".8rem");
          });
        });

        describe("LabelTexts - fontSize", () => {  
          test("should have 16px", () => {
            const { IconsWithLabels } = setup();
  
            expect(IconsWithLabels.children[0].children[1]).toHaveStyleRule("font-size", "16px");
            expect(IconsWithLabels.children[1].children[1]).toHaveStyleRule("font-size", "16px");
          });
        });
      });

      describe("position - horizontal", () => {
        describe("FlexContainer - flexFlow", () => {      
          test("should have row nowrap", () => {
            const { IconsWithLabels } = setup();
  
            expect(IconsWithLabels).toHaveStyleRule("flex-flow", "row nowrap");
          });
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
 