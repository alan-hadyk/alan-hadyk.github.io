import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";

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
    iconName: IconStaticName.TypeScript,
    label: "Typescript"
  },
  {
    iconName: IconStaticName.React,
    label: "React"
  },
  {
    iconName: IconStaticName.WindiCSS,
    label: "Windi CSS"
  },
  {
    iconName: IconStaticName.ReactQuery,
    label: "React Query"
  },
  {
    iconName: IconStaticName.Vite,
    label: "Vite"
  },
  {
    iconName: IconStaticName.Axios,
    label: "Axios"
  },
  {
    iconName: IconStaticName.REST,
    label: "REST"
  },
  {
    iconName: IconStaticName.Prisma,
    label: "Prisma"
  }
];

const companySaaSForContentWritersProps: ICompanyProps = {
  date: "September 2022 - January 2023",
  iconsWithLabels,
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
