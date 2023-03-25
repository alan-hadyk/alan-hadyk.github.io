import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";

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
    iconName: IconStaticName.Auth0,
    label: "Auth0"
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
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span key="Developed">
    Developed front-end architecture of a real estate web app, leading to a{" "}
    <strong>35% increase in user acquisition</strong> and{" "}
    <strong>20% improvement in customer retention</strong>.
  </span>,
  <span key="Ensured">
    Ensured adherence to coding standards and best practices, resulting in a{" "}
    <strong>50% reduction in code-related issues</strong> during QA testing.
  </span>,
  <span key="Optimized">
    Optimized project timelines,{" "}
    <strong>accelerating application development by 30%</strong> and enabling
    timely delivery of key features.
  </span>,
  <span key="Introduced">
    Introduced GraphQL as a communicative means with the backend system,
    <strong> boosting functional asset delivery by 40%</strong> and improving
    overall system performance.
  </span>
];

const companyRealEstateStartupProps = {
  date: "December 2021 to March 2022",
  iconsWithLabels,
  name: "Real Estate Startup",
  responsibilities,
  title: "Front-End Architect"
};

const CompanyRealEstateStartup: React.FC = () => (
  <Company {...companyRealEstateStartupProps} />
);

export { CompanyRealEstateStartup };
