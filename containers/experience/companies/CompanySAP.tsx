import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "javaScript",
    label: "Javascript"
  },
  {
    iconName: "coffeeScript",
    label: "CoffeeScript"
  },
  {
    iconName: "react",
    label: "React"
  },
  {
    iconName: "redux",
    label: "Redux"
  },
  {
    iconName: "cssModules",
    label: "CSS Modules"
  },
  {
    iconName: "webpack",
    label: "Webpack"
  },
  {
    iconName: "nodeJs",
    label: "Node.js"
  },
  {
    iconName: "docpad",
    label: "DocPad"
  },
  {
    iconName: "jest",
    label: "JEST"
  },
  {
    iconName: "airbnb",
    label: "Enzyme"
  },
  {
    iconName: "jira",
    label: "JIRA"
  },
  {
    iconName: "stash",
    label: "Stash"
  },
  {
    iconName: "bamboo",
    label: "Bamboo"
  }
];

const companySAPProps: ICompanyProps = {
  date: "November 2015 to May 2017",
  iconsWithLabels,
  name: "SAP",
  responsibilities: [
    <span key="aligned-and-bridged">
      <strong>Aligned objectives</strong> and{" "}
      <strong>bridged communication</strong> for UI development and monitoring
      of various projects and services
    </span>,
    <span key="promoted-synchronized">
      <strong>Promoted synchronized communication</strong> to produce Agile
      methodology across projects
    </span>,
    <span key="engage-and-deliver">
      <strong>Sought as speaker</strong> to engage and deliver university
      lectures
    </span>,
    <span key="navigated-to-drive">
      <strong>Navigated</strong> rapidly evolving digital technology landscapes
      to <strong>drive</strong> team comprehension of JavaScript frameworks
    </span>,
    <span key="enabled-tap-into">
      <strong>Enabled</strong> our product team to{" "}
      <strong>tap into valuable data sources</strong> and build incredible
      features for our customers
    </span>
  ],
  title: "Front end developer"
};

const CompanySAP: React.FC = () => (
  <Company link="https://www.sap.com/" {...companySAPProps} />
);

export { CompanySAP, companySAPProps };
