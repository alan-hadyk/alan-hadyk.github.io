import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";

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
    iconName: "brandAuth0",
    label: "Auth0"
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
