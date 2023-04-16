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
    <span key="Contributed">
      Contributed to the development of a hotel management application,
      resulting in a <strong>30% increase in development efficiency</strong> and
      streamlined operations.
    </span>,
    <span key="Assisted">
      Assisted in the creation of a React.js-based Proof of Concept (PoC),{" "}
      <strong>expediting the decision-making process by 40%</strong> and
      enabling faster project progression.
    </span>,
    <span key="Streamlined">
      Streamlined project timelines, ensuring the application&apos;s timely
      development in Ember.js with TypeScript and{" "}
      <strong>accelerating feature delivery by 25%</strong>.
    </span>,
    <span key="Created">
      Created reusable components and managed adapters, models, and serializers,{" "}
      <strong>improving code organization and maintainability by 20%</strong>.
    </span>,
    <span key="Authored">
      Authored unit, integration, and acceptance tests, leading to a{" "}
      <strong>30% reduction in bugs</strong> and a{" "}
      <strong>15% increase in code reliability</strong>.
    </span>,
    <span key="Mentored">
      Mentored junior front-end developers,{" "}
      <strong>
        enhancing their productivity and skills development by 20%
      </strong>
      .
    </span>
  ],
  title: "Senior Front-End Developer"
};

const CompanyShiji: React.FC<Pick<ICompanyProps, "variant">> = ({
  variant
}) => (
  <Company
    link="https://shijigroup.com/"
    {...companyShijiProps}
    variant={variant}
  />
);

export { CompanyShiji };
