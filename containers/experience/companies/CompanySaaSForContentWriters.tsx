import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";
import { experience } from "containers/experience/config";

const companySaaSForContentWritersProps: ICompanyProps = {
  date: "September 2022 - January 2023",
  iconsWithLabels: experience.filter(({ iconName }) => {
    return [
      "html",
      "css",
      "javaScript",
      "typeScript",
      "react",
      "windiCss",
      "reactQuery",
      "vite",
      "axios",
      "rest",
      "prisma"
    ].includes(iconName);
  }),
  name: "SaaS for Content writers",
  responsibilities: [
    <span key="Engineered">
      Engineered a TypeScript-based React single-page application using Vite,{" "}
      <strong>enhancing efficiency by 20%</strong> and{" "}
      <strong>decreasing development time by 25%</strong>.
    </span>,
    <span key="Designed">
      Designed a scalable app architecture utilizing design patterns like Dumb &
      Smart Components and Atomic Design, incorporating React Query and Windi
      CSS to <strong>reduce UI design time by 30%</strong>.
    </span>,
    <span key="Employed">
      Employed React Query and Axios for robust communication with backend
      systems, <strong>optimizing resource management</strong> and streamlining
      data fetching.
    </span>
  ],
  title: "Front-End Architect"
};

const CompanySaaSForContentWriters: React.FC = () => (
  <Company {...companySaaSForContentWritersProps} />
);

export { CompanySaaSForContentWriters, companySaaSForContentWritersProps };
