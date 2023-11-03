import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanySAP: React.FC = () => {
  const techStack = iconsWithLabels.filter(({ iconName }) =>
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
  );
  return (
    <Company
      date="November 2015 to May 2017"
      link="https://www.sap.com/"
      name="SAP"
      projects={[
        {
          techStack,
        },
        {
          responsibilities: [
            <span key="Integral">
              Ensured{" "}
              <strong>streamlined content production and consistency</strong> as
              an integral member of a team, enabling standardized Markdown
              documentation for YaaS microservices.
            </span>,
            <span key="Played">
              Boosted <strong>efficiency in content deployment</strong> by
              participating in automation of the integration of Markdown
              documents into microservice documentation via DocPad.
            </span>,
            <span key="development">
              Drove{" "}
              <strong>
                stakeholder engagement and information accessibility
              </strong>{" "}
              as the main front-end developer of the Business Portal, a
              centralized documentation platform, making pivotal choices related
              to front-end technologies.
            </span>,
          ],
          title: "Project Contribution",
        },
        {
          responsibilities: [
            <span key="Contributed">
              Contributed to the &quot;Hack Your Career&quot; program by
              delivering university lectures on HTML, CSS, and JavaScript. This
              initiative indirectly{" "}
              <strong>facilitated the recruitment of talented interns</strong>{" "}
              for the company.
            </span>,
          ],
          title: "Education and Outreach",
        },
      ]}
      title="Front-End Developer"
    />
  );
};

export { CompanySAP };
