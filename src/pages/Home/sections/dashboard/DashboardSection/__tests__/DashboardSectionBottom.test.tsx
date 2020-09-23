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
  test("should have correct structure for tv and desktop", () => {	
    const {	
      Commits,	
      DashboardSectionBottomContainer,	
      DashboardSectionInnerContainer,
      Ip,	
      PoweredBy,	
      UserAgent	
    } = setup({
      devices: ["tv", "desktop"]
    });	

    expect(DashboardSectionBottomContainer.children[0]).toEqual(DashboardSectionInnerContainer);	

    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(Commits);	
    expect(DashboardSectionInnerContainer.children[0].children[1]).toEqual(PoweredBy);	
    expect(DashboardSectionInnerContainer.children[0].children[2]).toEqual(UserAgent);	
    expect(DashboardSectionInnerContainer.children[0].children[3]).toEqual(Ip);	
  });	

  test("should have correct structure for tablet and mobile", () => {	
    const {	
      Commits,	
      DashboardSectionBottomContainer,	
      DashboardSectionInnerContainer,
      PoweredBy
    } = setup({
      devices: ["tablet", "mobile"]
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
          test("should have none by default", () => {
            const { DashboardSectionBottomContainer } = setup();
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "none");
          });

          test("should have block for min-width: 1681px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["tv"]
            });

            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });

          test("should have block for min-width: 1281px and max-width: 1680px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["desktop"]
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "block", {
              media: "(min-width:1281px) and (max-width:1680px)"
            });
          });

          test("should have block for min-width: 641px and min-width: 1280px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["tablet"]
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });

          test("should have block for max-width: 640px", () => {
            const { DashboardSectionBottomContainer } = setup({
              devices: ["mobile"]
            });
  
            expect(DashboardSectionBottomContainer).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
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

      describe("marginBottom", () => {	
        test("should have 2.22vh", () => {	
          const { DashboardSectionInnerContainer } = setup();	

          expect(DashboardSectionInnerContainer).toHaveStyleRule("margin-bottom", "2.22vh");	
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

  const { queryAllByTestId }: RenderResult = utils;	

  const Commits: Element = queryAllByTestId("Commits")[0];	
  const DashboardSectionBottomContainer: Element = queryAllByTestId("DashboardSectionBottom")[0];
  const DashboardSectionInnerContainer: Element = queryAllByTestId("DashboardSectionInnerContainer")[0];
  const Ip: Element = queryAllByTestId("IP")[0];	
  const PoweredBy: Element = queryAllByTestId("PoweredBy")[0];	
  const UserAgent: Element = queryAllByTestId("UserAgent")[0];	

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