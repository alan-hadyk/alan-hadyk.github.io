import { Company } from "@app/components/organisms/Company/Company";

import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";

const CompanyMixmax: React.FC = () => (
  <Company
    date="Jan 2024 - June 2024"
    link="https://www.mixmax.com/"
    name="Mixmax"
    projects={[
      {
        responsibilities: [
          <span key="Refactored">
            Refactored legacy Backbone module into a modern React code,
            improving the performance of front end
          </span>,
          <span key="Implemented">
            Implemented a service layer designed to communicate with S3,
            simplifying the content upload process
          </span>,
          <span key="Fixed">
            Fixed several P1 issues on time, mitigating financial loss and
            customer dissatisfaction
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
          [
            IconStaticName.JavaScript,
            IconStaticName.TypeScript,
            IconStaticName.React,
            IconStaticName.StyledComponents,
            IconStaticName.Webpack,
            IconStaticName.JEST,
            IconStaticName.ReactTestingLibrary,
            IconStaticName.Cypress,
            IconStaticName.Docker,
            IconStaticName.NodeJs,
            IconStaticName.Express,
          ].includes(iconName),
        ),
      },
    ]}
    position="Senior Software Engineer"
  />
);

export { CompanyMixmax };
