import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyOmise from "<pages>/Home/sections/experience/companies/CompanyOmise";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / experience / companies / CompanyOmise", () => {
  test("should render correct date - August 2018 to present", () => {
    const {
      CompanyDescription
    } = setup();

    expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("August 2018 to present");
  });

  test("should render correct icons with labels", () => {
    const {
      CompanyDescription
    } = setup();
    const IconsWithLabels: Element = CompanyDescription.children[2].children[1].children[0];

    expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
    expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Javascript");

    expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Brand-React.svg");
    expect(IconsWithLabels.children[1].children[1].textContent).toEqual("React");

    expect(IconsWithLabels.children[2].children[0].children[0].textContent).toEqual("Brand-StyledComponents.svg");
    expect(IconsWithLabels.children[2].children[1].textContent).toEqual("styled components");

    expect(IconsWithLabels.children[3].children[0].children[0].textContent).toEqual("Brand-Webpack.svg");
    expect(IconsWithLabels.children[3].children[1].textContent).toEqual("Webpack");

    expect(IconsWithLabels.children[4].children[0].children[0].textContent).toEqual("Brand-JEST.svg");
    expect(IconsWithLabels.children[4].children[1].textContent).toEqual("JEST");

    expect(IconsWithLabels.children[5].children[0].children[0].textContent).toEqual("Brand-Airbnb.svg");
    expect(IconsWithLabels.children[5].children[1].textContent).toEqual("Enzyme");

    expect(IconsWithLabels.children[6].children[0].children[0].textContent).toEqual("Brand-TestingLibrary.svg");
    expect(IconsWithLabels.children[6].children[1].textContent).toEqual("React Testing Library");

    expect(IconsWithLabels.children[7].children[0].children[0].textContent).toEqual("Brand-Cypress.svg");
    expect(IconsWithLabels.children[7].children[1].textContent).toEqual("Cypress");

    expect(IconsWithLabels.children[8].children[0].children[0].textContent).toEqual("Brand-Node.svg");
    expect(IconsWithLabels.children[8].children[1].textContent).toEqual("Node.js");

    expect(IconsWithLabels.children[9].children[0].children[0].textContent).toEqual("Brand-Express.svg");
    expect(IconsWithLabels.children[9].children[1].textContent).toEqual("Express");

    expect(IconsWithLabels.children[10].children[0].children[0].textContent).toEqual("Brand-Apollo.svg");
    expect(IconsWithLabels.children[10].children[1].textContent).toEqual("Apollo");

    expect(IconsWithLabels.children[11].children[0].children[0].textContent).toEqual("Brand-GraphQL.svg");
    expect(IconsWithLabels.children[11].children[1].textContent).toEqual("GraphQL");

    expect(IconsWithLabels.children[12].children[0].children[0].textContent).toEqual("Brand-Docker.svg");
    expect(IconsWithLabels.children[12].children[1].textContent).toEqual("Docker");

    expect(IconsWithLabels.children[13].children[0].children[0].textContent).toEqual("Brand-Jenkins.svg");
    expect(IconsWithLabels.children[13].children[1].textContent).toEqual("Jenkins");

    expect(IconsWithLabels.children[14].children[0].children[0].textContent).toEqual("Brand-Buildkite.svg");
    expect(IconsWithLabels.children[14].children[1].textContent).toEqual("Buildkite");

    expect(IconsWithLabels.children[15].children[0].children[0].textContent).toEqual("Brand-Basecamp.svg");
    expect(IconsWithLabels.children[15].children[1].textContent).toEqual("Basecamp");

    expect(IconsWithLabels.children[16].children[0].children[0].textContent).toEqual("Brand-Gallery.svg");
    expect(IconsWithLabels.children[16].children[1].textContent).toEqual("Gallery");
  });

  test("should render correct logo - companyOmise", () => {
    const {
      Logo
    } = setup();

    expect(Logo.textContent).toEqual("Company-Omise.svg");
  });

  test("should render correct responsibilities", () => {
    const {
      CompanyDescription
    } = setup();
    const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

    expect(UnorderedList.textContent).toEqual("Create scalable and sane front-end architectureOrchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systemsApply development and certify adherence to best practices to deliver application based on React.jsStreamline project timelines to ensure application is being developedDevelop API gateway in the form of Express / Node.js server, along with Apollo / GraphQL stackTransform and create reusable componentsAuthor unit, integration and acceptance testsDemonstrate expertise in the utilization of GraphQL to communicate with backendMentor junior front-end developers");
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
    <CompanyOmise />
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
 