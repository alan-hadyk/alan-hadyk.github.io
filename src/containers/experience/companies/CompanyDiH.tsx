import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyDiH: React.FC = () => {
  const techStack = iconsWithLabels.filter(({ iconName }) =>
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
  );

  return (
    <Company
      date="October 2010 to October 2015"
      link="https://dih.pl/"
      name="DiH"
      projects={[
        {
          responsibilities: [
            <span key="Transformed">
              Transformed Photoshop designs into{" "}
              <strong>60+ live e-commerce shops</strong>, utilizing PrestaShop,
              JavaScript, jQuery, HTML, and CSS, bringing an estimated{" "}
              <strong>2M+ PLN in revenue</strong> to the company.
            </span>,
            <span key="Spearheaded">
              Spearheaded UI development processes, resulting in enhanced design
              consistency and streamlined development cycles.
            </span>,
            <span key="Introduced">
              Introduced the use of Redmine as a project management tool,
              significantly reducing email-based communication and improving
              overall <strong>project management efficiency</strong>.
            </span>,
            <span key="Championed">
              Championed the adoption of CSS preprocessors, UI pattern
              libraries, and JavaScript task runners,{" "}
              <strong>elevating team productivity and coding efficiency</strong>
              .
            </span>,
          ],
          techStack,
        },
      ]}
      position="Front-End Developer"
    />
  );
};

export { CompanyDiH };
