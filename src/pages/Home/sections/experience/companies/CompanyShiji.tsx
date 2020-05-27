import React from "react";

import Company from "<organisms>/Company";

import { CompanyProps } from "<organisms>/__typings__/Company.d.ts";

const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
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
  }
];

const responsibilities: CompanyProps["responsibilities"] = [
  <span key="orchestrate-and-direct-hotels"><strong>Orchestrate</strong> and <strong>direct</strong> collaborative team operational objectives for front-end layer of an application designed to manage hotels</span>, 
  <span key="apply-and-certify"><strong>Apply</strong> development and <strong>certify</strong> adherence to best practices to deliver PoC based on React.js</span>, 
  <span key="streamline-project-timelines-ember"><strong>Streamline</strong> project timelines to ensure application is being developed in Ember.js with TypeScript</span>, 
  <span key="transform-and-create-models-serializers"><strong>Transform</strong> and <strong>create</strong> reusable components and manage adapters, models and serializers</span>, 
  <span key="author-unit-integration"><strong>Author</strong> unit, integration and acceptance tests</span>, 
  <span key="demonstrate-expertise-rest"><strong>Demonstrate</strong> expertise in the utilization of REST to communicate with backend</span>, 
  <span key="mentor-junior-developers"><strong>Mentor</strong> junior front-end developers</span>
];

const CompanyShiji = (): JSX.Element => (
  <Company
    date="June 2017 to July 2018"
    iconsWithLabels={iconsWithLabels}
    logo="companyShiji"
    responsibilities={responsibilities}
    title="Front end developer"
  />
);

export default CompanyShiji;
