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
    iconName: "brandTailwind",
    label: "Tailwind"
  },
  {
    iconName: "brandGraphQL",
    label: "GraphQL"
  },
  {
    iconName: "brandApollo",
    label: "Apollo"
  },
  {
    iconName: "brandPrisma",
    label: "Prisma"
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span
    data-cy="DevelopDoctorAndPatientEngagement"
    key="develop-doctor-and-patient-engagement"
  >
    <strong>Develop</strong> doctor&apos;s and patient&apos;s journey, called
    engagement, which is an essential part of the application.
  </span>,
  <span data-cy="ImprovePerformance" key="improve-performance">
    <strong>Improve performance</strong> by implementing lazy loading of routes
    and extracting code in reusable pieces.
  </span>,
  <span data-cy="ImproveAppsArchitecture" key="improve-apps-architecture">
    <strong>Improve app&apos;s architecture</strong> by refactoring code and
    separating concerns like business, UI, and other layers.
  </span>,
  <span data-cy="DemonstrateExpertise" key="demonstrate-expertise">
    <strong>Demonstrate expertise</strong> in the utilization of GraphQL to
    communicate with backend
  </span>
];

const companyStealthHealthcareSaasStartupProps = {
  date: "May 2022 to June 2022",
  iconsWithLabels,
  name: "Healthcare SaaS",
  responsibilities,
  title: "Senior React Developer"
};

const CompanyStealthHealthcareSaasStartup: React.FC = () => (
  <Company
    dataCy="CompanyStealthHealthcareSaasStartup"
    {...companyStealthHealthcareSaasStartupProps}
  />
);

export {
  CompanyStealthHealthcareSaasStartup,
  companyStealthHealthcareSaasStartupProps
};
