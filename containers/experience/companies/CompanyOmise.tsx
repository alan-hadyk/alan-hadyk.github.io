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
    iconName: IconStaticName.Ruby,
    label: "Ruby"
  },
  {
    iconName: IconStaticName.React,
    label: "React"
  },
  {
    iconName: IconStaticName.RubyOnRails,
    label: "Ruby on Rails"
  },
  {
    iconName: IconStaticName.Sinatra,
    label: "Sinatra"
  },
  {
    iconName: IconStaticName.StyledComponents,
    label: "styled components"
  },
  {
    iconName: IconStaticName.Webpack,
    label: "Webpack"
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
    iconName: IconStaticName.ReactTestingLibrary,
    label: "React Testing Library"
  },
  {
    iconName: IconStaticName.Cypress,
    label: "Cypress"
  },
  {
    iconName: IconStaticName.NodeJs,
    label: "Node.js"
  },
  {
    iconName: IconStaticName.Express,
    label: "Express"
  },
  {
    iconName: IconStaticName.Apollo,
    label: "Apollo"
  },
  {
    iconName: IconStaticName.GraphQL,
    label: "GraphQL"
  },
  {
    iconName: IconStaticName.Docker,
    label: "Docker"
  },
  {
    iconName: IconStaticName.Jenkins,
    label: "Jenkins"
  },
  {
    iconName: IconStaticName.Buildkite,
    label: "Buildkite"
  },
  {
    iconName: IconStaticName.Basecamp,
    label: "Basecamp"
  },
  {
    iconName: IconStaticName.Gallery,
    label: "Gallery"
  }
];

const companyOmiseProps: ICompanyProps = {
  date: "August 2018 to March 2021",
  iconsWithLabels,
  name: "Omise",
  responsibilities: [
    <span key="Crafted">
      Crafted a scalable front-end architecture for a payment systems
      application, contributing to a{" "}
      <strong>20% increase in user engagement</strong> and a{" "}
      <strong>15% improvement in user satisfaction</strong>.
    </span>,
    <span key="Accelerated">
      <strong>Accelerated project timelines by 20%</strong>, ensuring the timely
      development of application features.
    </span>,
    <span key="Developed">
      Developed an API gateway using Express/Node.js server and Apollo/GraphQL
      stack, <strong>increasing backend communication efficiency by 30%</strong>
      .
    </span>,
    <span key="Created">
      Created reusable components,{" "}
      <strong>reducing development effort by 15%</strong> and enhancing code
      maintainability.
    </span>,
    <span key="Authored">
      Authored unit, integration, and acceptance tests, resulting in a{" "}
      <strong>20% decrease in bugs</strong> and a{" "}
      <strong>10% improvement in code reliability</strong>.
    </span>,
    <span key="Mentored">
      Mentored junior front-end developers, contributing to a{" "}
      <strong>15% increase in their productivity and skills development</strong>
      .
    </span>
  ],
  title: "Senior Full-Stack Developer"
};

const CompanyOmise: React.FC<Pick<ICompanyProps, "variant">> = ({
  variant
}) => (
  <Company
    link="https://www.omise.co/"
    {...companyOmiseProps}
    variant={variant}
  />
);

export { CompanyOmise };
