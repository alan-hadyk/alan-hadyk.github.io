import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const projectSaaSForContentWriters = {
  responsibilities: [
    <span key="WYSIWYG">
      Created a React SaaS with a WYSIWYG editor, improving the content creation
      process
    </span>,
    <span key="Implemented">
      Implemented a permission system by creating tailored UIs and user flows
      based on API permissions, improving security, and allowing for user
      interactions based on their roles
    </span>,
    <span key="network">
      Cut network requests by up to 70% with TanStack Query caching, eliminating
      a data-fetching bottleneck
    </span>,
    <span key="Enabled">
      Enabled real-time conversations between users with WebSocket, resulting in
      faster decision-making
    </span>,
    <span key="development">
      Sped up UI development with Windi CSS, enabling the team to meet tight
      project deadlines
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
