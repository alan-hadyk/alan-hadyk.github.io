import React from "react";

import Company from "<organisms>/Company";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

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
  <span data-testid="EmployedPersonalReferral" key="employed-personal-referral"><strong>Employed personal referral networks</strong> to attain small job order contracts</span>, 
  <span data-testid="InitializedPersonalMotivation" key="initialized-personal-motivation"><strong>Initialized personal motivation</strong> to acquire front-end development skills</span>, 
  <span data-testid="CultivatedStrongTies" key="cultivated-strong-ties"><strong>Cultivated strong ties</strong> to the technology community through exemplified demonstration of abilities</span>, 
  <span data-testid="CoordinatedDevelopment" key="coordinated-development"><strong>Coordinated development</strong> of interactive web-based data visualizations, including interactive charts and maps</span> 
];

const CompanyPersonallyEmployed = (): JSX.Element => (
  <Company
    companyMobilePaddingBottom="spacing0"
    dataCy="CompanyPersonallyEmployed"
    dataTestId="CompanyPersonallyEmployed"
    date="May 2008 to September 2010"
    iconsWithLabels={iconsWithLabels}
    logo="logo"
    responsibilities={responsibilities}
    title="Freelancer"
  />
);

export default CompanyPersonallyEmployed;
