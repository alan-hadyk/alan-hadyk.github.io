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
    iconName: IconStaticName.CoffeeScript,
    label: "CoffeeScript"
  },
  {
    iconName: IconStaticName.React,
    label: "React"
  },
  {
    iconName: IconStaticName.Redux,
    label: "Redux"
  },
  {
    iconName: IconStaticName.CSSModules,
    label: "CSS Modules"
  },
  {
    iconName: IconStaticName.Webpack,
    label: "Webpack"
  },
  {
    iconName: IconStaticName.NodeJs,
    label: "Node.js"
  },
  {
    iconName: IconStaticName.Docpad,
    label: "DocPad"
  },
  {
    iconName: IconStaticName.JEST,
    label: "JEST"
  },
  {
    iconName: IconStaticName.AirBnb,
    label: "Enzyme"
  },
  {
    iconName: IconStaticName.Jira,
    label: "JIRA"
  },
  {
    iconName: IconStaticName.Stash,
    label: "Stash"
  },
  {
    iconName: IconStaticName.Bamboo,
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
