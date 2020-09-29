import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyPersonallyEmployed from "<pages>/Home/sections/experience/companies/CompanyPersonallyEmployed";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("pages / Home / sections / experience / companies / CompanyPersonallyEmployed", () => {
  describe("Props", () => {
    describe("date", () => {    
      test("should render May 2008 to September 2010", () => {
        const {
          CompanyDescription
        } = setup();
    
        expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("May 2008 to September 2010");
      });
    });

    describe("iconsWithLabels", () => {    
      test("should render correct icons with labels", () => {
        const {
          CompanyDescription
        } = setup();
        const IconsWithLabels: Element = CompanyDescription.children[2].children[1].children[0];
    
        const iconsWithLabels: IconWithLabelProps[] = [
          {
            iconName: "brandJS",
            label: "Javascript"
          },
          {
            iconName: "brandJQuery",
            label: "jQuery"
          }
        ];
    
        iconsWithLabels.forEach(({ label }, index: number) => {
          expect(IconsWithLabels.children[index].children[1].textContent).toEqual(label);  
        });
    
        expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
        expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Brand-jQuery.svg");
      });
    });

    describe("logo", () => {    
      test("should render correct logo", () => {
        const {
          Logo
        } = setup();
    
        expect(Logo.textContent).toEqual("Icon-Logo.svg");
      });
    });

    describe("responsibilities", () => {    
      test("should render correct responsibilities", () => {
        const {
          CompanyDescription
        } = setup();
        const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];
    
        expect(UnorderedList.textContent).toEqual("Employed personal referral networks to attain small job order contractsInitialized personal motivation to acquire front-end development skillsCultivated strong ties to the technology community through exemplified demonstration of abilitiesCoordinated development of interactive web-based data visualizations, including interactive charts and maps");
      });
    });

    describe("timelineBottom", () => {    
      test("should have 0", () => {
        const {
          TimelinePositionContainer
        } = setup();
        
        expect(TimelinePositionContainer).toHaveStyleRule("bottom", "0");
      });
    });

    describe("title", () => {    
      test("should render Freelancer", () => {
        const {
          CompanyDescription
        } = setup();
        const Title: string = CompanyDescription.children[0].textContent;
    
        expect(Title).toEqual("Freelancer");
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescription: Element;
  Logo: Element;
  TimelinePositionContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <CompanyPersonallyEmployed />
  );

  const { queryAllByTestId } = utils || {};
  
  const CompanyDescription: Element = queryAllByTestId("CompanyDescription")[0];
  const Logo: Element = queryAllByTestId("Logo")[0];
  const TimelinePositionContainer: Element = queryAllByTestId("TimelinePositionContainer")[0];

  return {
    ...utils,
    CompanyDescription,
    Logo,
    TimelinePositionContainer
  };
}
 