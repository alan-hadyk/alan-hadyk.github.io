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
    iconName: "brandChakra",
    label: "Chakra"
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
    iconName: "brandNest",
    label: "NestJS"
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
  },
  {
    iconName: "brandGitlab",
    label: "GitLab"
  }
];

const responsibilities: CompanyProps["responsibilities"] = [
  <span data-testid="CreateScalable" key="create-scalable">
    <strong>Create</strong> scalable and sane front-end architecture
  </span>,
  <span data-testid="ApplyAndCertifyFrontEnd" key="apply-and-certify-front">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver features for front-end application based on
    React.js, Next.js, TypeScript, Apollo, GraphQL, Chakra and Tailwind
  </span>,
  <span data-testid="ApplyAndCertifyBackEnd" key="apply-and-certify-back">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver features for back-end application based on NestJS,
    TypeScript, GraphQL and PostgreSQL
  </span>,
  <span
    data-testid="StreamlineProjectTimelines"
    key="streamline-project-timelines"
  >
    <strong>Streamline project timelines</strong> to ensure application is being
    developed
  </span>,
  <span data-testid="TransformAndCreate" key="transform-and-create">
    <strong>Transform and create</strong> reusable components
  </span>,
  <span data-testid="AuthorUnit" key="author-unit">
    <strong>Author</strong> unit, integration and acceptance tests
  </span>,
  <span data-testid="DemonstrateExpertise" key="demonstrate-expertise">
    <strong>Demonstrate expertise</strong> in the utilization of GraphQL to
    communicate with backend
  </span>
];

const CompanyTribe = (): JSX.Element => (
  <Company
    dataCy="CompanyTribe"
    dataTestId="CompanyTribe"
    date="April 2021 to October 2021"
    iconsWithLabels={iconsWithLabels}
    name="Tribe"
    responsibilities={responsibilities}
    title="Full-Stack Developer"
  />
);

export default CompanyTribe;
