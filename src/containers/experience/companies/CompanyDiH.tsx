import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyDiH: React.FC = () => (
  <Company
    date="2010 to 2015"
    link="https://dih.pl/"
    name="DiH"
    projects={[
      {
        responsibilities: [
          <span key="Transformed">
            Transformed Photoshop designs into 60+ e-commerce stores using
            PrestaShop, JavaScript, jQuery, HTML, and CSS, bringing in an
            estimated 2M+ PLN in revenue
          </span>,
          <span key="Spearheaded">
            Advocated for the adoption of CSS preprocessors and JavaScript task
            runners, improving team productivity
          </span>,
          <span key="Introduced">
            Introduced the use of Redmine as a project management tool, reducing
            email-based communication
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
          [
            IconStaticName.Grunt,
            IconStaticName.HTML,
            IconStaticName.CSS,
            IconStaticName.JavaScript,
            IconStaticName.Sass,
            IconStaticName.LESS,
            IconStaticName.JQuery,
            IconStaticName.Prestashop,
            IconStaticName.Redmine,
          ].includes(iconName),
        ),
      },
    ]}
    position="Front-End Developer"
  />
);

export { CompanyDiH };
