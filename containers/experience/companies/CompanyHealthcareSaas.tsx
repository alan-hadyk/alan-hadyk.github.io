import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";

const companyHealthcareSaasProps: ICompanyProps = {
  date: "May 2022 to June 2022",
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.HTML,
      IconStaticName.CSS,
      IconStaticName.JavaScript,
      IconStaticName.TypeScript,
      IconStaticName.React,
      IconStaticName.Tailwind,
      IconStaticName.GraphQL,
      IconStaticName.Apollo,
      IconStaticName.Prisma
    ].includes(iconName)
  ),
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

const CompanyHealthcareSaas: React.FC<Pick<ICompanyProps, "variant">> = ({
  variant
}) => <Company {...companyHealthcareSaasProps} variant={variant} />;

export { CompanyHealthcareSaas };
