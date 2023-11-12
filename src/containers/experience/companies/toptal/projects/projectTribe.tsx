import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const projectTribe = {
  responsibilities: [
    <span key="Notifications">
      Created a notification system by developing API endpoints in NestJS and
      integrating them into a Next.js UI, resulting in increased user activity
      and improved user retention rates
    </span>,
    <span key="Performance">
      Resolved performance issues with large datasets by implementing
      virtualized lists that only render items in view, improving UI
      responsiveness and reducing load times
    </span>,
    <span key="release">
      Improved the release and deployment processes by simplifying approval
      protocols to require only QA sign-off, resulting in a faster release cycle
      and quicker feature deployment
    </span>,
  ],
  techStack: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.TypeScript,
      IconStaticName.React,
      IconStaticName.NextJs,
      IconStaticName.Tailwind,
      IconStaticName.Chakra,
      IconStaticName.JEST,
      IconStaticName.ReactTestingLibrary,
      IconStaticName.Cypress,
      IconStaticName.NodeJs,
      IconStaticName.NestJs,
      IconStaticName.Apollo,
      IconStaticName.GraphQL,
      IconStaticName.Docker,
      IconStaticName.GitLab,
    ].includes(iconName),
  ),
  title: "Bettermode",
};
