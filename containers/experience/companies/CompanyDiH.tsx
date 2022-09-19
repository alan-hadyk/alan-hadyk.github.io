import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandSass",
    label: "Sass"
  },
  {
    iconName: "brandLESS",
    label: "LESS"
  },
  {
    iconName: "brandjQuery",
    label: "jQuery"
  },
  {
    iconName: "brandPrestaShop",
    label: "PrestaShop"
  },
  {
    iconName: "brandRedmine",
    label: "Redmine"
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span data-cy="OptimizedAndSystematized" key="optimized-and-systematized">
    <strong>Optimized and systematized UI development</strong> (and sometimes
    design) of various e-commerce projects
  </span>,
  <span data-cy="Bolstered" key="bolstered">
    <strong>Bolstered continued professional development</strong> with concepts
    and technologies, such as: CSS preprocessors, UI pattern libraries and
    JavaScript task runners
  </span>,
  <span data-cy="PresentedInnovative" key="presented-innovative">
    <strong>Presented innovative approaches</strong> in the form of brown bags
    to all engineers to help shape our technical market presence
  </span>,
  <span data-cy="FosteredCrossFunctional" key="fostered-cross-functional">
    <strong>Fostered cross-functional communication</strong> with information
    technology, end users, and other stakeholders to translate needs into system
    requirements, solid solutions, and reliable results
  </span>,
  <span data-cy="InformedDecisions" key="informed-decisions">
    Informed decisions to <strong>incorporate</strong> the use of defect and
    enhancement tracking software and processes
  </span>
];

const CompanyDiH: React.FC = () => (
  <Company
    dataCy="CompanyDiH"
    date="October 2010 to October 2015"
    iconsWithLabels={iconsWithLabels}
    link="https://dih.pl/"
    name="DiH"
    responsibilities={responsibilities}
    title="Front end developer"
  />
);

export { CompanyDiH };
