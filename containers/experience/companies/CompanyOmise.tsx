import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandRuby",
    label: "Ruby"
  },
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandRails",
    label: "Ruby on Rails"
  },
  {
    iconName: "brandSinatra",
    label: "Sinatra"
  },
  {
    iconName: "brandStyledComponents",
    label: "styled components"
  },
  {
    iconName: "brandWebpack",
    label: "Webpack"
  },
  {
    iconName: "brandJEST",
    label: "JEST"
  },
  {
    iconName: "brandAirbnb",
    label: "Enzyme"
  },
  {
    iconName: "brandTestingLibrary",
    label: "React Testing Library"
  },
  {
    iconName: "brandCypress",
    label: "Cypress"
  },
  {
    iconName: "brandNode",
    label: "Node.js"
  },
  {
    iconName: "brandExpress",
    label: "Express"
  },
  {
    iconName: "brandApollo",
    label: "Apollo"
  },
  {
    iconName: "brandGraphQL",
    label: "GraphQL"
  },
  {
    iconName: "brandDocker",
    label: "Docker"
  },
  {
    iconName: "brandJenkins",
    label: "Jenkins"
  },
  {
    iconName: "brandBuildkite",
    label: "Buildkite"
  },
  {
    iconName: "brandBasecamp",
    label: "Basecamp"
  },
  {
    iconName: "brandGallery",
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
