import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const projectSaaSForContentWriters = {
  responsibilities: [
    <span key="sole">
      Worked as the sole Front-End Engineer to{" "}
      <strong>revamp front-end of the main product</strong>, collaborating
      closely with one back-end engineer.
    </span>,
    <span key="WYSIWYG">
      Took on the challenge to{" "}
      <strong>build a full-featured WYSIWYG editor</strong> tailored to
      different stakeholders, enhancing the user experience.
    </span>,
    <span key="permission">
      <strong>Leveraged a permission system</strong> that enabled different user
      roles to interact based on their level of authority,{" "}
      <strong>improving system security and workflow</strong>.
    </span>,
    <span key="Fetching">
      Employed React Query and Axios to streamline communication with the
      backend, <strong>making data fetching more efficient</strong>.
    </span>,
    <span key="Collaboration">
      <strong>Enabled real-time conversation features</strong> between various
      users to facilitate quicker decision-making and editing processes.
    </span>,
    <span key="Collaboration">
      Leveraged Windi CSS and Atomic Design to speed up the UI/UX development
      process, <strong>enabling the team to meet project deadlines</strong>.
    </span>,
  ],
  techStack: iconsWithLabels.filter(({ iconName }) =>
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
  ),
  title: "SaaS for Content Writers",
};
