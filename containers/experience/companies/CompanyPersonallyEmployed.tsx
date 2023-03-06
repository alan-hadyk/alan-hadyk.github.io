import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "javaScript",
    label: "Javascript"
  },
  {
    iconName: "jQuery",
    label: "jQuery"
  }
];

const companyPersonallyEmployedProps: ICompanyProps = {
  date: "May 2008 to September 2010",
  iconsWithLabels,
  name: "Alan Hadyk",
  responsibilities: [
    <span key="employed-personal-referral">
      <strong>Employed personal referral networks</strong> to attain small job
      order contracts
    </span>,
    <span key="initialized-personal-motivation">
      <strong>Initialized personal motivation</strong> to acquire front-end
      development skills
    </span>,
    <span key="cultivated-strong-ties">
      <strong>Cultivated strong ties</strong> to the technology community
      through exemplified demonstration of abilities
    </span>,
    <span key="coordinated-development">
      <strong>Coordinated development</strong> of interactive web-based data
      visualizations, including interactive charts and maps
    </span>
  ],
  title: "Freelancer"
};

const CompanyPersonallyEmployed: React.FC = () => (
  <Company
    companyMobilePaddingBottom="pb-0"
    timelineBottom="bottom-0"
    {...companyPersonallyEmployedProps}
  />
);

export { CompanyPersonallyEmployed, companyPersonallyEmployedProps };
