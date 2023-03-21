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
    iconName: IconStaticName.TypeScript,
    label: "Typescript"
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
    iconName: IconStaticName.Ember,
    label: "Ember"
  },
  {
    iconName: IconStaticName.Sass,
    label: "Sass"
  },
  {
    iconName: IconStaticName.Docker,
    label: "Docker"
  },
  {
    iconName: IconStaticName.QUnit,
    label: "QUnit"
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
    iconName: IconStaticName.REST,
    label: "REST"
  },
  {
    iconName: IconStaticName.Zeplin,
    label: "Zeplin"
  },
  {
    iconName: IconStaticName.Jira,
    label: "JIRA"
  },
  {
    iconName: IconStaticName.Jenkins,
    label: "Jenkins"
  },
  {
    iconName: IconStaticName.GitLab,
    label: "GitLab"
  }
];

const companyShijiProps: ICompanyProps = {
  date: "June 2017 to July 2018",
  iconsWithLabels,
  name: "Shiji",
  responsibilities: [
    <span key="orchestrated-and-directed-hotels">
      <strong>Orchestrated</strong> and <strong>directed</strong> collaborative
      team operational objectives for front-end layer of an application designed
      to manage hotels
    </span>,
    <span key="applied-and-certified">
      <strong>Applied development</strong> and{" "}
      <strong>certified adherence</strong> to best practices to deliver PoC
      based on React.js
    </span>,
    <span key="streamlined-project-timelines-ember">
      <strong>Streamlined project timelines</strong> to ensure application is
      being developed in Ember.js with TypeScript
    </span>,
    <span key="transformed-and-created-models-serializers">
      <strong>Transformed and created</strong> reusable components and managed
      adapters, models and serializers
    </span>,
    <span key="authored-unit-integration">
      <strong>Authored</strong> unit, integration and acceptance tests
    </span>,
    <span key="demonstrated-expertise-rest">
      <strong>Demonstrated expertise</strong> in the utilization of REST to
      communicate with backend
    </span>,
    <span key="mentored-junior-developers">
      <strong>Mentored</strong> junior front-end developers
    </span>
  ],
  title: "Senior Front-End developer"
};

const CompanyShiji: React.FC = () => (
  <Company link="https://shijigroup.com/" {...companyShijiProps} />
);

export { CompanyShiji, companyShijiProps };
