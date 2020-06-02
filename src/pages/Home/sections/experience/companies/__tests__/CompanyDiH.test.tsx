import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyDiH from "<pages>/Home/sections/experience/companies/CompanyDiH";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / experience / companies / CompanyDiH", () => {
  test("should render correct date - October 2010 to October 2015", () => {
    const {
      CompanyDescription
    } = setup();

    expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("October 2010 to October 2015");
  });

  test("should render correct icons with labels", () => {
    const {
      CompanyDescription
    } = setup();
    const IconsWithLabels: Element = CompanyDescription.children[2].children[1].children[0];

    expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
    expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Javascript");

    expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Brand-Sass.svg");
    expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Sass");

    expect(IconsWithLabels.children[2].children[0].children[0].textContent).toEqual("Brand-LESS.svg");
    expect(IconsWithLabels.children[2].children[1].textContent).toEqual("LESS");

    expect(IconsWithLabels.children[3].children[0].children[0].textContent).toEqual("Brand-jQuery.svg");
    expect(IconsWithLabels.children[3].children[1].textContent).toEqual("jQuery");

    expect(IconsWithLabels.children[4].children[0].children[0].textContent).toEqual("Brand-PrestaShop.svg");
    expect(IconsWithLabels.children[4].children[1].textContent).toEqual("PrestaShop");

    expect(IconsWithLabels.children[5].children[0].children[0].textContent).toEqual("Brand-Redmine.svg");
    expect(IconsWithLabels.children[5].children[1].textContent).toEqual("Redmine");
  });

  test("should render correct logo - companyDIH", () => {
    const {
      Logo
    } = setup();

    expect(Logo.textContent).toEqual("Company-DiH.svg");
  });

  test("should render correct responsibilities", () => {
    const {
      CompanyDescription
    } = setup();
    const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

    expect(UnorderedList.textContent).toEqual("Optimized and systematized UI development (and sometimes design) of various e-commerce projectsBolstered continued professional development with concepts and technologies, such as: CSS preprocessors, UI pattern libraries and JavaScript task runnersPresented innovative approaches in the form of brown bags to all engineers to help shape our technical market presenceFostered cross-functional communication with information technology, end users, and other stakeholders to translate needs into system requirements, solid solutions, and reliable resultsInformed decisions to incorporate the use of defect and enhancement tracking software and processes");
  });

  test("should render correct title - Front end developer", () => {
    const {
      CompanyDescription
    } = setup();
    const Title: string = CompanyDescription.children[0].textContent;

    expect(Title).toEqual("Front end developer");
  });
});

interface Setup extends RenderResult {
  CompanyDescription: Element;
  Logo: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <CompanyDiH />
  );

  const { queryAllByTestId } = utils || {};
  
  const CompanyDescription: Element = queryAllByTestId("CompanyDescription")[0];
  const Logo: Element = queryAllByTestId("Logo")[0];

  return {
    ...utils,
    CompanyDescription,
    Logo
  };
}
 