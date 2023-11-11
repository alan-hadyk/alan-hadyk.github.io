import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const projectHealthcareSaaS = {
  responsibilities: [
    <span key="Encounters">
      Developed Encounters, an AI-powered healthcare form that improves
      diagnostic accuracy
    </span>,
    <span key="Reduced">
      Reduced API costs by 30% with GraphQL, optimizing communication with
      back-end services
    </span>,
    <span key="Performance">
      Implemented route lazy loading, reducing initial bundle size by 40%,
      leading to faster loading times
    </span>,
  ],
  techStack: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.TypeScript,
      IconStaticName.React,
      IconStaticName.Tailwind,
      IconStaticName.GraphQL,
      IconStaticName.Apollo,
      IconStaticName.Prisma,
    ].includes(iconName),
  ),
  title: "Healthcare SaaS",
};
