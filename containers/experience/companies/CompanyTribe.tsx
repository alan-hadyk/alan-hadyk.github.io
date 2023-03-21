import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: IconStaticName.HTML,
    label: "HTML"
  },
  {
    iconName: IconStaticName.CSS,
    label: "CSS"
  },
  {
    iconName: IconStaticName.JavaScript,
    label: "Javascript"
  },
  {
    iconName: IconStaticName.TypeScript,
    label: "Typescript"
  },
  {
    iconName: IconStaticName.React,
    label: "React"
  },
  {
    iconName: IconStaticName.NextJs,
    label: "Next.js"
  },
  {
    iconName: IconStaticName.Tailwind,
    label: "Tailwind"
  },
  {
    iconName: IconStaticName.Chakra,
    label: "Chakra"
  },
  {
    iconName: IconStaticName.Webpack,
    label: "Webpack"
  },
  {
    iconName: IconStaticName.JEST,
    label: "JEST"
  },
  {
    iconName: IconStaticName.ReactTestingLibrary,
    label: "React Testing Library"
  },
  {
    iconName: IconStaticName.Cypress,
    label: "Cypress"
  },
  {
    iconName: IconStaticName.NodeJs,
    label: "Node.js"
  },
  {
    iconName: IconStaticName.NestJs,
    label: "NestJS"
  },
  {
    iconName: IconStaticName.Apollo,
    label: "Apollo"
  },
  {
    iconName: IconStaticName.GraphQL,
    label: "GraphQL"
  },
  {
    iconName: IconStaticName.Docker,
    label: "Docker"
  },
  {
    iconName: IconStaticName.GitLab,
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
