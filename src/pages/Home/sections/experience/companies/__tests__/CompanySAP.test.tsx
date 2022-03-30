import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanySAP from "pages/Home/sections/experience/companies/CompanySAP";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("pages / Home / sections / experience / companies / CompanySAP", () => {
  describe("Props", () => {
    describe("date", () => {
      test("should render November 2015 to May 2017", () => {
        const { CompanyDescriptions } = setup();

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          expect(
            CompanyDescription.children[1].children[0].children[1].textContent
          ).toEqual("November 2015 to May 2017");
        });
      });
    });

    describe("iconsWithLabels", () => {
      test("should render correct icons with labels", () => {
        const { CompanyDescriptions } = setup();

        let IconsWithLabels: Element;

        CompanyDescriptions.forEach((CompanyDescriptions: Element) => {
          IconsWithLabels =
            CompanyDescriptions.children[2].children[1].children[0];

          expect(
            IconsWithLabels.children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJS.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
            "Javascript"
          );

          expect(
            IconsWithLabels.children[1].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCoffeeScript.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "CoffeeScript"
          );

          expect(
            IconsWithLabels.children[2].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandReact.svg");
          expect(IconsWithLabels.children[2].children[1].textContent).toEqual(
            "React"
          );

          expect(
            IconsWithLabels.children[3].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRedux.svg");
          expect(IconsWithLabels.children[3].children[1].textContent).toEqual(
            "Redux"
          );

          expect(
            IconsWithLabels.children[4].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCSSModules.svg");
          expect(IconsWithLabels.children[4].children[1].textContent).toEqual(
            "CSS Modules"
          );

          expect(
            IconsWithLabels.children[5].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandWebpack.svg");
          expect(IconsWithLabels.children[5].children[1].textContent).toEqual(
            "Webpack"
          );

          expect(
            IconsWithLabels.children[6].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandNode.svg");
          expect(IconsWithLabels.children[6].children[1].textContent).toEqual(
            "Node.js"
          );

          expect(
            IconsWithLabels.children[7].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandDocpad.svg");
          expect(IconsWithLabels.children[7].children[1].textContent).toEqual(
            "DocPad"
          );

          expect(
            IconsWithLabels.children[8].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJEST.svg");
          expect(IconsWithLabels.children[8].children[1].textContent).toEqual(
            "JEST"
          );

          expect(
            IconsWithLabels.children[9].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandAirbnb.svg");
          expect(IconsWithLabels.children[9].children[1].textContent).toEqual(
            "Enzyme"
          );

          expect(
            IconsWithLabels.children[10].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJIRA.svg");
          expect(IconsWithLabels.children[10].children[1].textContent).toEqual(
            "JIRA"
          );

          expect(
            IconsWithLabels.children[11].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandStash.svg");
          expect(IconsWithLabels.children[11].children[1].textContent).toEqual(
            "Stash"
          );

          expect(
            IconsWithLabels.children[12].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandBamboo.svg");
          expect(IconsWithLabels.children[12].children[1].textContent).toEqual(
            "Bamboo"
          );
        });
      });
    });

    describe("responsibilities", () => {
      test("should render correct responsibilities", () => {
        const { CompanyDescriptions } = setup();
        let UnorderedList: Element;

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          UnorderedList =
            CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.textContent).toEqual(
            "Aligned objectives and bridged communication for UI development and monitoring of various projects and servicesPromoted synchronized communication to produce Agile methodology across projectsSought as speaker to engage and deliver university lecturesNavigated rapidly evolving digital technology landscapes to drive team comprehension of JavaScript frameworksEnabled our product team to tap into valuable data sources and build incredible features for our customers"
          );
        });
      });
    });

    describe("title", () => {
      test("should render Front end developer", () => {
        const { CompanyDescriptions } = setup();
        let Title: string;

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          Title = CompanyDescription.children[0].textContent;

          expect(Title).toEqual("Front end developer");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescriptions: Element[];
  Logos: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<CompanySAP />);

  const { queryAllByTestId } = utils || {};

  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const Logos: Element[] = queryAllByTestId("Logo");

  return {
    ...utils,
    CompanyDescriptions,
    Logos
  };
}
