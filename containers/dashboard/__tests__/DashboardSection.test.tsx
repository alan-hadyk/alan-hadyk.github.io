import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSection from "pages/Home/sections/dashboard/DashboardSection";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mockWithCommitsState(WrappedComponent: React.FunctionComponent<any>) {
  return (props: Record<string, unknown>): JSX.Element => {
    const commitsList = [
      {
        commit: {
          author: {
            date: "2020-03-10T22:34:52Z"
          }
        },
        html_url:
          "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
        sha: "4380d5d391eee216e651d34700a331ec501c2964"
      },
      {
        commit: {
          author: {
            date: "2020-03-11T22:34:52Z"
          }
        },
        html_url:
          "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",
        sha: "4380d5d391eee216e651d34700a331ec501c2969"
      }
    ];

    return (
      <WrappedComponent
        commitsList={commitsList}
        commitsState="loaded"
        {...props}
      />
    );
  };
}

jest.mock("state/withCommitsState", () => mockWithCommitsState);

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("pages / Home / sections / dashboard / DashboardSection", () => {
  test("should have correct structure", () => {
    const {
      DashboardSectionMobile,
      DashboardSectionTablet,
      DashboardSectionTvAndDesktop,
      Section
    } = setup();

    expect(Section.children[0]).toEqual(DashboardSectionTvAndDesktop);
    expect(Section.children[1]).toEqual(DashboardSectionTablet);
    expect(Section.children[2]).toEqual(DashboardSectionMobile);
  });

  describe("Section", () => {
    describe("Props", () => {
      describe("id", () => {
        test("should equal dashboard", () => {
          const { Section } = setup();

          expect(Section.getAttribute("id")).toEqual("dashboard");
        });
      });

      describe("marginBottom", () => {
        test("should have 1.2rem", () => {
          const { Section } = setup();

          expect(Section).toHaveStyleRule("margin-bottom", "1.2rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  DashboardSectionMobile: Element;
  DashboardSectionTablet: Element;
  DashboardSectionTvAndDesktop: Element;
  Section: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<DashboardSection />);

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const DashboardSectionMobile: Element = queryAllByTestId(
    "DashboardSectionMobile"
  )[0];
  const DashboardSectionTablet: Element = queryAllByTestId(
    "DashboardSectionTablet"
  )[0];
  const DashboardSectionTvAndDesktop: Element = queryAllByTestId(
    "DashboardSectionTvAndDesktop"
  )[0];
  const Section: Element = queryByTestId("DashboardSection");

  return {
    ...utils,
    DashboardSectionMobile,
    DashboardSectionTablet,
    DashboardSectionTvAndDesktop,
    Section
  };
}
