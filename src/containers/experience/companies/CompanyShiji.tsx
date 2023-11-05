import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyShiji: React.FC = () => {
  const techStack = iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.TypeScript,
      IconStaticName.React,
      IconStaticName.Redux,
      IconStaticName.Ember,
      IconStaticName.Sass,
      IconStaticName.Docker,
      IconStaticName.QUnit,
      IconStaticName.Webpack,
      IconStaticName.NodeJs,
      IconStaticName.REST,
      IconStaticName.Jira,
      IconStaticName.Jenkins,
    ].includes(iconName),
  );

  return (
    <Company
      date="June 2017 to July 2018"
      name="Shiji"
      projects={[
        {
          techStack,
        },
        {
          responsibilities: [
            <span key="Played">
              Advanced the <strong>scalability and optimization</strong> of
              hotel operations through the development of a Reservations module
              in a hotel management application.
            </span>,
            <span key="Collaborated">
              Ensured a{" "}
              <strong>holistic and user-centric product development</strong> by
              collaborating with BAs and designers on UI/UX challenges.
            </span>,
            <span key="Contributed">
              Demonstrated proactive R&D and{" "}
              <strong>expedited decision-making</strong> via a React.js-based
              Proof of Concept.
            </span>,
          ],
          title: "Project Contribution",
        },
        {
          responsibilities: [
            <span key="Leveraged">
              Delivered <strong>robust and efficient feature rollouts</strong>{" "}
              using Ember.js with TypeScript.
            </span>,
            <span key="Utilized">
              Guaranteed an <strong>optimized user experience</strong> by
              leveraging Redux Saga for state management.
            </span>,
            <span key="Developed">
              Championed <strong>modularity and maintainability</strong> in
              development with reusable React components and Ember tools.
            </span>,
          ],
          title: "Development and Efficiency",
        },
        {
          responsibilities: [
            <span key="Authored">
              Strengthened <strong>product stability and user trust</strong> by
              authoring comprehensive unit and integration tests.
            </span>,
          ],
          title: "Testing and Reliability",
        },
        {
          responsibilities: [
            <span key="Mentored">
              Fostered <strong>team growth and consistent work quality</strong>{" "}
              by mentoring junior front-end developers.
            </span>,
          ],
          title: "Team and Mentoring",
        },
      ]}
      position="Senior Front-End Developer"
      link="https://shijigroup.com/"
    />
  );
};

export { CompanyShiji };
