import React from "react";	
import { RenderResult } from "@testing-library/react";	

import DashboardSectionTop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTop";	

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

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionTop", () => {	
  test("should have correct structure for desktop", () => {	
    const {	
      Code,	
      DashboardSectionInnerContainer,
      DashboardSectionTopContainer,	
      Flux,	
      TechStack	
    } = setup({
      devices: ["desktop"]
    });	
    
    expect(DashboardSectionTopContainer.children[0]).toEqual(DashboardSectionInnerContainer);	

    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(TechStack);	
    expect(DashboardSectionInnerContainer.children[0].children[1]).toEqual(Flux);	
    expect(DashboardSectionInnerContainer.children[0].children[2]).toEqual(Code);	
  });	

  test("should have correct structure for tablet", () => {	
    const {	
      DashboardSectionInnerContainer,
      DashboardSectionTopContainer,	
      Flux,	
      TechStack	
    } = setup({
      devices: ["tablet"]
    });	

    expect(DashboardSectionTopContainer.children[0]).toEqual(DashboardSectionInnerContainer);	


    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(TechStack);	
    expect(DashboardSectionInnerContainer.children[0].children[1]).toEqual(Flux);	
  });	

  test("should have correct structure for mobile", () => {	
    const {	
      DashboardSectionInnerContainer,
      DashboardSectionTopContainer,	
      TechStack	
    } = setup({
      devices: ["mobile"]
    });	

    expect(DashboardSectionTopContainer.children[0]).toEqual(DashboardSectionInnerContainer);	


    expect(DashboardSectionInnerContainer.children[0].children[0]).toEqual(TechStack);	
  });

  describe("DashboardSectionTop", () => {	
    describe("Props", () => {	
      describe("width", () => {	
        test("should have 100%", () => {	
          const { DashboardSectionTopContainer } = setup();	

          expect(DashboardSectionTopContainer).toHaveStyleRule("width", "100%");	
        });	
      });		
    });	
  });	

  describe("DashboardSectionInnerContainer", () => {	
    describe("Props", () => {	
      describe("height", () => {	
        test("should have calc(17vh + 3.6rem)", () => {	
          const { DashboardSectionInnerContainer } = setup();	

          expect(DashboardSectionInnerContainer).toHaveStyleRule("height", "calc(17vh + 3.6rem)");	
        });	
      });		
    });	
  });	

  describe("TechStack", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 1 0 40%", () => {	
          const { TechStack } = setup();	

          expect(TechStack).toHaveStyleRule("flex", "1 0 40%");	
        });	
      });	

      describe("title", () => {	
        test("should render TechStack", () => {	
          const { TechStack } = setup();	

          expect(TechStack.children[0].textContent).toEqual("Tech Stack");		
        });	
      });	
    });	
  });	

  describe("Flux", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 1 0 30%", () => {	
          const { Flux } = setup();	

          expect(Flux).toHaveStyleRule("flex", "1 0 30%");	
        });	
      });	

      describe("title", () => {	
        test("should render Flux", () => {	
          const { Flux } = setup();	

          expect(Flux.children[0].textContent).toEqual("Flux");
        });	
      });	
    });	
  });	

  describe("Code", () => {	
    describe("Props", () => {	
      describe("flex", () => {	
        test("should have 0 1 30%", () => {	
          const { Code } = setup();	

          expect(Code).toHaveStyleRule("flex", "0 1 30%");	
        });	
      });	

      describe("title", () => {	
        test("should render Code", () => {	
          const { Code } = setup();	

          expect(Code.children[0].textContent).toEqual("Code");	
        });	
      });	
    });	
  });	
});	

interface Setup extends RenderResult {	
  Code: Element;	
  DashboardSectionInnerContainer: Element;
  DashboardSectionTopContainer: Element;
  Flux: Element;	
  TechStack: Element;	
}	

type DevicesTestProps = Partial<DevicesProps>;

function setup(additionalProps?: DevicesTestProps): Setup {
  const props: DevicesProps = {
    devices: ["desktop"],
    ...additionalProps
  };  
  
  const utils: RenderResult = renderWithTheme(	
    <DashboardSectionTop {...props} />	
  );	

  const { queryByTestId }: RenderResult = utils;	

  const Code: Element = queryByTestId("Code");	
  const DashboardSectionInnerContainer: Element = queryByTestId("DashboardSectionInnerContainer");
  const DashboardSectionTopContainer: Element = queryByTestId("DashboardSectionTop");
  const Flux: Element = queryByTestId("Flux");	
  const TechStack: Element = queryByTestId("TechStack");	

  return {	
    ...utils,	
    Code,	
    DashboardSectionInnerContainer,
    DashboardSectionTopContainer,	
    Flux,	
    TechStack	
  };	
}