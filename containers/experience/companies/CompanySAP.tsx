import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { experience } from "containers/experience/config";

const companySAPProps: ICompanyProps = {
  date: "November 2015 to May 2017",
  iconsWithLabels: experience.filter(({ iconName }) => {
    return [
      "html",
      "css",
      "javaScript",
      "coffeeScript",
      "react",
      "redux",
      "cssModules",
      "webpack",
      "nodeJs",
      "docpad",
      "jest",
      "airbnb",
      "jira",
      "stash",
      "bamboo"
    ].includes(iconName);
  }),
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
