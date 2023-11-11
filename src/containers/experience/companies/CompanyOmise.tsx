import { Company } from "@app/components/organisms/Company/Company";

import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";

const CompanyOmise: React.FC = () => (
  <Company
    date="Aug 2018 to Mar 2021"
    link="https://www.opn.ooo/th-en/"
    name="Opn"
    projects={[
      {
        responsibilities: [
          <span key="Architected">
            Architected a React merchant dashboard that served over 22,000
            brands worldwide
          </span>,
          <span key="Developed">
            Designed and implemented an API gateway with Express, Node.js,
            Apollo, and GraphQL, improving the speed, accuracy, and reliability
            of backend communication
          </span>,
          <span key="Collaborated">
            Worked with the CTO, product managers, and back-end engineers to
            provide integration and efficient data handling between the front
            end and a Node.js server via GraphQL
          </span>,
          <span key="Integrated">
            Integrated 3 banks with gRPC and Ruby microservices, extending
            payment capabilities
          </span>,
          <span key="Improved">
            Improved security with cookie-based authentication and data
            retrieval speed through Apollo caching
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
            IconStaticName.Ruby,
            IconStaticName.RubyOnRails,
            IconStaticName.Sinatra,
            IconStaticName.NodeJs,
            IconStaticName.Express,
          ].includes(iconName),
        ),
      },
    ]}
    position="Full-Stack Developer"
  />
);

export { CompanyOmise };
