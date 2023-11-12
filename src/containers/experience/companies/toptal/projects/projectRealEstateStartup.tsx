import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const projectRealEstateStartup = {
  responsibilities: [
    <span key="consumer">
      Built a consumer-facing real estate platform MVP using Next.js, Apollo,
      and Auth0
    </span>,
    <span key="Integrated">
      Integrated a .NET back end using GraphQL, Auth0 for authentication, and
      Plaid for open banking
    </span>,
    <span key="Implemented">
      Implemented server-side rendering to optimize application performance by
      integrating Apollo Client for cache hydration, speeding up initial page
      loads on the client side
    </span>,
    <span key="Sentry">
      Used Sentry for real-time error tracking, minimizing the number of issues
      and increasing system reliability
    </span>,
  ],
  techStack: iconsWithLabels.filter(({ iconName }) =>
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
  ),
  title: "Real Estate Startup",
};
