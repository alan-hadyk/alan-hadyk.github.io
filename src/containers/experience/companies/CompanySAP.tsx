import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanySAP: React.FC = () => (
  <Company
    date="2015 - 2017"
    link="https://www.sap.com/"
    name="SAP Hybris"
    projects={[
      {
        responsibilities: [
          <span key="Streamlined">
            Streamlined content production and improved consistency, enabling
            standardized Markdown documentation for YaaS microservices
          </span>,
          <span key="Improved">
            Improved content deployment efficiency by automating the integration
            of Markdown documents into microservice documentation, resulting in
            more timely and consistent service documentation updates
          </span>,
          <span key="stakeholder">
            Drove stakeholder engagement as the primary front-end developer of
            the Business Portal, a centralized documentation platform, making
            key decisions related to front-end technologies
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
          [
            IconStaticName.Gulp,
            IconStaticName.JavaScript,
            IconStaticName.CoffeeScript,
            IconStaticName.React,
            IconStaticName.Redux,
            IconStaticName.CSSModules,
            IconStaticName.Webpack,
            IconStaticName.Docpad,
            IconStaticName.JEST,
            IconStaticName.Enzyme,
          ].includes(iconName),
        ),
      },
    ]}
    position="Front-End Developer"
  />
);

export { CompanySAP };
