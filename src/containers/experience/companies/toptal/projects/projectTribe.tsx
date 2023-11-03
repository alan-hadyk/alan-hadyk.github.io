import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

export const projectTribe = (format: ICompanyProps["format"]) => ({
  responsibilities: [
    <span key="Notifications">
      Developed a full-stack notifications system to{" "}
      <strong>enhance user engagement on the platform</strong>.
    </span>,
    <span key="Performance">
      <strong>Reduced the amount of rendering required</strong> and{" "}
      <strong>fixed performance issues</strong> through the use of virtualized
      lists.
    </span>,
    <span key="Architecture">
      Improved the existing architecture for{" "}
      <strong>better maintainability and scalability</strong>.
    </span>,
    <span key="Deployment">
      <strong>Involved in the release and deployment processes</strong>,
      utilizing GitLab for version control and CI/CD.
    </span>,
    <span key="Testing">
      Authored unit and acceptance tests to maintain a high level of code
      quality and reliability, and to{" "}
      <strong>minimize issues found in production</strong>.
    </span>,
  ],
  techStack: iconsWithLabels
    .filter(({ iconName }) =>
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
    )
    .map(
      invertIcon(
        [IconStaticName.Apollo, IconStaticName.Cypress, IconStaticName.NextJs],
        format,
      ),
    ),
  title: "Tribe",
});
