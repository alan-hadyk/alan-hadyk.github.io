import React from "react";	
import { RenderResult } from "@testing-library/react";	

import DashboardSectionBottom from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionBottom";	

import renderWithTheme from "<helpers>/tests/renderWithTheme";	

import {
  DevicesProps
} from "<layout>/__typings__/Responsive.d.ts";

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


describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionBottom", () => {	
  test("should have correct structure for desktop", () => {	
    const {	
      Commits,	
      DashboardSectionBottomContainer,	
      DashboardSectionInnerContainer,
      Ip,	
      PoweredBy,	
      UserAgent	
    } = setup({
      devices: ["desktop"]
    });	

    expect(DashboardSectionBottomContainer.children[0]).toEqual(DashboardSectionInnerContainer);	

    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(Commits);	
    expect(DashboardSectionInnerContainer.children[0].children[1]).toEqual(PoweredBy);	
    expect(DashboardSectionInnerContainer.children[0].children[2]).toEqual(UserAgent);	
    expect(DashboardSectionInnerContainer.children[0].children[3]).toEqual(Ip);	
  });	

  test("should have correct structure for tablet", () => {	
    const {	
      Commits,	
      DashboardSectionBottomContainer,	
      DashboardSectionInnerContainer,
      Ip,	
      PoweredBy	
    } = setup({
      devices: ["tablet"]
    });	

    expect(DashboardSectionBottomContainer.children[0]).toEqual(DashboardSectionInnerContainer);	

    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(Commits);	
    expect(DashboardSectionInnerContainer.children[0].children[1]).toEqual(PoweredBy);	
    expect(DashboardSectionInnerContainer.children[0].children[2]).toEqual(Ip);	
  });	

  test("should have correct structure for mobile", () => {	
    const {	
      Commits,	
      DashboardSectionBottomContainer,	
      DashboardSectionInnerContainer,
      PoweredBy
    } = setup({
      devices: ["mobile"]
    });	

    expect(DashboardSectionBottomContainer.children[0]).toEqual(DashboardSectionInnerContainer);	

    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(Commits);	
    expect(DashboardSectionInnerContainer.children[0].children[1]).toEqual(PoweredBy);	
  });	

  describe("DashboardSectionBottom", () => {	
    describe("Props", () => {	
      describe("width", () => {	
        test("should have 100%", () => {	
          const { DashboardSectionBottomContainer } = setup();	

          expect(DashboardSectionBottomContainer).toHaveStyleRule("width", "100%");	
        });	
      });		

      describe("devices", () => {	
        describe("display", () => {      
          test("should have none for max-width: 1680px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["desktop"]
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "none", {
              media: "(max-width:1680px)"
            });
          });

          test("should have none for max-width: 1280px and min-width: 1680px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["tablet"]
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "none", {
              media: "(max-width:1280px)"
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "none", {
              media: "(min-width:1680px)"
            });
          });

          test("should have none for min-width: 1280px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["mobile"]
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "none", {
              media: "(min-width:1280px)"
            });
          });
        });
      });	
    });	
  });	

  describe("DashboardSectionInnerContainer", () => {	
    describe("Props", () => {	
      describe("height", () => {	
        test("should have calc(22.6vh + 3.6rem)", () => {	
          const { DashboardSectionInnerContainer } = setup();	

          expect(DashboardSectionInnerContainer).toHaveStyleRule("height", "calc(22.6vh + 3.6rem)");	
        });	
      });		
    });	
  });	

  describe("Commits", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 1 0 20%", () => {	
          const { Commits } = setup();	

          expect(Commits).toHaveStyleRule("flex", "1 0 20%");	
        });	
      });	

      describe("title", () => {	
        test("should render Commits", () => {	
          const { Commits } = setup();	

          expect(Commits.children[0].textContent).toEqual("Commits");	
        });	
      });	
    });	
  });	

  describe("UserAgent", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 1 0 20%", () => {	
          const { UserAgent } = setup();	

          expect(UserAgent).toHaveStyleRule("flex", "1 0 20%");	
        });	
      });	

      describe("title", () => {	
        test("should render User Agent", () => {	
          const { UserAgent } = setup();	

          expect(UserAgent.children[0].textContent).toEqual("User Agent");	
        });	
      });	
    });	
  });	

  describe("PoweredBy", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 1 0 30%", () => {
          const { PoweredBy } = setup();	

          expect(PoweredBy).toHaveStyleRule("flex", "1 0 30%");	
        });	
      });	

      describe("title", () => {	
        test("should render Powered by", () => {	
          const { PoweredBy } = setup();	

          expect(PoweredBy.children[0].textContent).toEqual("Powered by");	
        });	
      });	
    });	
  });	

  describe("Ip", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 0 1 30%", () => {	
          const { Ip } = setup();	

          expect(Ip).toHaveStyleRule("flex", "0 1 30%");	
        });	
      });	

      describe("title", () => {
        test("should render IP: ${ip.address}", () => {	
          const { Ip } = setup();

          expect(Ip.children[0].textContent).toEqual("IP: 127.0.0.1");
        });	
      });	
    });	
  });	
});	

interface Setup extends RenderResult {	
  Commits: Element;	
  DashboardSectionBottomContainer: Element;	
  DashboardSectionInnerContainer: Element;
  Ip: Element;	
  PoweredBy: Element;	
  UserAgent: Element;	
}	

type DevicesTestProps = Partial<DevicesProps>;

function setup(additionalProps?: DevicesTestProps): Setup {	
  const props: DevicesProps = {
    devices: ["desktop"],
    ...additionalProps
  };  

  const utils: RenderResult = renderWithTheme(	
    <DashboardSectionBottom {...props} />	
  );	

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;	

  const Commits: Element = queryAllByTestId("Commits")[0];	
  const DashboardSectionBottomContainer: Element = queryByTestId("DashboardSectionBottom");
  const DashboardSectionInnerContainer: Element = queryByTestId("DashboardSectionInnerContainer");
  const Ip: Element = queryByTestId("IP");	
  const PoweredBy: Element = queryByTestId("PoweredBy");	
  const UserAgent: Element = queryByTestId("UserAgent");	

  return {	
    ...utils,	
    Commits,	
    DashboardSectionBottomContainer,	
    DashboardSectionInnerContainer,
    Ip,	
    PoweredBy,	
    UserAgent	
  };	
}