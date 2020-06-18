import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyShiji from "<pages>/Home/sections/experience/companies/CompanyShiji";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("pages / Home / sections / experience / companies / CompanyShiji", () => {
  test("should render correct date - June 2017 to July 2018", () => {
    const {
      CompanyDescription
    } = setup();

    expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("June 2017 to July 2018");
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
        iconName: "brandTS",
        label: "Typescript"
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
        iconName: "brandEmber",
        label: "Ember"
      },
      {
        iconName: "brandSass",
        label: "Sass"
      },
      {
        iconName: "brandDocker",
        label: "Docker"
      },
      {
        iconName: "brandQunit",
        label: "QUnit"
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
        iconName: "brandREST",
        label: "REST"
      },
      {
        iconName: "brandZeplin",
        label: "Zeplin"
      },
      {
        iconName: "brandJIRA",
        label: "JIRA"
      },
      {
        iconName: "brandJenkins",
        label: "Jenkins"
      },
      {
        iconName: "brandGitlab",
        label: "GitLab"
      }
    ];

    iconsWithLabels.forEach(({ label }, index: number) => {
      expect(IconsWithLabels.children[index].children[1].textContent).toEqual(label);  
    });

    expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
    expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Brand-TS.svg");
    expect(IconsWithLabels.children[2].children[0].children[0].textContent).toEqual("Brand-React.svg");
    expect(IconsWithLabels.children[3].children[0].children[0].textContent).toEqual("Brand-Redux.svg");
    expect(IconsWithLabels.children[4].children[0].children[0].textContent).toEqual("Brand-Ember.svg");
    expect(IconsWithLabels.children[5].children[0].children[0].textContent).toEqual("Brand-Sass.svg");
    expect(IconsWithLabels.children[6].children[0].children[0].textContent).toEqual("Brand-Docker.svg");
    expect(IconsWithLabels.children[7].children[0].children[0].textContent).toEqual("Brand-Qunit.svg");
    expect(IconsWithLabels.children[8].children[0].children[0].textContent).toEqual("Brand-Webpack.svg");
    expect(IconsWithLabels.children[9].children[0].children[0].textContent).toEqual("Brand-Node.svg");
    expect(IconsWithLabels.children[10].children[0].children[0].textContent).toEqual("Brand-REST.svg");
    expect(IconsWithLabels.children[11].children[0].children[0].textContent).toEqual("Brand-Zeplin.svg");
    expect(IconsWithLabels.children[12].children[0].children[0].textContent).toEqual("Brand-JIRA.svg");
    expect(IconsWithLabels.children[13].children[0].children[0].textContent).toEqual("Brand-Jenkins.svg");
    expect(IconsWithLabels.children[14].children[0].children[0].textContent).toEqual("Brand-Gitlab.svg");
  });

  test("should render correct logo - companyShiji", () => {
    const {
      Logo
    } = setup();

    expect(Logo.textContent).toEqual("Company-Shiji.svg");
  });

  test("should render correct responsibilities", () => {
    const {
      CompanyDescription
    } = setup();
    const UnorderedList: Element = CompanyDescription.children[3].children[1].children[0];

    expect(UnorderedList.textContent).toEqual("Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage hotelsApply development and certify adherence to best practices to deliver PoC based on React.jsStreamline project timelines to ensure application is being developed in Ember.js with TypeScriptTransform and create reusable components and manage adapters, models and serializersAuthor unit, integration and acceptance testsDemonstrate expertise in the utilization of REST to communicate with backendMentor junior front-end developers");
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
    <CompanyShiji />
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
 