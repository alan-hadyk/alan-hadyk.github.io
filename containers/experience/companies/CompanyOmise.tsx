import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandRuby",
    label: "Ruby"
  },
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandRails",
    label: "Ruby on Rails"
  },
  {
    iconName: "brandSinatra",
    label: "Sinatra"
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

const responsibilities: ICompanyProps["responsibilities"] = [
  <span data-cy="CreateScalable" key="create-scalable">
    <strong>Create</strong> scalable and sane front-end architecture
  </span>,
  <span data-cy="OrchestrateAndDirect" key="orchestrate-and-direct">
    <strong>Orchestrate</strong> and <strong>direct</strong> collaborative team
    operational objectives for front-end layer of an application designed to
    manage payment systems
  </span>,
  <span data-cy="ApplyAndCertify" key="apply-and-certify">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver application based on React.js
  </span>,
  <span data-cy="StreamlineProjectTimelines" key="streamline-project-timelines">
    <strong>Streamline project timelines</strong> to ensure application is being
    developed
  </span>,
  <span data-cy="DevelopApiGateway" key="develop-api-gateway">
    <strong>Develop API gateway</strong> in the form of Express / Node.js
    server, along with Apollo / GraphQL stack
  </span>,
  <span data-cy="TransformAndCreate" key="transform-and-create">
    <strong>Transform and create</strong> reusable components
  </span>,
  <span data-cy="AuthorUnit" key="author-unit">
    <strong>Author</strong> unit, integration and acceptance tests
  </span>,
  <span data-cy="DemonstrateExpertise" key="demonstrate-expertise">
    <strong>Demonstrate expertise</strong> in the utilization of GraphQL to
    communicate with backend
  </span>,
  <span data-cy="MentorJunior" key="mentor-junior">
    <strong>Mentor</strong> junior front-end developers
  </span>
];

const CompanyOmise: React.FC = () => (
  <Company
    dataCy="CompanyOmise"
    date="August 2018 to March 2021"
    iconsWithLabels={iconsWithLabels}
    link="https://www.omise.co/"
    name="Omise"
    responsibilities={responsibilities}
    title="Senior Full-Stack Developer"
  />
);

export { CompanyOmise };
