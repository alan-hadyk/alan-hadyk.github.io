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

const companyTribeProps: ICompanyProps = {
  date: "April 2021 to October 2021",
  iconsWithLabels,
  name: "Tribe",
  responsibilities: [
    <span key="created-scalable">
      <strong>Created</strong> scalable and sane front-end architecture
    </span>,
    <span key="applied-and-certified-front">
      <strong>Applied development</strong> and{" "}
      <strong>certified adherence</strong> to best practices to deliver features
      for front-end application based on React.js, Next.js, TypeScript, Apollo,
      GraphQL, Chakra and Tailwind
    </span>,
    <span key="applied-and-certified-back">
      <strong>Applied development</strong> and{" "}
      <strong>certified adherence</strong> to best practices to deliver features
      for back-end application based on NestJS, TypeScript, GraphQL and
      PostgreSQL
    </span>,
    <span key="streamlined-project-timelines">
      <strong>Streamlined project timelines</strong> to ensure application is
      being developed
    </span>,
    <span key="transformed-and-created">
      <strong>Transformed and created</strong> reusable components
    </span>,
    <span key="authored-unit">
      <strong>Authored</strong> unit, integration and acceptance tests
    </span>,
    <span key="demonstrated-expertise">
      <strong>Demonstrated expertise</strong> in the utilization of GraphQL to
      communicate with backend
    </span>
  ],
  title: "Senior Full-Stack Developer"
};

const CompanyTribe: React.FC = () => (
  <Company link="https://tribe.so/" {...companyTribeProps} />
);

export { CompanyTribe, companyTribeProps };
