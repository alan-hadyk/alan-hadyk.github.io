import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { experience } from "containers/experience/config";

const companyOmiseProps: ICompanyProps = {
  date: "August 2018 to March 2021",
  iconsWithLabels: experience.filter(({ iconName }) => {
    return [
      "html",
      "css",
      "javaScript",
      "ruby",
      "react",
      "rubyOnRails",
      "sinatra",
      "styledComponents",
      "webpack",
      "jest",
      "airbnb",
      "reactTestingLibrary",
      "cypress",
      "nodeJs",
      "express",
      "apollo",
      "graphQL",
      "docker",
      "jenkins",
      "buildkite",
      "basecamp",
      "gallery"
    ].includes(iconName);
  }),
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

const CompanyOmise: React.FC = () => (
  <Company link="https://www.omise.co/" {...companyOmiseProps} />
);

export { CompanyOmise, companyOmiseProps };
