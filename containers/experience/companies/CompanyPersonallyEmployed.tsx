import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandjQuery",
    label: "jQuery"
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span data-testid="EmployedPersonalReferral" key="employed-personal-referral">
    <strong>Employed personal referral networks</strong> to attain small job
    order contracts
  </span>,
  <span
    data-testid="InitializedPersonalMotivation"
    key="initialized-personal-motivation"
  >
    <strong>Initialized personal motivation</strong> to acquire front-end
    development skills
  </span>,
  <span data-testid="CultivatedStrongTies" key="cultivated-strong-ties">
    <strong>Cultivated strong ties</strong> to the technology community through
    exemplified demonstration of abilities
  </span>,
  <span data-testid="CoordinatedDevelopment" key="coordinated-development">
    <strong>Coordinated development</strong> of interactive web-based data
    visualizations, including interactive charts and maps
  </span>
];

const CompanyPersonallyEmployed: React.FC = () => (
  <Company
    companyMobilePaddingBottom="pb-0"
    dataCy="CompanyPersonallyEmployed"
    date="May 2008 to September 2010"
    iconsWithLabels={iconsWithLabels}
    name="Alan Hadyk"
    responsibilities={responsibilities}
    timelineBottom="bottom-0"
    title="Freelancer"
  />
);

export { CompanyPersonallyEmployed };
