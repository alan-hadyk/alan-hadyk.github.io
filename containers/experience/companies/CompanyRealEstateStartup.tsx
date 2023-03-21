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
  <span key="created-scalable">
    <strong>Created</strong> scalable front-end architecture for MVP version of
    a real estate web app from scratch.
  </span>,
  <span key="applied-and-certified-front">
    <strong>Applied development</strong> and{" "}
    <strong>certified adherence</strong> to best practices to deliver features
    for front-end app based on React.js, Next.js, TypeScript, Apollo, GraphQL,
    Auth0 and Tailwind
  </span>,
  <span key="streamlined-project-timelines">
    <strong>Streamlined project timelines</strong> to ensure application is
    being developed
  </span>,
  <span key="actively-participated">
    <strong>Actively participated</strong> in all stages of product building
  </span>,
  <span key="reusable-components">
    <strong>Transformed and created</strong> reusable components
  </span>,
  <span key="demonstrated-expertise">
    <strong>Demonstrated expertise</strong> in the utilization of GraphQL to
    communicate with backend
  </span>
];

const companyRealEstateStartupProps = {
  date: "December 2021 to March 2022",
  iconsWithLabels,
  name: "Real Estate Startup",
  responsibilities,
  title: "Front-end Architect"
};

const CompanyRealEstateStartup: React.FC = () => (
  <Company {...companyRealEstateStartupProps} />
);

export { CompanyRealEstateStartup, companyRealEstateStartupProps };
