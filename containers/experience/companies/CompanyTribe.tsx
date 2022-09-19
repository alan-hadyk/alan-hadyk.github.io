import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
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

const responsibilities: ICompanyProps["responsibilities"] = [
  <span data-cy="CreateScalable" key="create-scalable">
    <strong>Create</strong> scalable and sane front-end architecture
  </span>,
  <span data-cy="ApplyAndCertifyFrontEnd" key="apply-and-certify-front">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver features for front-end application based on
    React.js, Next.js, TypeScript, Apollo, GraphQL, Chakra and Tailwind
  </span>,
  <span data-cy="ApplyAndCertifyBackEnd" key="apply-and-certify-back">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver features for back-end application based on NestJS,
    TypeScript, GraphQL and PostgreSQL
  </span>,
  <span data-cy="StreamlineProjectTimelines" key="streamline-project-timelines">
    <strong>Streamline project timelines</strong> to ensure application is being
    developed
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
  </span>
];

const CompanyTribe: React.FC = () => (
  <Company
    dataCy="CompanyTribe"
    date="April 2021 to October 2021"
    iconsWithLabels={iconsWithLabels}
    link="https://tribe.so/"
    name="Tribe"
    responsibilities={responsibilities}
    title="Senior Full-Stack Developer"
  />
);

export { CompanyTribe };
