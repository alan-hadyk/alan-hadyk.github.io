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
    <span key="optimized-and-systematized">
      <strong>Optimized and systematized UI development</strong> (and sometimes
      design) of various e-commerce projects
    </span>,
    <span key="bolstered">
      <strong>Bolstered continued professional development</strong> with
      concepts and technologies, such as: CSS preprocessors, UI pattern
      libraries and JavaScript task runners
    </span>,
    <span key="presented-innovative">
      <strong>Presented innovative approaches</strong> in the form of brown bags
      to all engineers to help shape our technical market presence
    </span>,
    <span key="fostered-cross-functional">
      <strong>Fostered cross-functional communication</strong> with information
      technology, end users, and other stakeholders to translate needs into
      system requirements, solid solutions, and reliable results
    </span>,
    <span key="informed-decisions">
      Informed decisions to <strong>incorporate</strong> the use of defect and
      enhancement tracking software and processes
    </span>
  ],
  title: "Front end developer"
};

const CompanyDiH: React.FC = () => (
  <Company link="https://dih.pl/" {...companyDiHProps} />
);

export { CompanyDiH, companyDiHProps };
