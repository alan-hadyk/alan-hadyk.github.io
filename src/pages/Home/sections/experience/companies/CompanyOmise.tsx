import React from "react";

import Company from "<organisms>/Company";

import { CompanyProps } from "<organisms>/__typings__/Company.d.ts";

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
  <span key="create-scalable"><strong>Create</strong> scalable and sane front-end architecture</span>, 
  <span key="orchestrate-and-direct"><strong>Orchestrate</strong> and <strong>direct</strong> collaborative team operational objectives for front-end layer of an application designed to manage payment systems</span>, 
  <span key="apply-and-certify"><strong>Apply development</strong> and <strong>certify adherence</strong> to best practices to deliver application based on React.js</span>, 
  <span key="streamline-project-timelines"><strong>Streamline project timelines</strong> to ensure application is being developed</span>, 
  <span key="develop-api-gateway"><strong>Develop API gateway</strong> in the form of Express / Node.js server, along with Apollo / GraphQL stack</span>, 
  <span key="transform-and-create"><strong>Transform and create</strong> reusable components</span>, 
  <span key="author-unit"><strong>Author</strong> unit, integration and acceptance tests</span>, 
  <span key="demonstrate-expertise"><strong>Demonstrate expertise</strong> in the utilization of GraphQL to communicate with backend</span>, 
  <span key="mentor-junior"><strong>Mentor</strong> junior front-end developers</span>
];

const CompanyOmise = (): JSX.Element => (
  <Company
    dataTestId="CompanyOmise"
    date="August 2018 to present"
    iconsWithLabels={iconsWithLabels}
    logo="companyOmise"
    responsibilities={responsibilities}
    title="Front end developer"
  />
);

export default CompanyOmise;
