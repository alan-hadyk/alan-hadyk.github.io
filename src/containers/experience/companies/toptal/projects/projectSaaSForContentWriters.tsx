import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

export const projectSaaSForContentWriters = (
  format: ICompanyProps["format"],
) => ({
  responsibilities: [
    <span key="Scratch">
      <strong>Built a React SPA from Scratch:</strong> Worked as the sole
      Front-End Engineer to revamp the internal tool, collaborating closely with
      one back-end engineer.
    </span>,
    <span key="WYSIWYG">
      <strong>Implemented WYSIWYG Editor:</strong> Took on the challenge to
      build a full-featured WYSIWYG editor tailored for different stakeholders,
      enhancing the user experience.
    </span>,
    <span key="Control">
      <strong>Role-based Access Control:</strong> Leveraged a permission system
      that enabled different user roles to interact based on their level of
      authority, improving system security and workflow.
    </span>,
    <span key="Fetching">
      <strong>Optimized Data Fetching:</strong> Employed React Query and Axios
      to streamline communication with the backend, making data fetching more
      efficient.
    </span>,
    <span key="Collaboration">
      <strong>Collaboration Features:</strong> Enabled real-time conversation
      features between various users to facilitate quicker decision-making and
      editing processes.
    </span>,
    <span key="Collaboration">
      <strong>Tech Stack Utilization:</strong> Leveraged Windi CSS and React
      Query to speed up the UI/UX development process, enabling the team to meet
      project deadlines.
    </span>,
  ],
  techStack: iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.TypeScript,
        IconStaticName.React,
        IconStaticName.WindiCSS,
        IconStaticName.ReactQuery,
        IconStaticName.Vite,
        IconStaticName.Axios,
        IconStaticName.REST,
        IconStaticName.Prisma,
      ].includes(iconName),
    )
    .map(invertIcon([IconStaticName.Prisma], format)),
  title: "SaaS for Content Writers",
});
