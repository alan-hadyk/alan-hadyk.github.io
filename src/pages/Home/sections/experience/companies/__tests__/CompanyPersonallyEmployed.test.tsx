import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyPersonallyEmployed from "<pages>/Home/sections/experience/companies/CompanyPersonallyEmployed";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / experience / companies / CompanyPersonallyEmployed", () => {
  describe("Props", () => {
    describe("companyMobilePaddingBottom", () => {
      test("should have 0", () => {
        const {
          ResponsibilitiesSpacingContainers
        } = setup();
    
        expect(ResponsibilitiesSpacingContainers[3]).toHaveStyleRule("padding-bottom", "0");
      });
    });

    describe("date", () => {
      test("should render May 2008 to September 2010", () => {
        const {
          CompanyDescriptions
        } = setup();

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("May 2008 to September 2010");
        });
      });
    });

    describe("iconsWithLabels", () => {
      test("should render correct icons with labels", () => {
        const {
          CompanyDescriptions
        } = setup();
        
        let IconsWithLabels: Element;

        CompanyDescriptions.forEach((CompanyDescriptions: Element) => {
          IconsWithLabels = CompanyDescriptions.children[2].children[1].children[0];

          expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Javascript");

          expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Brand-jQuery.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual("jQuery");
        });
      });
    });

    describe("logo", () => {
      test("should render Icon-Logo.svg", () => {
        const {
          Logos
        } = setup();

        Logos.forEach((Logo: Element) => {
          expect(Logo.textContent).toEqual("Icon-Logo.svg");
        });    
      });
    });

    describe("responsibilities", () => {
      test("should render correct responsibilities", () => {
        const {
          CompanyDescriptions
        } = setup();
        let UnorderedList: Element;

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          UnorderedList = CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.textContent).toEqual("Employed personal referral networks to attain small job order contractsInitialized personal motivation to acquire front-end development skillsCultivated strong ties to the technology community through exemplified demonstration of abilitiesCoordinated development of interactive web-based data visualizations, including interactive charts and maps");
        });
      });
    });

    describe("timelineBottom", () => {    
      test("should have 0", () => {
        const {
          TimelinePositionContainers
        } = setup();
        
        TimelinePositionContainers.forEach((TimelinePositionContainer: Element) => {
          expect(TimelinePositionContainer).toHaveStyleRule("bottom", "0");
        });
      });
    });

    describe("title", () => {
      test("should render Freelancer", () => {
        const {
          CompanyDescriptions
        } = setup();
        let Title: string;

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          Title = CompanyDescription.children[0].textContent;

          expect(Title).toEqual("Freelancer");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescriptions: Element[];
  Logos: Element[];
  ResponsibilitiesSpacingContainers: Element[];
  TimelinePositionContainers: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <CompanyPersonallyEmployed />
  );

  const { queryAllByTestId } = utils || {};
  
  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const Logos: Element[] = queryAllByTestId("Logo");
  const ResponsibilitiesSpacingContainers: Element[] = queryAllByTestId("ResponsibilitiesSpacingContainer");
  const TimelinePositionContainers: Element[] = queryAllByTestId("TimelinePositionContainer");

  return {
    ...utils,
    CompanyDescriptions,
    Logos,
    ResponsibilitiesSpacingContainers,
    TimelinePositionContainers
  };
}
 