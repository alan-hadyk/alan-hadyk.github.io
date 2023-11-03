import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

export const projectHealthcareSaaS = (format: ICompanyProps["format"]) => ({
  responsibilities: [
    <span key="Specialized">
      Involved in the development of a key, confidential module aimed at
      enhancing the healthcare service offerings,{" "}
      <strong>
        providing a significant potential advantage in a competitive market
      </strong>
      .
    </span>,
    <span key="Enhanced">
      Developed intuitive user interfaces targeted for healthcare professionals,
      aiming to <strong>improve user engagement and satisfaction</strong>.
    </span>,
    <span key="Performance">
      Implemented route lazy-loading,{" "}
      <strong>improving application loading speed and performance</strong>.
    </span>,
    <span key="Architecture">
      Modularized code into reusable components for better code readability and
      easier maintenance, crucial to{" "}
      <strong>long-term project sustainability</strong>.
    </span>,
    <span key="Efficient">
      Utilized GraphQL to optimize communication with backend services, aiming
      to{" "}
      <strong>
        enhance user experience and reduce API costs through quicker data
        retrieval
      </strong>
      .
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
  title: "Healthcare SaaS",
});
