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
    <span key="created-mvp">
      <strong>Created</strong> MVP of a React app for Content writers from
      scratch using TypeScript, Windi CSS, React Query and Vite.
    </span>,
    <span key="designed-apps-architecture">
      <strong>Designed app&apos;s architecture</strong> with the help of various
      design patterns, such as Dumb & Smart Components and Atomic Design.
    </span>,
    <span key="demonstrated-expertise">
      <strong>Demonstrated expertise</strong> in the utilization of REST, Axios
      and React Query to communicate with backend
    </span>
  ],
  title: "Front-end Architect"
};

const CompanySaaSForContentWriters: React.FC = () => (
  <Company {...companySaaSForContentWritersProps} />
);

export { CompanySaaSForContentWriters, companySaaSForContentWritersProps };
