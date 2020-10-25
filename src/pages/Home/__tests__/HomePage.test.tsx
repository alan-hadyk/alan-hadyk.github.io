import React from "react";
import { RenderResult } from "@testing-library/react";

import HomePage from "pages/Home/HomePage";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("hooks/useIntersectionObserver");

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

jest.mock(
  "state/withCommitsState",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  () => (WrappedComponent: React.FunctionComponent<any>) => (
    props: unknown
  ): JSX.Element => {
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
      <WrappedComponent commitsList={commitsList} hasError={false} {...props} />
    );
  }
);

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("pages / Home / HomePage", () => {
  test("should have correct structure", () => {
    const {
      AboutMeSection,
      ContactSection,
      DashboardSection,
      ExperienceSection,
      HeaderPositionContainer,
      PageTemplate,
      PortfolioSection,
      SkillsSection
    } = setup();

    expect(PageTemplate.children[0]).toEqual(HeaderPositionContainer);
    expect(PageTemplate.children[1]).toEqual(DashboardSection);
    expect(PageTemplate.children[2]).toEqual(PortfolioSection);
    expect(PageTemplate.children[3]).toEqual(ExperienceSection);
    expect(PageTemplate.children[4]).toEqual(SkillsSection);
    expect(PageTemplate.children[5]).toEqual(AboutMeSection);
    expect(PageTemplate.children[6]).toEqual(ContactSection);
  });

  describe("Header", () => {
    describe("Props", () => {
      describe("zIndex", () => {
        test("should have 200", () => {
          const { HeaderPositionContainer } = setup();

          expect(HeaderPositionContainer).toHaveStyleRule("z-index", "200");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  AboutMeSection: Element;
  ContactSection: Element;
  DashboardSection: Element;
  ExperienceSection: Element;
  HeaderPositionContainer: Element;
  PageTemplate: Element;
  PortfolioSection: Element;
  SkillsSection: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<HomePage />);

  const { queryByTestId } = utils || {};

  const AboutMeSection: Element = queryByTestId("AboutMeSection");
  const ContactSection: Element = queryByTestId("ContactSection");
  const DashboardSection: Element = queryByTestId("DashboardSection");
  const ExperienceSection: Element = queryByTestId("ExperienceSection");
  const HeaderPositionContainer: Element = queryByTestId(
    "HeaderPositionContainer"
  );
  const PageTemplate: Element = queryByTestId("PageTemplate");
  const PortfolioSection: Element = queryByTestId("PortfolioSection");
  const SkillsSection: Element = queryByTestId("SkillsSection");

  return {
    ...utils,
    AboutMeSection,
    ContactSection,
    DashboardSection,
    ExperienceSection,
    HeaderPositionContainer,
    PageTemplate,
    PortfolioSection,
    SkillsSection
  };
}
