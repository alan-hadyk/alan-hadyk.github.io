import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanySAP from "<pages>/Home/sections/experience/companies/CompanySAP";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("pages / Home / sections / experience / companies / CompanySAP", () => {
  test("should render correct date - November 2015 to May 2017", () => {
    const {
      CompanyDescription
    } = setup();

    expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("November 2015 to May 2017");
  });

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
        iconName: "brandCoffeeScript",
        label: "CoffeeScript"
      },
      {
        iconName: "brandReact",
        label: "React"
      },
      {
        iconName: "brandRedux",
        label: "Redux"
      },
      {
        iconName: "brandCSSModules",
        label: "CSS Modules"
      },
      {
        iconName: "brandWebpack",
        label: "Webpack"
      },
      {
        iconName: "brandNode",
        label: "Node.js"
      },
      {
        iconName: "brandDocpad",
        label: "DocPad"
      },
      {
        iconName: "brandJEST",
        label: "JEST"
      },
      {
        iconName: "brandAirbnb",
        label: "Enzyme"
      },
      {
        iconName: "brandJIRA",
        label: "JIRA"
      },
      {
        iconName: "brandStash",
        label: "Stash"
      },
      {
        iconName: "brandBamboo",
        label: "Bamboo"
      }
    ];

    iconsWithLabels.forEach(({ label }, index: number) => {
      expect(IconsWithLabels.children[index].children[1].textContent).toEqual(label);  
    });

    expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
    expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Brand-CoffeeScript.svg");
    expect(IconsWithLabels.children[2].children[0].children[0].textContent).toEqual("Brand-React.svg");
    expect(IconsWithLabels.children[3].children[0].children[0].textContent).toEqual("Brand-Redux.svg");
    expect(IconsWithLabels.children[4].children[0].children[0].textContent).toEqual("Brand-CSSModules.svg");
    expect(IconsWithLabels.children[5].children[0].children[0].textContent).toEqual("Brand-Webpack.svg");
    expect(IconsWithLabels.children[6].children[0].children[0].textContent).toEqual("Brand-Node.svg");
    expect(IconsWithLabels.children[7].children[0].children[0].textContent).toEqual("Brand-Docpad.svg");
    expect(IconsWithLabels.children[8].children[0].children[0].textContent).toEqual("Brand-JEST.svg");
    expect(IconsWithLabels.children[9].children[0].children[0].textContent).toEqual("Brand-Airbnb.svg");
    expect(IconsWithLabels.children[10].children[0].children[0].textContent).toEqual("Brand-JIRA.svg");
    expect(IconsWithLabels.children[11].children[0].children[0].textContent).toEqual("Brand-Stash.svg");
    expect(IconsWithLabels.children[12].children[0].children[0].textContent).toEqual("Brand-Bamboo.svg");
  });

  test("should render correct logo - companySAP", () => {
    const {
      Logo
    } = setup();

    expect(Logo.textContent).toEqual("Company-SAP.svg");
  });

  test("should render correct responsibilities", () => {
    const {
      CompanyDescription
    } = setup();
    const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

    expect(UnorderedList.textContent).toEqual("Aligned objectives and bridged communication for UI development and monitoring of various projects and servicesPromoted synchronized communication to produce Agile methodology across projectsSought as speaker to engage and deliver university lecturesNavigated rapidly evolving digital technology landscapes to drive team comprehension of JavaScript frameworksEnabled our product team to tap into valuable data sources and build incredible features for our customers");
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
    <CompanySAP />
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
 