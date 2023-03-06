import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "javaScript",
    label: "Javascript"
  },
  {
    iconName: "typeScript",
    label: "Typescript"
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
    iconName: "ember",
    label: "Ember"
  },
  {
    iconName: "sass",
    label: "Sass"
  },
  {
    iconName: "docker",
    label: "Docker"
  },
  {
    iconName: "qUnit",
    label: "QUnit"
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
    iconName: "rest",
    label: "REST"
  },
  {
    iconName: "zeplin",
    label: "Zeplin"
  },
  {
    iconName: "jira",
    label: "JIRA"
  },
  {
    iconName: "jenkins",
    label: "Jenkins"
  },
  {
    iconName: "gitlab",
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
