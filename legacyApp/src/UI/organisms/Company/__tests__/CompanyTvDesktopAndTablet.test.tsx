import { RenderResult } from "@testing-library/react";

import CompanyTvDesktopAndTablet from "UI/organisms/Company/CompanyTvDesktopAndTablet";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("hooks/useIntersectionObserver");

describe("organisms / CompanyTvDesktopAndTablet", () => {
  test("should have correct structure", () => {
    const {
      CompanyDescription,
      CompanyTvDesktopAndTabletName,
      CompanyTimeline,
      CompanyTvDesktopTablet,
      FlexContainer,
      FlexItems
    } = setup();

    expect(CompanyTvDesktopTablet.children[0]).toEqual(CompanyTimeline);
    expect(CompanyTvDesktopTablet.children[1]).toEqual(FlexContainer);

    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);
    expect(FlexItems[0].children[0]).toEqual(CompanyTvDesktopAndTabletName);
    expect(FlexItems[1].children[0]).toEqual(CompanyDescription);
  });

  describe("CompanyTvDesktopTablet", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv, desktop and tablet", () => {
          test("should have display block when min-width is 1681px", () => {
            const { CompanyTvDesktopTablet } = setup();

            expect(CompanyTvDesktopTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });

          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { CompanyTvDesktopTablet } = setup();

            expect(CompanyTvDesktopTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:1281px) and (max-width:1680px)"
            });
          });

          test("should have display block when min-width is 641px and max-width is 1280px", () => {
            const { CompanyTvDesktopTablet } = setup();

            expect(CompanyTvDesktopTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("margin", () => {
        test("should have 0 auto", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("margin", "0 auto");
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

  describe("FlexItems", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 0 50%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem: Element) => {
            expect(FlexItem).toHaveStyleRule("flex", "0 0 50%");
          });
        });
      });

      describe("shouldApplyWidth", () => {
        test("should not have width if isIE11 returns false", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem: Element) => {
            expect(FlexItem).not.toHaveStyleRule("width", {
              media: "(-ms-high-contrast: none)"
            });
            expect(FlexItem).not.toHaveStyleRule("width", {
              media: "(-ms-high-contrast: active)"
            });
          });
        });

        test("should have 50% if isIE11 returns true", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem: Element) => {
            expect(FlexItem).toHaveStyleRule("width", "50%", {
              media: "(-ms-high-contrast: none)"
            });
            expect(FlexItem).toHaveStyleRule("width", "50%", {
              media: "(-ms-high-contrast: active)"
            });
          });
        });
      });
    });

    describe("FlexItems[0]", () => {
      describe("paddingRight", () => {
        test("should have 4rem", () => {
          const { FlexItems } = setup();

          expect(FlexItems[0]).toHaveStyleRule("padding-right", "4rem");
        });
      });
    });

    describe("FlexItems[1]", () => {
      describe("paddingLeft", () => {
        test("should have 4rem", () => {
          const { FlexItems } = setup();

          expect(FlexItems[1]).toHaveStyleRule("padding-left", "4rem");
        });
      });
    });
  });

  describe("CompanyTimeline", () => {
    describe("Props", () => {
      describe("timelineBottom", () => {
        test("should have bottom equal to timelineBottom prop - test 1", () => {
          const { CompanyTimeline } = setup({
            timelineBottom: "spacing12"
          });

          expect(CompanyTimeline).toHaveStyleRule("bottom", "1.2rem");
        });

        test("should have bottom equal to timelineBottom prop - test 2", () => {
          const { CompanyTimeline } = setup({
            timelineBottom: "spacing24"
          });

          expect(CompanyTimeline).toHaveStyleRule("bottom", "2.4rem");
        });
      });
    });
  });

  describe("CompanyTvDesktopAndTabletName", () => {
    describe("Props", () => {
      describe("name", () => {
        test("should have SAP when prop name: SAP", () => {
          const { CompanyTvDesktopAndTabletName } = setup({
            name: "SAP"
          });

          expect(CompanyTvDesktopAndTabletName.textContent).toEqual("SAP");
        });

        test("should have Omise when prop name: Omise", () => {
          const { CompanyTvDesktopAndTabletName } = setup({
            name: "Omise"
          });

          expect(CompanyTvDesktopAndTabletName.textContent).toEqual("Omise");
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
  CompanyTimeline: Element;
  CompanyTvDesktopAndTabletName: Element;
  CompanyTvDesktopTablet: Element;
  FlexContainer: Element;
  FlexItems: Element[];
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
    name: "companyOmise",
    responsibilities,
    title: "Front end developer",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <CompanyTvDesktopAndTablet {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const CompanyDescription: Element = queryAllByTestId("CompanyDescription")[0];
  const CompanyTvDesktopAndTabletName: Element = queryAllByTestId(
    "CompanyTvDesktopAndTabletName"
  )[0];
  const CompanyTimeline: Element = queryAllByTestId("CompanyTimeline")[0];
  const CompanyTvDesktopTablet: Element = queryAllByTestId(
    "CompanyTvDesktopTablet"
  )[0];
  const FlexContainer: Element = queryAllByTestId(
    "CompanyTvDesktopAndTabletFlexContainer"
  )[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");

  return {
    ...utils,
    CompanyDescription,
    CompanyTimeline,
    CompanyTvDesktopAndTabletName,
    CompanyTvDesktopTablet,
    FlexContainer,
    FlexItems
  };
}
