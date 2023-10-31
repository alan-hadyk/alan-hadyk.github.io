import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

export const projectHealthcareSaaS = (format: ICompanyProps["format"]) => ({
  responsibilities: [
    <span key="Specialized">
      <strong>Specialized Module:</strong> Involved in the development of a key,
      confidential module aimed at enhancing the healthcare service offerings,
      providing a significant potential advantage in a competitive market.
    </span>,
    <span key="Enhanced">
      <strong>Enhanced UI/UX:</strong> Developed intuitive user interfaces
      targeted for healthcare professionals, aiming to improve user engagement
      and satisfaction.
    </span>,
    <span key="Performance">
      <strong>Performance Optimization:</strong> Implemented route lazy-loading
      and modularized code into reusable components, intending to improve
      application loading speed and performance.
    </span>,
    <span key="Architecture">
      <strong>Architecture Refinement:</strong> Improved the application&apos;s
      architecture for better code readability and easier maintenance, crucial
      for long-term project sustainability.
    </span>,
    <span key="Efficient">
      <strong>Efficient Data Fetching:</strong> Utilized GraphQL to optimize
      communication with backend services, aiming to enhance user experience
      through quicker data retrieval.
    </span>,
  ],
  techStack: iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.TypeScript,
        IconStaticName.React,
        IconStaticName.Tailwind,
        IconStaticName.GraphQL,
        IconStaticName.Apollo,
        IconStaticName.Prisma,
      ].includes(iconName),
    )
    .map(invertIcon([IconStaticName.Prisma], format)),
  title: "Healthcare SaaS (Project Halted)",
});
