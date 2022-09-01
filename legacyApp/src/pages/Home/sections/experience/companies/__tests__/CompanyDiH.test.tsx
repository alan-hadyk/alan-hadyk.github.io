import { RenderResult } from "@testing-library/react";

import CompanyDiH from "pages/Home/sections/experience/companies/CompanyDiH";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isIE11", () => jest.fn());
jest.mock("helpers/browser/isSafari", () => jest.fn());

describe("pages / Home / sections / experience / companies / CompanyDiH", () => {
  describe("Props", () => {
    describe("date", () => {
      test("should render October 2010 to October 2015", () => {
        const { CompanyDescriptions } = setup();

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          expect(
            CompanyDescription.children[1].children[0].children[1].textContent
          ).toEqual("October 2010 to October 2015");
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
          ).toEqual("/images/svg/brandSass.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "Sass"
          );

          expect(
            IconsWithLabels.children[2].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandLESS.svg");
          expect(IconsWithLabels.children[2].children[1].textContent).toEqual(
            "LESS"
          );

          expect(
            IconsWithLabels.children[3].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJQuery.svg");
          expect(IconsWithLabels.children[3].children[1].textContent).toEqual(
            "jQuery"
          );

          expect(
            IconsWithLabels.children[4].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandPrestaShop.svg");
          expect(IconsWithLabels.children[4].children[1].textContent).toEqual(
            "PrestaShop"
          );

          expect(
            IconsWithLabels.children[5].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRedmine.svg");
          expect(IconsWithLabels.children[5].children[1].textContent).toEqual(
            "Redmine"
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
            "Optimized and systematized UI development (and sometimes design) of various e-commerce projectsBolstered continued professional development with concepts and technologies, such as: CSS preprocessors, UI pattern libraries and JavaScript task runnersPresented innovative approaches in the form of brown bags to all engineers to help shape our technical market presenceFostered cross-functional communication with information technology, end users, and other stakeholders to translate needs into system requirements, solid solutions, and reliable resultsInformed decisions to incorporate the use of defect and enhancement tracking software and processes"
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
  const utils: RenderResult = renderWithTheme(<CompanyDiH />);

  const { queryAllByTestId } = utils || {};

  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const Logos: Element[] = queryAllByTestId("Logo");

  return {
    ...utils,
    CompanyDescriptions,
    Logos
  };
}
