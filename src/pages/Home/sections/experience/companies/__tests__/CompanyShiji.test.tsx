import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyShiji from "pages/Home/sections/experience/companies/CompanyShiji";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("pages / Home / sections / experience / companies / CompanyShiji", () => {
  describe("Props", () => {
    describe("date", () => {
      test("should render June 2017 to July 2018", () => {
        const { CompanyDescriptions } = setup();

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          expect(
            CompanyDescription.children[1].children[0].children[1].textContent
          ).toEqual("June 2017 to July 2018");
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
            IconsWithLabels.children[0].children[0].children[0].textContent
          ).toEqual("Brand-JS.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
            "Javascript"
          );

          expect(
            IconsWithLabels.children[1].children[0].children[0].textContent
          ).toEqual("Brand-TS.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "Typescript"
          );

          expect(
            IconsWithLabels.children[2].children[0].children[0].textContent
          ).toEqual("Brand-React.svg");
          expect(IconsWithLabels.children[2].children[1].textContent).toEqual(
            "React"
          );

          expect(
            IconsWithLabels.children[3].children[0].children[0].textContent
          ).toEqual("Brand-Redux.svg");
          expect(IconsWithLabels.children[3].children[1].textContent).toEqual(
            "Redux"
          );

          expect(
            IconsWithLabels.children[4].children[0].children[0].textContent
          ).toEqual("Brand-Ember.svg");
          expect(IconsWithLabels.children[4].children[1].textContent).toEqual(
            "Ember"
          );

          expect(
            IconsWithLabels.children[5].children[0].children[0].textContent
          ).toEqual("Brand-Sass.svg");
          expect(IconsWithLabels.children[5].children[1].textContent).toEqual(
            "Sass"
          );

          expect(
            IconsWithLabels.children[6].children[0].children[0].textContent
          ).toEqual("Brand-Docker.svg");
          expect(IconsWithLabels.children[6].children[1].textContent).toEqual(
            "Docker"
          );

          expect(
            IconsWithLabels.children[7].children[0].children[0].textContent
          ).toEqual("Brand-Qunit.svg");
          expect(IconsWithLabels.children[7].children[1].textContent).toEqual(
            "QUnit"
          );

          expect(
            IconsWithLabels.children[8].children[0].children[0].textContent
          ).toEqual("Brand-Webpack.svg");
          expect(IconsWithLabels.children[8].children[1].textContent).toEqual(
            "Webpack"
          );

          expect(
            IconsWithLabels.children[9].children[0].children[0].textContent
          ).toEqual("Brand-Node.svg");
          expect(IconsWithLabels.children[9].children[1].textContent).toEqual(
            "Node.js"
          );

          expect(
            IconsWithLabels.children[10].children[0].children[0].textContent
          ).toEqual("Brand-REST.svg");
          expect(IconsWithLabels.children[10].children[1].textContent).toEqual(
            "REST"
          );

          expect(
            IconsWithLabels.children[11].children[0].children[0].textContent
          ).toEqual("Brand-Zeplin.svg");
          expect(IconsWithLabels.children[11].children[1].textContent).toEqual(
            "Zeplin"
          );

          expect(
            IconsWithLabels.children[12].children[0].children[0].textContent
          ).toEqual("Brand-JIRA.svg");
          expect(IconsWithLabels.children[12].children[1].textContent).toEqual(
            "JIRA"
          );

          expect(
            IconsWithLabels.children[13].children[0].children[0].textContent
          ).toEqual("Brand-Jenkins.svg");
          expect(IconsWithLabels.children[13].children[1].textContent).toEqual(
            "Jenkins"
          );

          expect(
            IconsWithLabels.children[14].children[0].children[0].textContent
          ).toEqual("Brand-Gitlab.svg");
          expect(IconsWithLabels.children[14].children[1].textContent).toEqual(
            "GitLab"
          );
        });
      });
    });

    describe("logo", () => {
      test("should render Company-Shiji.svg", () => {
        const { Logos } = setup();

        Logos.forEach((Logo: Element) => {
          expect(Logo.textContent).toEqual("Company-Shiji.svg");
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
            "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage hotelsApply development and certify adherence to best practices to deliver PoC based on React.jsStreamline project timelines to ensure application is being developed in Ember.js with TypeScriptTransform and create reusable components and manage adapters, models and serializersAuthor unit, integration and acceptance testsDemonstrate expertise in the utilization of REST to communicate with backendMentor junior front-end developers"
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
  const utils: RenderResult = renderWithTheme(<CompanyShiji />);

  const { queryAllByTestId } = utils || {};

  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const Logos: Element[] = queryAllByTestId("Logo");

  return {
    ...utils,
    CompanyDescriptions,
    Logos
  };
}
