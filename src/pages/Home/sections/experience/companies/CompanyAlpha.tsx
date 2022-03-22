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
    iconName: "brandNext",
    label: "Next.js"
  },
  {
    iconName: "brandTailwind",
    label: "Tailwind"
  },
  {
    iconName: "brandAuth0",
    label: "Auth0"
  },
  {
    iconName: "brandWebpack",
    label: "Webpack"
  },
  {
    iconName: "brandJEST",
    label: "JEST"
  },
  {
    iconName: "brandTestingLibrary",
    label: "React Testing Library"
  },
  {
    iconName: "brandCypress",
    label: "Cypress"
  },
  {
    iconName: "brandNode",
    label: "Node.js"
  },
  {
    iconName: "brandApollo",
    label: "Apollo"
  },
  {
    iconName: "brandGraphQL",
    label: "GraphQL"
  },
  {
    iconName: "brandDocker",
    label: "Docker"
  }
];

const responsibilities: CompanyProps["responsibilities"] = [
  <span data-testid="CreateScalable" key="create-scalable">
    <strong>Create</strong> scalable and sane front-end architecture from
    scratch
  </span>,
  <span data-testid="ApplyAndCertifyFrontEnd" key="apply-and-certify-front">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver features for front-end app based on React.js,
    Next.js, TypeScript, Apollo, GraphQL, Auth0 and Tailwind
  </span>,
  <span
    data-testid="StreamlineProjectTimelines"
    key="streamline-project-timelines"
  >
    <strong>Streamline project timelines</strong> to ensure application is being
    developed
  </span>,
  <span data-testid="TransformAndCreate" key="transform-and-create">
    <strong>Actively participate</strong> in all stages of product building
  </span>,
  <span data-testid="AuthorUnit" key="author-unit">
    <strong>Transform and create</strong> reusable components
  </span>,
  <span data-testid="DemonstrateExpertise" key="demonstrate-expertise">
    <strong>Demonstrate expertise</strong> in the utilization of GraphQL to
    communicate with backend
  </span>
];

const CompanyAlpha = (): JSX.Element => (
  <Company
    dataCy="CompanyAlpha"
    dataTestId="CompanyAlpha"
    date="December 2021 to March 2022"
    iconsWithLabels={iconsWithLabels}
    logo="Alpha"
    responsibilities={responsibilities}
    title="Front-end Architect"
  />
);

export default CompanyAlpha;
