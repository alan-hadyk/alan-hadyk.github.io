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
    iconName: IconStaticName.Sass,
    label: "Sass"
  },
  {
    iconName: IconStaticName.LESS,
    label: "LESS"
  },
  {
    iconName: IconStaticName.JQuery,
    label: "jQuery"
  },
  {
    iconName: IconStaticName.Prestashop,
    label: "PrestaShop"
  },
  {
    iconName: IconStaticName.Redmine,
    label: "Redmine"
  }
];

const companyDiHProps: ICompanyProps = {
  date: "October 2010 to October 2015",
  iconsWithLabels,
  name: "DiH",
  responsibilities: [
    <span key="Optimized">
      Optimized UI development for various e-commerce projects, resulting in a
      <strong>30% improvement in design consistency</strong> and a{" "}
      <strong>20% reduction in development time</strong>.
    </span>,
    <span key="Fostered">
      Fostered professional development in CSS preprocessors, UI pattern
      libraries, and JavaScript task runners,{" "}
      <strong>improving team efficiency by 25%</strong>.
    </span>,
    <span key="Presented">
      Presented innovative approaches to engineers, contributing to the
      company&apos;s technical market presence and enhancing team knowledge.
    </span>,
    <span key="Fostered">
      Fostered cross-functional communication with IT, end users, and
      stakeholders, resulting in a{" "}
      <strong>25% reduction in miscommunication-related issues</strong> and
      faster project delivery.
    </span>,
    <span key="Advocated">
      Advocated for the use of defect and enhancement tracking software,
      <strong>improving issue resolution efficiency by 30%</strong>.
    </span>
  ],
  title: "Front-End Developer"
};

const CompanyDiH: React.FC = () => (
  <Company link="https://dih.pl/" {...companyDiHProps} />
);

export { CompanyDiH, companyDiHProps };
