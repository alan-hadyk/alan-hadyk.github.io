import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { experience } from "containers/experience/config";

const companyShijiProps: ICompanyProps = {
  date: "June 2017 to July 2018",
  iconsWithLabels: experience.filter(({ iconName }) => {
    return [
      "html",
      "css",
      "javaScript",
      "typeScript",
      "react",
      "redux",
      "ember",
      "sass",
      "docker",
      "qUnit",
      "webpack",
      "nodeJs",
      "rest",
      "zeplin",
      "jira",
      "jenkins",
      "gitlab"
    ].includes(iconName);
  }),
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

const CompanyShiji: React.FC = () => (
  <Company link="https://shijigroup.com/" {...companyShijiProps} />
);

export { CompanyShiji, companyShijiProps };
