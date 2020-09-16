import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyTvDesktopAndTablet from "<organisms>/Company/CompanyTvDesktopAndTablet";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

jest.mock("<hooks>/useIntersectionObserver");

describe("organisms / CompanyTvDesktopAndTablet", () => {
  test("should have correct structure", () => {
    const {
      CompanyDescriptions,
      CompanyLogos,
      CompanyTimelines,
      FlexContainers,
      FlexItems,
      ResponsiveDesktop,
      ResponsiveTablet,
      ResponsiveTv
    } = setup();

    expect(ResponsiveTv.children[0]).toEqual(CompanyTimelines[0]);
    expect(ResponsiveTv.children[1]).toEqual(FlexContainers[0]);

    expect(ResponsiveDesktop.children[0]).toEqual(CompanyTimelines[1]);
    expect(ResponsiveDesktop.children[1]).toEqual(FlexContainers[1]);

    expect(ResponsiveTablet.children[0]).toEqual(CompanyTimelines[2]);
    expect(ResponsiveTablet.children[1]).toEqual(FlexContainers[2]);

    expect(FlexContainers[0].children[0]).toEqual(FlexItems[0]);
    expect(FlexContainers[0].children[1]).toEqual(FlexItems[1]);
    expect(FlexItems[0].children[0]).toEqual(CompanyLogos[0]);
    expect(FlexItems[1].children[0]).toEqual(CompanyDescriptions[0]);

    expect(FlexContainers[1].children[0]).toEqual(FlexItems[2]);
    expect(FlexContainers[1].children[1]).toEqual(FlexItems[3]);
    expect(FlexItems[2].children[0]).toEqual(CompanyLogos[1]);
    expect(FlexItems[3].children[0]).toEqual(CompanyDescriptions[1]);

    expect(FlexContainers[2].children[0]).toEqual(FlexItems[4]);
    expect(FlexContainers[2].children[1]).toEqual(FlexItems[5]);
    expect(FlexItems[4].children[0]).toEqual(CompanyLogos[2]);
    expect(FlexItems[5].children[0]).toEqual(CompanyDescriptions[2]);
  });

  describe("ResponsiveTv", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have tv", () => {
          test("should have display block when min-width is 1681px", () => {
            const { ResponsiveTv } = setup();
      
            expect(ResponsiveTv).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });
        });
      });
    });
  });

  describe("ResponsiveDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have desktop", () => {
          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { ResponsiveDesktop } = setup();
      
            expect(ResponsiveDesktop).toHaveStyleRule("display", "block", {
              media: "(min-width:1281px) and (max-width:1680px)"
            });
          });
        });
      });
    });
  });

  describe("ResponsiveTablet", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have tablet", () => {
          test("should have display block when min-width is 641px and max-width is 1280px", () => {
            const { ResponsiveTablet } = setup();
      
            expect(ResponsiveTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });
        });
      });
    });
  });

  describe("FlexContainers", () => {
    describe("Props", () => {
      describe("alignItems", () => {  
        test("should have flex-start", () => {
          const { FlexContainers } = setup();

          FlexContainers.forEach((FlexContainer: Element) => {
            expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
          });
        });
      });

      describe("flexFlow", () => {  
        test("should have row nowrap", () => {
          const { FlexContainers } = setup();

          FlexContainers.forEach((FlexContainer: Element) => {
            expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });
      });

      describe("gap", () => {
        test("should have margin-left: 8.8rem for all children (except first)", () => {
          const { FlexContainers } = setup();

          FlexContainers.forEach((FlexContainer: Element) => {
            expect(FlexContainer).toHaveStyleRule("margin-left", "8.8rem", {
              modifier: "& > *"
            });

            expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });
      });

      describe("maxWidth", () => {  
        test("should have 105.6rem", () => {
          const { FlexContainers } = setup();

          FlexContainers.forEach((FlexContainer: Element) => {
            expect(FlexContainer).toHaveStyleRule("max-width", "105.6rem");
          });
        });
      });
    });
  });

  describe("CompanyLogos", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 4.8rem", () => {
          const { CompanyLogos } = setup();

          CompanyLogos.forEach((CompanyLogo: Element) => {
            expect(CompanyLogo.children[0]).toHaveStyleRule("height", "4.8rem");
          });
        });
      });

      describe("iconName", () => {
        test("should have Icon-Apollo.svg when prop logo: apollo", () => {
          const { CompanyLogos } = setup({
            logo: "apollo"
          });

          CompanyLogos.forEach((CompanyLogo: Element) => {
            expect(CompanyLogo.children[0].textContent).toEqual("Icon-Apollo.svg");
          });
        });

        test("should have Company-Omise.svg when prop logo: companyOmise", () => {
          const { CompanyLogos } = setup({
            logo: "companyOmise"
          });

          CompanyLogos.forEach((CompanyLogo: Element) => {
            expect(CompanyLogo.children[0].textContent).toEqual("Company-Omise.svg");
          });
        });

        test("should have Brand-JS.svg when prop logo: brandJS", () => {
          const { CompanyLogos } = setup({
            logo: "brandJS"
          });

          CompanyLogos.forEach((CompanyLogo: Element) => {
            expect(CompanyLogo.children[0].textContent).toEqual("Brand-JS.svg");
          });
        });
      });

      describe("isHeightResponsive", () => {
        describe("svg", () => {
          describe("height", () => {
            test("should have 100%", () => {
              const { CompanyLogos } = setup();

              CompanyLogos.forEach((CompanyLogo: Element) => {
                expect(CompanyLogo.children[0]).toHaveStyleRule("height", "100%", {
                  modifier: "svg"
                });
              });
            });
          });

          describe("width", () => {
            test("should have auto", () => {
              const { CompanyLogos } = setup();

              CompanyLogos.forEach((CompanyLogo: Element) => {
                expect(CompanyLogo.children[0]).toHaveStyleRule("width", "auto", {
                  modifier: "svg"
                });
              });
            });
          });
        });
      });
    });
  });

  describe("CompanyDescriptions", () => {
    describe("Props", () => {
      describe("date", () => {
        test("should render label equal to date prop - July 2016 to present", () => {
          const { CompanyDescriptions } = setup({
            date: "July 2016 to present"
          });

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("July 2016 to present");
          });
        });

        test("should render label equal to date prop - March 2017 to August 2018", () => {
          const { CompanyDescriptions } = setup({
            date: "March 2017 to August 2018"
          });

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("March 2017 to August 2018");
          });
        });
      });

      describe("iconsWithLabels", () => {
        test("should render correct icons - Webpack, Node", () => {
          const { CompanyDescriptions } = setup({
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

          let IconsWithLabels: Element;

          CompanyDescriptions.forEach((CompanyDescriptions: Element) => {
            IconsWithLabels = CompanyDescriptions.children[2].children[1].children[0];
          });

          expect(IconsWithLabels.children.length).toEqual(2);
          expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-Webpack.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Webpack");
          expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Icon-Node.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Node");
        });

        test("should render correct icons - React, Apollo", () => {
          const { CompanyDescriptions } = setup({
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
          
          let IconsWithLabels: Element;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            IconsWithLabels = CompanyDescription.children[2].children[1].children[0];
          });

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
          const { CompanyDescriptions } = setup({
            responsibilities
          });

          let UnorderedList: Element;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            UnorderedList = CompanyDescription.children[3].children[1].children[0];
          });

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
          const { CompanyDescriptions } = setup({
            responsibilities
          });

          let UnorderedList: Element;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            UnorderedList = CompanyDescription.children[3].children[1].children[0];
          });

          expect(UnorderedList.children.length).toEqual(2);
          responsibilities.forEach((responsibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(responsibility);
          });
        });
      });

      describe("title", () => {
        test("should render correct title - test 1", () => {
          const title: CompanyProps["title"] = "Front-end developer";
          const { CompanyDescriptions } = setup({
            title
          });

          let Title: string;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            Title = CompanyDescription.children[0].textContent;
          });

          expect(Title).toEqual(title);
        });

        test("should render correct title - test 2", () => {
          const title: CompanyProps["title"] = "Freelancer";
          const { CompanyDescriptions } = setup({
            title
          });

          let Title: string;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            Title = CompanyDescription.children[0].textContent;
          });
          expect(Title).toEqual(title);
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescriptions: Element[];
  CompanyLogos: Element[];
  CompanyTimelines: Element[];
  FlexContainers: Element[];
  FlexItems: Element[];
  ResponsiveDesktop: Element;
  ResponsiveTablet: Element;
  ResponsiveTv: Element;
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
    <CompanyTvDesktopAndTablet {...props} />
  );

  const { queryAllByTestId, queryByTestId } = utils || {};

  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const CompanyLogos: Element[] = queryAllByTestId("CompanyLogoFlexContainer");
  const CompanyTimelines: Element[] = queryAllByTestId("CompanyTimeline");
  const FlexContainers: Element[] = queryAllByTestId("CompanyTvDesktopAndTabletFlexContainer");
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");
  const ResponsiveTv: Element = queryByTestId("ResponsiveTv");

  return {
    ...utils,
    CompanyDescriptions,
    CompanyLogos,
    CompanyTimelines,
    FlexContainers,
    FlexItems,
    ResponsiveDesktop,
    ResponsiveTablet,
    ResponsiveTv
  };
}
