import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Company } from "components/organisms/Company/Company";

const iconsWithLabels: ICompanyProps["iconsWithLabels"] = [
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandTS",
    label: "Typescript"
  },
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandWindi",
    label: "Windi CSS"
  },
  {
    iconName: "brandReactQuery",
    label: "React Query"
  },
  {
    iconName: "brandVite",
    label: "Vite"
  },
  {
    iconName: "brandAxios",
    label: "Axios"
  },
  {
    iconName: "brandREST",
    label: "REST"
  }
];

const responsibilities: ICompanyProps["responsibilities"] = [
  <span
    data-cy="ImplementNewReactAppFromScratch"
    key="implement-new-react-app-from-scratch"
  >
    <strong>Implement</strong> new React app from scratch, using Windi CSS,
    React Query and Vite.
  </span>,
  <span data-cy="DesignAppsArchitecture" key="design-apps-architecture">
    <strong>Design app&apos;s architecture</strong> by separating concerns such
    as business logic, API, UI, and other layers.
  </span>,
  <span data-cy="DemonstrateExpertise" key="demonstrate-expertise">
    <strong>Demonstrate expertise</strong> in the utilization of REST, Axios and
    React Query to communicate with backend
  </span>
];

const CompanyIkoBrands: React.FC = () => (
  <Company
    dataCy="CompanyIkoBrands"
    date="since September 2022"
    iconsWithLabels={iconsWithLabels}
    // link="https://ikontent.io/"
    name="Iko Brands"
    responsibilities={responsibilities}
    title="Senior React Developer"
  />
);

export { CompanyIkoBrands };
