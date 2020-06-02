import React from "react";

import Company from "<organisms>/Company";

import { CompanyProps } from "<organisms>/__typings__/Company.d.ts";

const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
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
    iconName: "brandJQuery",
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

const responsibilities: CompanyProps["responsibilities"] = [
  <span key="optimized-and-systematized"><strong>Optimized and systematized UI development</strong> (and sometimes design) of various e-commerce projects</span>, 
  <span key="bolstered"><strong>Bolstered continued professional development</strong> with concepts and technologies, such as: CSS preprocessors, UI pattern libraries and JavaScript task runners</span>, 
  <span key="presented-innovative"><strong>Presented innovative approaches</strong> in the form of brown bags to all engineers to help shape our technical market presence</span>, 
  <span key="fostered-cross-functional"><strong>Fostered cross-functional communication</strong> with information technology, end users, and other stakeholders to translate needs into system requirements, solid solutions, and reliable results</span>, 
  <span key="informed-decisions">Informed decisions to <strong>incorporate</strong> the use of defect and enhancement tracking software and processes</span>
];

const CompanyDiH = (): JSX.Element => (
  <Company
    dataTestId="CompanyDiH"
    date="October 2010 to October 2015"
    iconsWithLabels={iconsWithLabels}
    logo="companyDIH"
    responsibilities={responsibilities}
    title="Front end developer"
  />
);

export default CompanyDiH;
