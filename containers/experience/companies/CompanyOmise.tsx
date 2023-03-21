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
    <span key="created-scalable">
      <strong>Created</strong> scalable and sane front-end architecture
    </span>,
    <span key="orchestrated-and-directed">
      <strong>Orchestrated</strong> and <strong>directed</strong> collaborative
      team operational objectives for front-end layer of an application designed
      to manage payment systems
    </span>,
    <span key="applied-and-certified">
      <strong>Applied development</strong> and{" "}
      <strong>certified adherence</strong> to best practices to deliver
      application based on React.js
    </span>,
    <span key="streamlined-project-timelines">
      <strong>Streamlined project timelines</strong> to ensure application is
      being developed
    </span>,
    <span key="developed-api-gateway">
      <strong>Developed API gateway</strong> in the form of Express / Node.js
      server, along with Apollo / GraphQL stack
    </span>,
    <span key="transformed-and-create">
      <strong>Transformed and created</strong> reusable components
    </span>,
    <span key="authored-unit">
      <strong>Authored</strong> unit, integration and acceptance tests
    </span>,
    <span key="demonstrated-expertise">
      <strong>Demonstrated expertise</strong> in the utilization of GraphQL to
      communicate with backend
    </span>,
    <span key="mentored-junior">
      <strong>Mentored</strong> junior front-end developers
    </span>
  ],
  title: "Senior Full-Stack Developer"
};

const CompanyOmise: React.FC = () => (
  <Company link="https://www.omise.co/" {...companyOmiseProps} />
);

export { CompanyOmise, companyOmiseProps };
