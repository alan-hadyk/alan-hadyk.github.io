import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";
import { experience } from "containers/experience/config";

const companyHealthcareSaasProps: ICompanyProps = {
  date: "May 2022 to June 2022",
  iconsWithLabels: experience.filter(({ iconName }) => {
    return [
      "html",
      "css",
      "javaScript",
      "typescript",
      "react",
      "tailwind",
      "graphQL",
      "apollo",
      "prisma"
    ].includes(iconName);
  }),
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
