import { Company } from "@app/components/organisms/Company/Company";

import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";

const CompanyOmise: React.FC = () => (
  <Company
    date="August 2018 to March 2021"
    link="https://www.omise.co/"
    name="Omise"
    projects={[
      {
        responsibilities: [
          <span key="Architected">
            Architected a scalable frontend for Omise&apos;s merchant dashboard,
            a React application,{" "}
            <strong>
              driving improvements in user engagement and satisfaction
            </strong>
            .
          </span>,
          <span key="Developed">
            Developed reusable React components,{" "}
            <strong>optimizing code maintainability</strong> and{" "}
            <strong>accelerating feature delivery</strong>.
          </span>,
          <span key="Collaborated">
            Collaborated in a cross-functional team, ensuring{" "}
            <strong>seamless integration and efficient data handling</strong>{" "}
            between front-end and Node.js server via GraphQL.
          </span>,
          <span key="Simplified">
            <strong>Optimized software performance</strong> by simplifying
            complex code structures, <strong>bolstered security</strong> with
            cookie-based authentication, and{" "}
            <strong>enhanced data retrieval speed</strong> through Apollo
            client-side caching.
          </span>,
          <span key="Authored">
            Authored comprehensive unit, integration, and acceptance tests{" "}
            <strong>ensuring robust application reliability</strong>.
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
          [
            IconStaticName.JavaScript,
            IconStaticName.React,
            IconStaticName.StyledComponents,
            IconStaticName.Webpack,
            IconStaticName.JEST,
            IconStaticName.Enzyme,
            IconStaticName.ReactTestingLibrary,
            IconStaticName.Cypress,
            IconStaticName.Apollo,
            IconStaticName.GraphQL,
            IconStaticName.Docker,
            IconStaticName.Jenkins,
            IconStaticName.Buildkite,
            IconStaticName.Basecamp,
          ].includes(iconName),
        ),
        title: "Front-End Development",
      },
      {
        responsibilities: [
          <span key="Designed">
            Designed and implemented an API gateway with Express/Node.js and
            Apollo/GraphQL, leading to{" "}
            <strong>improved speed, accuracy, and reliability</strong> of
            backend communication.
          </span>,
          <span key="Contributed">
            Bolstered the system&apos;s{" "}
            <strong>robustness and scalability</strong> by enhancing the primary
            Ruby backend and contributing to various Ruby-based microservices.
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
          [
            IconStaticName.JavaScript,
            IconStaticName.Ruby,
            IconStaticName.RubyOnRails,
            IconStaticName.Sinatra,
            IconStaticName.JEST,
            IconStaticName.NodeJs,
            IconStaticName.Express,
            IconStaticName.Apollo,
            IconStaticName.GraphQL,
            IconStaticName.Docker,
            IconStaticName.Jenkins,
            IconStaticName.Buildkite,
          ].includes(iconName),
        ),
        title: "Backend Development",
      },
      {
        responsibilities: [
          <span key="Mentored">
            Invested in <strong>team growth</strong> by mentoring junior
            front-end developers, fostering faster problem-solving, efficient
            code production, and reduced errors.
          </span>,
        ],
        title: "Team Contribution",
      },
    ]}
    title="Full-Stack Developer"
  />
);

export { CompanyOmise };
