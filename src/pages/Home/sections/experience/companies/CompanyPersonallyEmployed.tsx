import React from "react";

import Company from "<organisms>/Company";

import { CompanyProps } from "<organisms>/__typings__/Company.d.ts";

const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandJQuery",
    label: "jQuery"
  }
];

const responsibilities: CompanyProps["responsibilities"] = [
  <span key="employed-personal-referral"><strong>Employed personal referral networks</strong> to attain small job order contracts</span>, 
  <span key="initialized-personal-motivation"><strong>Initialized personal motivation</strong> to acquire front-end development skills</span>, 
  <span key="cultivated-strong-ties"><strong>Cultivated strong ties</strong> to the technology community through exemplified demonstration of abilities</span>, 
  <span key="coordinated-development"><strong>Coordinated development</strong> of interactive web-based data visualizations, including interactive charts and maps</span> 
];

const CompanyPersonallyEmployed = (): JSX.Element => (
  <Company
    dataTestId="CompanyPersonallyEmployed"
    date="May 2008 to September 2010"
    iconsWithLabels={iconsWithLabels}
    logo="logo"
    responsibilities={responsibilities}
    title="Freelancer"
  />
);

export default CompanyPersonallyEmployed;
