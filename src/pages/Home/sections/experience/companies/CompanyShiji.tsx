import React from "react";

import Company from "UI/organisms/Company";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
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

const responsibilities: CompanyProps["responsibilities"] = [
  <span data-testid="OrchestrateAndDirect" key="orchestrate-and-direct-hotels">
    <strong>Orchestrate</strong> and <strong>direct</strong> collaborative team
    operational objectives for front-end layer of an application designed to
    manage hotels
  </span>,
  <span data-testid="ApplyAndCertify" key="apply-and-certify">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver PoC based on React.js
  </span>,
  <span
    data-testid="StreamlineProjectTimelines"
    key="streamline-project-timelines-ember"
  >
    <strong>Streamline project timelines</strong> to ensure application is being
    developed in Ember.js with TypeScript
  </span>,
  <span
    data-testid="TransformAndCreate"
    key="transform-and-create-models-serializers"
  >
    <strong>Transform and create</strong> reusable components and manage
    adapters, models and serializers
  </span>,
  <span data-testid="AuthorUnit" key="author-unit-integration">
    <strong>Author</strong> unit, integration and acceptance tests
  </span>,
  <span data-testid="DemonstrateExpertise" key="demonstrate-expertise-rest">
    <strong>Demonstrate expertise</strong> in the utilization of REST to
    communicate with backend
  </span>,
  <span data-testid="MentorJunior" key="mentor-junior-developers">
    <strong>Mentor</strong> junior front-end developers
  </span>
];

const CompanyShiji = (): JSX.Element => (
  <Company
    dataCy="CompanyShiji"
    dataTestId="CompanyShiji"
    date="June 2017 to July 2018"
    iconsWithLabels={iconsWithLabels}
    logo="Shiji"
    responsibilities={responsibilities}
    title="Front end developer"
  />
);

export default CompanyShiji;
