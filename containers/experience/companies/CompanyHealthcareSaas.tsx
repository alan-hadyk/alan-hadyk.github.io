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
    iconName: IconStaticName.Tailwind,
    label: "Tailwind"
  },
  {
    iconName: IconStaticName.GraphQL,
    label: "GraphQL"
  },
  {
    iconName: IconStaticName.Apollo,
    label: "Apollo"
  },
  {
    iconName: IconStaticName.Prisma,
    label: "Prisma"
  }
];

const companyHealthcareSaasProps: ICompanyProps = {
  date: "May 2022 to June 2022",
  iconsWithLabels,
  name: "Healthcare SaaS",
  responsibilities: [
    <span key="developed-doctor-and-patient-engagement">
      <strong>Developed</strong> doctor&apos;s and patient&apos;s journey,
      called engagement, which is an essential part of the application.
    </span>,
    <span key="improved-performance">
      <strong>Improved performance</strong> by implementing lazy loading of
      routes and extracting code in reusable pieces.
    </span>,
    <span key="improved-apps-architecture">
      <strong>Improved app&apos;s architecture</strong> by refactoring code and
      separating concerns like business, UI, and other layers.
    </span>,
    <span key="demonstrated-expertise">
      <strong>Demonstrated expertise</strong> in the utilization of GraphQL to
      communicate with backend
    </span>
  ],
  title: "Senior React Developer"
};

const CompanyHealthcareSaas: React.FC = () => (
  <Company {...companyHealthcareSaasProps} />
);

export { CompanyHealthcareSaas, companyHealthcareSaasProps };
