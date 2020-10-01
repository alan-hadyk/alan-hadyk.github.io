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
      DashboardSectionMobile,	
      DashboardSectionTablet,
      DashboardSectionTv,
      Section	
    } = setup();	

    expect(Section.children[4]).toEqual(DashboardSectionTv);
    expect(Section.children[5]).toEqual(DashboardSectionDesktop);
    expect(Section.children[6]).toEqual(DashboardSectionTablet);
    expect(Section.children[7]).toEqual(DashboardSectionMobile);
  });	

  describe("Section", () => {	
    describe("Props", () => {	
      describe("id", () => {	
        test("should equal dashboard", () => {	
          const { Section } = setup();	

          expect(Section.getAttribute("id")).toEqual("dashboard");	
        });	
      });	
    });	
  });	
});	

interface Setup extends RenderResult {	
  DashboardSectionDesktop: Element;
  DashboardSectionMobile: Element;	
  DashboardSectionTablet: Element;	
  DashboardSectionTv: Element;	
  Section: Element;	
}	

function setup(): Setup {	
  const utils: RenderResult = renderWithTheme(	
    <DashboardSection />	
  );	

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;	

  const DashboardSectionDesktop: Element = queryAllByTestId("DashboardSectionDesktop")[0];
  const DashboardSectionMobile: Element = queryAllByTestId("DashboardSectionMobile")[0];
  const DashboardSectionTablet: Element = queryAllByTestId("DashboardSectionTablet")[0];
  const DashboardSectionTv: Element = queryAllByTestId("DashboardSectionTv")[0];
  const Section: Element = queryByTestId("DashboardSection");	

  return {	
    ...utils,	
    DashboardSectionDesktop,
    DashboardSectionMobile,	
    DashboardSectionTablet,
    DashboardSectionTv,
    Section	
  };	
}