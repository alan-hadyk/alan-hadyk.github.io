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
      Designed a scalable front-end architecture, resulting in a{" "}
      <strong>20% increase in application stability and maintainability</strong>
      .
    </span>,
    <span key="delivered">
      Delivered features for both front-end and back-end applications,{" "}
      <strong>reducing development time by 20%</strong> and ensuring adherence
      to best practices.
    </span>,
    <span key="Expedited">
      Expedited project timelines, ensuring timely delivery of application
      features and <strong>reducing time-to-market by 10%</strong>.
    </span>,
    <span key="Created">
      Created reusable components,{" "}
      <strong>decreasing code redundancy by 25%</strong> and improving overall
      code quality.
    </span>,
    <span key="Authored">
      Authored unit, integration, and acceptance tests, enhancing code
      reliability and <strong>reducing the number of bugs by 30%</strong>.
    </span>,
    <span key="Leveraged">
      Leveraged GraphQL for seamless backend communication,{" "}
      <strong>improving data handling efficiency by 20%</strong> and{" "}
      <strong>system performance by 15%</strong>.
    </span>
  ],
  title: "Senior Full-Stack Developer"
};

const CompanyTribe: React.FC = () => (
  <Company link="https://tribe.so/" {...companyTribeProps} />
);

export { CompanyTribe };
