import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

jest.mock("<hooks>/useFpsCounter");

jest.mock("vivus");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
jest.mock("<state>/withCommitsState", () => (WrappedComponent: React.FunctionComponent<any>) => (props: unknown): JSX.Element => {
  const commitsList = [
    {
      commit: {
        author: {
          date: "2020-03-10T22:34:52Z"
        }
      },
      html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
      sha: "4380d5d391eee216e651d34700a331ec501c2964"
    },
    {
      commit: {
        author: {
          date: "2020-03-11T22:34:52Z"
        }
      },
      html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",
      sha: "4380d5d391eee216e651d34700a331ec501c2969"
    }
  ];

  return (
    <WrappedComponent commitsList={commitsList} hasError={false} {...props} />
  );
});

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("pages / Home / sections / dashboard / DashboardSection", () => {
  test("should have correct structure", () => {
    const {
      DashboardSectionDesktop,
      DashboardSectionTablet,
      Section,
      SpacingContainer
    } = setup();

    expect(Section.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(DashboardSectionDesktop);
    expect(SpacingContainer.children[1]).toEqual(DashboardSectionTablet);
  });

  describe("Section", () => {
    describe("Props", () => {
      describe("id", () => {
        test("should equal dashboard", () => {
          const { Section } = setup();

          expect(Section.getAttribute("id")).toEqual("dashboard");
        });
      });

      describe("minHeight", () => {
        test("should have 100vh", () => {
          const { Section } = setup();

          expect(Section).toHaveStyleRule("min-height", "100vh");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100vh");
        });
      });

      describe("paddingTop", () => {
        test("should have 9.6rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "9.6rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  DashboardSectionDesktop: Element;
  DashboardSectionTablet: Element;
  Section: Element;
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSection />
  );

  const { queryByTestId }: RenderResult = utils;

  const DashboardSectionDesktop: Element = queryByTestId("ResponsiveDesktop");
  const DashboardSectionTablet: Element = queryByTestId("ResponsiveTablet");
  const Section: Element = queryByTestId("Section");
  const SpacingContainer: Element = queryByTestId("DashboardSectionSpacingContainer");

  return {
    ...utils,
    DashboardSectionDesktop,
    DashboardSectionTablet,
    Section,
    SpacingContainer
  };
}
