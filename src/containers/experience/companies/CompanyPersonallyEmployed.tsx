import { Company } from "@app/components/organisms/Company/Company";

import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyPersonallyEmployed: React.FC = () => (
  <Company
    date="May 2008 to September 2010"
    name="Alan Hadyk"
    projects={[
      {
        responsibilities: [
          <span key="Initiated">
            Embarked on a self-directed journey to acquire front-end development
            skills, setting the foundation for future roles and expertise.
          </span>,
          <span key="Secured">
            Leveraged personal networks to secure small-scale projects,
            showcasing adaptability and gaining practical coding experience.
          </span>,
          <span key="Applied">
            Applied newly learned skills to create interactive web-based data
            visualizations, including interactive charts and maps, enhancing the
            user experience for various projects.
          </span>,
          <span key="Cultivated">
            Built a reputation in the local tech community through consistent
            delivery of quality work, leading to referrals and repeat projects.
          </span>,
        ],
        techStack: iconsWithLabels.filter(({ iconName }) =>
          [
            IconStaticName.HTML,
            IconStaticName.CSS,
            IconStaticName.JavaScript,
            IconStaticName.JQuery,
          ].includes(iconName),
        ),
      },
    ]}
    position="Freelancer"
    themeClasses={{
      companyDescription: {
        responsibilitiesWrapper: {
          paddingBottom: "pb-0",
        },
      },
      timeline: {
        bottom: "bottom-0",
      },
    }}
  />
);

export { CompanyPersonallyEmployed };
