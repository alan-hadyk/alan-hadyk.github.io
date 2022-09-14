import { RenderResult } from "@testing-library/react";

import Company from "UI/organisms/Company";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("organisms / Company", () => {
  test("should have correct structure", () => {
    const {
      CompanyContainer,
      CompanyMobile,
      CompanyPositionContainer,
      CompanyTvDesktopTablet
    } = setup();

    expect(CompanyContainer.children[0]).toEqual(CompanyPositionContainer);

    expect(CompanyPositionContainer.children[0]).toEqual(
      CompanyTvDesktopTablet
    );
    expect(CompanyPositionContainer.children[1]).toEqual(CompanyMobile);
  });

  describe("CompanyPositionContainer", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should have relative", () => {
          const { CompanyPositionContainer } = setup();

          expect(CompanyPositionContainer).toHaveStyleRule(
            "position",
            "relative"
          );
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { CompanyPositionContainer } = setup();

          expect(CompanyPositionContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("CompanyTv, CompanyDesktop, CompanyTablet, CompanyMobile", () => {
    describe("Props", () => {
      describe("date", () => {
        test("should render label equal to date prop", () => {
          const { CompanyDescriptions } = setup({
            date: "July 2016 to present"
          });

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            expect(
              CompanyDescription.children[1].children[0].children[1].textContent
            ).toEqual("July 2016 to present");
          });
        });
      });

      describe("iconsWithLabels", () => {
        test("should render correct icon and label passed via iconsWithLabels prop", () => {
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
            IconsWithLabels =
              CompanyDescriptions.children[2].children[1].children[0];

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
        });
      });

      describe("responsibilities", () => {
        test("should render correct value passed via responsibilities prop", () => {
          const responsibilities: CompanyProps["responsibilities"] = [
            "Create scalable and sane front-end architecture",
            "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
          ];

          const { CompanyDescriptions } = setup({
            responsibilities
          });

          let UnorderedList: Element;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            UnorderedList =
              CompanyDescription.children[3].children[1].children[0];

            expect(UnorderedList.children.length).toEqual(2);
            responsibilities.forEach(
              (responsibility: unknown, index: number) => {
                expect(UnorderedList.children[index].textContent).toEqual(
                  responsibility
                );
              }
            );
          });
        });
      });

      describe("title", () => {
        test("should render correct value passed via title prop", () => {
          const title: CompanyProps["title"] = "Front-end developer";

          const { CompanyDescriptions } = setup({
            title
          });

          let Title: string;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            Title = CompanyDescription.children[0].textContent;

            expect(Title).toEqual(title);
          });
        });
      });
    });
  });

  describe("CompanyTvDesktopAndTablet", () => {
    describe("Props", () => {
      describe("timelineBottom", () => {
        test("should have correct value passed via timelineBottom prop", () => {
          const { CompanyTimelines } = setup({
            timelineBottom: "spacing12"
          });

          CompanyTimelines.forEach((CompanyTimeline: Element) => {
            expect(CompanyTimeline).toHaveStyleRule("bottom", "1.2rem");
          });
        });
      });
    });
  });

  describe("CompanyMobile", () => {
    describe("Props", () => {
      describe("responsibilitiesPaddingBottom", () => {
        test("should have correct value passed via companyMobilePaddingBottom prop", () => {
          const { CompanyDescriptions } = setup({
            companyMobilePaddingBottom: "spacing0"
          });

          expect(CompanyDescriptions[1].children[3]).toHaveStyleRule(
            "padding-bottom",
            "0"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyContainer: Element;
  CompanyDescriptions: Element[];
  CompanyLogos: Element[];
  CompanyMobile: Element;
  CompanyPositionContainer: Element;
  CompanyTimelines: Element[];
  CompanyTvDesktopTablet: Element;
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
    responsibilities,
    title: "Front end developer",
    name: "Omise",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Company {...props} />);

  const { queryAllByTestId } = utils || {};

  const CompanyContainer: Element = queryAllByTestId("Company")[0];
  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const CompanyLogos: Element[] = queryAllByTestId("CompanyLogoFlexContainer");
  const CompanyMobile: Element = queryAllByTestId("CompanyMobile")[0];
  const CompanyPositionContainer: Element = queryAllByTestId(
    "CompanyPositionContainer"
  )[0];
  const CompanyTimelines: Element[] = queryAllByTestId("CompanyTimeline");
  const CompanyTvDesktopTablet: Element = queryAllByTestId(
    "CompanyTvDesktopTablet"
  )[0];

  return {
    ...utils,
    CompanyContainer,
    CompanyDescriptions,
    CompanyLogos,
    CompanyMobile,
    CompanyPositionContainer,
    CompanyTimelines,
    CompanyTvDesktopTablet
  };
}
