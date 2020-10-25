import React from "react";

import Company from "UI/organisms/Company";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandStyledComponents",
    label: "styled components"
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
    iconName: "brandAirbnb",
    label: "Enzyme"
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
    iconName: "brandExpress",
    label: "Express"
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
    iconName: "brandJenkins",
    label: "Jenkins"
  },
  {
    iconName: "brandBuildkite",
    label: "Buildkite"
  },
  {
    iconName: "brandBasecamp",
    label: "Basecamp"
  },
  {
    iconName: "brandGallery",
    label: "Gallery"
  }
];

const responsibilities: CompanyProps["responsibilities"] = [
  <span data-testid="CreateScalable" key="create-scalable">
    <strong>Create</strong> scalable and sane front-end architecture
  </span>,
  <span data-testid="OrchestrateAndDirect" key="orchestrate-and-direct">
    <strong>Orchestrate</strong> and <strong>direct</strong> collaborative team
    operational objectives for front-end layer of an application designed to
    manage payment systems
  </span>,
  <span data-testid="ApplyAndCertify" key="apply-and-certify">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver application based on React.js
  </span>,
  <span
    data-testid="StreamlineProjectTimelines"
    key="streamline-project-timelines"
  >
    <strong>Streamline project timelines</strong> to ensure application is being
    developed
  </span>,
  <span data-testid="DevelopApiGateway" key="develop-api-gateway">
    <strong>Develop API gateway</strong> in the form of Express / Node.js
    server, along with Apollo / GraphQL stack
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
  </span>,
  <span data-testid="MentorJunior" key="mentor-junior">
    <strong>Mentor</strong> junior front-end developers
  </span>
];

const CompanyOmise = (): JSX.Element => (
  <Company
    dataCy="CompanyOmise"
    dataTestId="CompanyOmise"
    date="August 2018 to present"
    iconsWithLabels={iconsWithLabels}
    logo="companyOmise"
    responsibilities={responsibilities}
    title="Software engineer"
  />
);

export default CompanyOmise;
