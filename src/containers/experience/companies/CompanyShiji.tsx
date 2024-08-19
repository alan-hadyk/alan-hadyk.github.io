import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyShiji: React.FC = () => (
  <Company
    date="2017 - 2018"
    name="Shiji Group"
    projects={[
      {
        responsibilities: [
          <span key="Streamlined">
            Streamlined hotel operations by developing a reservations module,
            improving scalability
          </span>,
          <span key="Optimized">
            Optimized user experience by using Redux Saga for state management,
            resulting in more predictable state transitions and streamlined
            application flows
          </span>,
          <span key="Increased">
            Increased product stability and user confidence by writing
            comprehensive unit and integration tests, resulting in a significant
            decrease in post-deployment bugs reported
          </span>,
          <span key="Mentored">
            Mentored junior developers by holding regular 1-on-1s, and teaching
            front-end design patterns such as Higher-order Functions, State
            Management, and Functions as Child Components
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
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
        ),
      },
    ]}
    position="Senior Front-End Developer"
    link="https://shijigroup.com/"
  />
);

export { CompanyShiji };
