import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "javaScript",
    label: "Javascript"
  },
  {
    iconName: "ruby",
    label: "Ruby"
  },
  {
    iconName: "react",
    label: "React"
  },
  {
    iconName: "rubyOnRails",
    label: "Ruby on Rails"
  },
  {
    iconName: "sinatra",
    label: "Sinatra"
  },
  {
    iconName: "styledComponents",
    label: "styled components"
  },
  {
    iconName: "webpack",
    label: "Webpack"
  },
  {
    iconName: "jest",
    label: "JEST"
  },
  {
    iconName: "airbnb",
    label: "Enzyme"
  },
  {
    iconName: "reactTestingLibrary",
    label: "React Testing Library"
  },
  {
    iconName: "cypress",
    label: "Cypress"
  },
  {
    iconName: "nodeJs",
    label: "Node.js"
  },
  {
    iconName: "express",
    label: "Express"
  },
  {
    iconName: "apollo",
    label: "Apollo"
  },
  {
    iconName: "graphQL",
    label: "GraphQL"
  },
  {
    iconName: "docker",
    label: "Docker"
  },
  {
    iconName: "jenkins",
    label: "Jenkins"
  },
  {
    iconName: "buildkite",
    label: "Buildkite"
  },
  {
    iconName: "basecamp",
    label: "Basecamp"
  },
  {
    iconName: "gallery",
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
