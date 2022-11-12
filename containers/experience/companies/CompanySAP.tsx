import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandCoffeeScript",
    label: "CoffeeScript"
  },
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandRedux",
    label: "Redux"
  },
  {
    iconName: "brandCSSModules",
    label: "CSS Modules"
  },
  {
    iconName: "brandWebpack",
    label: "Webpack"
  },
  {
    iconName: "brandNode",
    label: "Node.js"
  },
  {
    iconName: "brandDocpad",
    label: "DocPad"
  },
  {
    iconName: "brandJEST",
    label: "JEST"
  },
  {
    iconName: "brandAirbnb",
    label: "Enzyme"
  },
  {
    iconName: "brandJIRA",
    label: "JIRA"
  },
  {
    iconName: "brandStash",
    label: "Stash"
  },
  {
    iconName: "brandBamboo",
    label: "Bamboo"
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span data-cy="AlignedAndBridged" key="aligned-and-bridged">
    <strong>Aligned objectives</strong> and{" "}
    <strong>bridged communication</strong> for UI development and monitoring of
    various projects and services
  </span>,
  <span data-cy="PromotedSynchronized" key="promoted-synchronized">
    <strong>Promoted synchronized communication</strong> to produce Agile
    methodology across projects
  </span>,
  <span data-cy="EngageAndDeliver" key="engage-and-deliver">
    <strong>Sought as speaker</strong> to engage and deliver university lectures
  </span>,
  <span data-cy="NavigatedToDrive" key="navigated-to-drive">
    <strong>Navigated</strong> rapidly evolving digital technology landscapes to{" "}
    <strong>drive</strong> team comprehension of JavaScript frameworks
  </span>,
  <span data-cy="EnabledTapInto" key="enabled-tap-into">
    <strong>Enabled</strong> our product team to{" "}
    <strong>tap into valuable data sources</strong> and build incredible
    features for our customers
  </span>
];

const companySAPProps = {
  date: "November 2015 to May 2017",
  iconsWithLabels,
  name: "SAP",
  responsibilities,
  title: "Front end developer"
};

const CompanySAP: React.FC = () => (
  <Company
    dataCy="CompanySAP"
    link="https://www.sap.com/"
    {...companySAPProps}
  />
);

export { CompanySAP, companySAPProps };
