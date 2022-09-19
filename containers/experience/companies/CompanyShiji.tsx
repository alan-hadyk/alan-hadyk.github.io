import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandTS",
    label: "Typescript"
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
    iconName: "brandEmber",
    label: "Ember"
  },
  {
    iconName: "brandSass",
    label: "Sass"
  },
  {
    iconName: "brandDocker",
    label: "Docker"
  },
  {
    iconName: "brandQunit",
    label: "QUnit"
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
    iconName: "brandREST",
    label: "REST"
  },
  {
    iconName: "brandZeplin",
    label: "Zeplin"
  },
  {
    iconName: "brandJIRA",
    label: "JIRA"
  },
  {
    iconName: "brandJenkins",
    label: "Jenkins"
  },
  {
    iconName: "brandGitlab",
    label: "GitLab"
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span data-cy="OrchestrateAndDirect" key="orchestrate-and-direct-hotels">
    <strong>Orchestrate</strong> and <strong>direct</strong> collaborative team
    operational objectives for front-end layer of an application designed to
    manage hotels
  </span>,
  <span data-cy="ApplyAndCertify" key="apply-and-certify">
    <strong>Apply development</strong> and <strong>certify adherence</strong> to
    best practices to deliver PoC based on React.js
  </span>,
  <span
    data-cy="StreamlineProjectTimelines"
    key="streamline-project-timelines-ember"
  >
    <strong>Streamline project timelines</strong> to ensure application is being
    developed in Ember.js with TypeScript
  </span>,
  <span
    data-cy="TransformAndCreate"
    key="transform-and-create-models-serializers"
  >
    <strong>Transform and create</strong> reusable components and manage
    adapters, models and serializers
  </span>,
  <span data-cy="AuthorUnit" key="author-unit-integration">
    <strong>Author</strong> unit, integration and acceptance tests
  </span>,
  <span data-cy="DemonstrateExpertise" key="demonstrate-expertise-rest">
    <strong>Demonstrate expertise</strong> in the utilization of REST to
    communicate with backend
  </span>,
  <span data-cy="MentorJunior" key="mentor-junior-developers">
    <strong>Mentor</strong> junior front-end developers
  </span>
];

const CompanyShiji: React.FC = () => (
  <Company
    dataCy="CompanyShiji"
    date="June 2017 to July 2018"
    iconsWithLabels={iconsWithLabels}
    link="https://shijigroup.com/"
    name="Shiji"
    responsibilities={responsibilities}
    title="Senior Front-End developer"
  />
);

export { CompanyShiji };
