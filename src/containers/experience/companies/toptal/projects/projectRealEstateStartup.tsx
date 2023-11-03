import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

export const projectRealEstateStartup = (format: ICompanyProps["format"]) => ({
  responsibilities: [
    <span key="MVP">
      Built the MVP of a Next.js app aimed at a consumer-focused real estate
      platform, <strong>emphasizing quick time-to-market</strong>.
    </span>,
    <span key="Integrations">
      Seamlessly <strong>integrated a .NET backend using GraphQL API</strong>,
      along with <strong>Auth0 for authentication</strong> and{" "}
      <strong>Plaid for open banking</strong>, creating a comprehensive user
      experience.
    </span>,
    <span key="Performance">
      Employed server-side rendering and implemented Apollo server-side cache
      hydration to client-side, aiming to{" "}
      <strong>improve performance and scalability</strong>.
    </span>,
    <span key="Error">
      Utilized Sentry for <strong>real-time error tracking</strong>, focusing on{" "}
      <strong>system reliability</strong>.
    </span>,
    <span key="Practices">
      Maintained a high standard of code quality, adhering to best practices to{" "}
      <strong>minimize issues during the QA phase</strong>.
    </span>,
  ],
  techStack: iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.TypeScript,
        IconStaticName.React,
        IconStaticName.NextJs,
        IconStaticName.Tailwind,
        IconStaticName.Auth0,
        IconStaticName.JEST,
        IconStaticName.ReactTestingLibrary,
        IconStaticName.Apollo,
        IconStaticName.GraphQL,
        IconStaticName.Docker,
        IconStaticName.Axios,
        IconStaticName.Plaid,
        IconStaticName.Sentry,
      ].includes(iconName),
    )
    .map(
      invertIcon(
        [IconStaticName.Apollo, IconStaticName.Auth0, IconStaticName.NextJs],
        format,
      ),
    ),
  title: "Real Estate Startup",
});
