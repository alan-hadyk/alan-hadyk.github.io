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
    <span key="Developed">
      Developed captivating user interfaces for a healthcare application,
      resulting in a <strong>15% increase in user engagement</strong> and a{" "}
      <strong>10% improvement in user satisfaction</strong>.
    </span>,
    <span key="Improved">
      <strong>Improved loading speed and performance by 20%</strong> through the
      implementation of route lazy-loading and modularization of code into
      reusable components.
    </span>,
    <span key="Refined">
      Refined application architecture,{" "}
      <strong>reducing maintenance effort by 30%</strong> and increasing code
      readability and organization.
    </span>,
    <span key="Utilized">
      Utilized GraphQL for seamless communication with backend services,{" "}
      <strong>reducing data fetching time by 25%</strong> and enhancing the user
      experience.
    </span>
  ],
  title: "Senior React Developer"
};

const CompanyHealthcareSaas: React.FC = () => (
  <Company {...companyHealthcareSaasProps} />
);

export { CompanyHealthcareSaas, companyHealthcareSaasProps };
