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
  <span data-cy="CreateScalable" key="create-scalable">
    <strong>Create</strong> scalable front-end architecture for MVP version of a
    real estate web app from scratch.
  </span>,
  <span data-cy="ApplyAndCertifyFrontEnd" key="apply-and-certify-front">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver features for front-end app based on React.js,
    Next.js, TypeScript, Apollo, GraphQL, Auth0 and Tailwind
  </span>,
  <span data-cy="StreamlineProjectTimelines" key="streamline-project-timelines">
    <strong>Streamline project timelines</strong> to ensure application is being
    developed
  </span>,
  <span data-cy="TransformAndCreate" key="transform-and-create">
    <strong>Actively participate</strong> in all stages of product building
  </span>,
  <span data-cy="AuthorUnit" key="author-unit">
    <strong>Transform and create</strong> reusable components
  </span>,
  <span data-cy="DemonstrateExpertise" key="demonstrate-expertise">
    <strong>Demonstrate expertise</strong> in the utilization of GraphQL to
    communicate with backend
  </span>
];

const companyStealthRealEstateStartupProps = {
  date: "December 2021 to March 2022",
  iconsWithLabels,
  name: "Real Estate Startup",
  responsibilities,
  title: "Front-end Architect"
};

const CompanyStealthRealEstateStartup: React.FC = () => (
  <Company
    dataCy="CompanyUndisclosed"
    {...companyStealthRealEstateStartupProps}
  />
);

export {
  CompanyStealthRealEstateStartup,
  companyStealthRealEstateStartupProps
};
