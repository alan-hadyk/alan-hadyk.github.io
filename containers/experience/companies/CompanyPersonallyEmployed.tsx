import { Company } from "components/organisms/Company/Company";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: IconStaticName.HTML,
    label: "HTML"
  },
  {
    iconName: IconStaticName.CSS,
    label: "CSS"
  },
  {
    iconName: IconStaticName.JavaScript,
    label: "Javascript"
  },
  {
    iconName: IconStaticName.JQuery,
    label: "jQuery"
  }
];

const companyPersonallyEmployedProps: ICompanyProps = {
  date: "May 2008 to September 2010",
  iconsWithLabels,
  name: "Alan Hadyk",
  responsibilities: [
    <span key="Leveraged">
      Leveraged personal referral networks to secure small job order contracts,
      expanding the freelance client base.
    </span>,
    <span key="Initiated">
      Initiated self-motivation to acquire front-end development skills,
      enhancing personal marketability and expertise.
    </span>,
    <span key="Cultivated">
      Cultivated strong ties to the technology community through a demonstrated
      ability to deliver quality work.
    </span>,
    <span key="Coordinated">
      Coordinated the development of interactive web-based data visualizations,
      including interactive charts and maps, enhancing user experience for
      clients&apos; websites.
    </span>
  ],
  title: "Freelancer"
};

const CompanyPersonallyEmployed: React.FC = () => (
  <Company
    themeClasses={{
      companyDescription: {
        responsibilitiesWrapper: {
          paddingBottom: "pb-0"
        }
      },
      timeline: {
        bottom: "bottom-0"
      }
    }}
    {...companyPersonallyEmployedProps}
  />
);

export { CompanyPersonallyEmployed };
