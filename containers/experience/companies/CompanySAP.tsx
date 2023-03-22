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
    <span key="Facilitated">
      Facilitated UI development and monitoring across various projects,{" "}
      <strong>improving cross-team communication by 30%</strong> and ensuring
      timely delivery of features.
    </span>,
    <span key="Implemented">
      Implemented Agile methodologies across projects, resulting in a{" "}
      <strong>20% increase in development efficiency and adaptability</strong>.
    </span>,
    <span key="Delivered">
      Delivered university lectures, sharing expertise and contributing to the
      education of future industry professionals.
    </span>,
    <span key="Guided">
      Guided team members through rapidly evolving digital technology
      landscapes,{" "}
      <strong>
        boosting team comprehension of JavaScript frameworks by 30%
      </strong>
      .
    </span>,
    <span key="Enabled">
      Enabled the product team to access valuable data sources and develop
      innovative features,{" "}
      <strong>increasing customer satisfaction by 25%</strong>.
    </span>
  ],
  title: "Front-End Developer"
};

const CompanySAP: React.FC = () => (
  <Company link="https://www.sap.com/" {...companySAPProps} />
);

export { CompanySAP, companySAPProps };
