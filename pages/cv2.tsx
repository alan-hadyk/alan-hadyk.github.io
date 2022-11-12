// import { Header } from "components/organisms/Header/Header";
// import { AboutMeContainer } from "containers/aboutMe/AboutMeContainer";
// import { ContactContainer } from "containers/contact/ContactContainer";
// import { DashboardContainer } from "containers/dashboard/DashboardContainer";
// import { ExperienceContainer } from "containers/experience/ExperienceContainer";
// import { SkillsContainer } from "containers/skills/SkillsContainer";
// import { MainLayout } from "layouts/MainLayout";
// import { TNextPageWithLayout } from "types/next";
// import { PDFViewer } from "@react-pdf/renderer";
// import { PDF } from "components/atoms/PDF";
import { companyDiHProps } from "containers/experience/companies/CompanyDiH";
import { companyIkoBrandsProps } from "containers/experience/companies/CompanyIkoBrands";
import { companyOmiseProps } from "containers/experience/companies/CompanyOmise";
import { companyPersonallyEmployedProps } from "containers/experience/companies/CompanyPersonallyEmployed";
import { companySAPProps } from "containers/experience/companies/CompanySAP";
import { companyShijiProps } from "containers/experience/companies/CompanyShiji";
import { companyStealthHealthcareSaasStartupProps } from "containers/experience/companies/CompanyStealthHealthcareSaasStartup";
import { companyStealthRealEstateStartupProps } from "containers/experience/companies/CompanyStealthRealEstateStartup";
import { companyTribeProps } from "containers/experience/companies/CompanyTribe";
import { bundlersCategory } from "containers/skills/categories/bundlersCategory";
import { cicdCategory } from "containers/skills/categories/cicdCategory";
import { cssToolsCategory } from "containers/skills/categories/cssToolsCategory";
import { designToolsCategory } from "containers/skills/categories/designToolsCategory";
import { frameworksCategory } from "containers/skills/categories/frameworksCategory";
import { languagesCategory } from "containers/skills/categories/languagesCategory";
import { stateManagementCategory } from "containers/skills/categories/stateManagementCategory";
import { taskManagementCategory } from "containers/skills/categories/taskManagementCategory";
import { testingCategory } from "containers/skills/categories/testingCategory";
import { webApisCategory } from "containers/skills/categories/webApisCategory";
import { webTechnologiesCategory } from "containers/skills/categories/webTechnologiesCategory";
import dynamic from "next/dynamic";

const PDF = dynamic(
  import("components/atoms/PDF/PDF").then((module) => module.PDF) as any,
  { ssr: false }
);

const props: any = {
  document: {
    author: "Alan Hadyk",
    title: "CV"
  },
  experience: [
    companyIkoBrandsProps,
    companyStealthHealthcareSaasStartupProps,
    companyStealthRealEstateStartupProps,
    companyTribeProps,
    companyOmiseProps,
    companyShijiProps,
    companySAPProps,
    companyDiHProps,
    companyPersonallyEmployedProps
  ],
  sidebarInfo: [
    { iconName: "pin", link: "", text: "Katowice, Poland" },
    { iconName: "envelope", link: "", text: "alan.hadyk@gmail.com" },
    {
      iconName: "globe",
      link: "https://alanhadyk.dev/",
      text: "https://alanhadyk.dev/"
    },
    {
      iconName: "linkedIn",
      link: "https://www.linkedin.com/in/alan-hadyk-78738099/?originalSubdomain=pl",
      text: "LinkedIn"
    },
    {
      iconName: "github",
      link: "https://github.com/alan-hadyk",
      text: "GitHub"
    }
  ],
  skills: [
    languagesCategory,
    frameworksCategory,
    stateManagementCategory,
    webApisCategory,
    webTechnologiesCategory,
    cssToolsCategory,
    testingCategory,
    cicdCategory,
    bundlersCategory,
    taskManagementCategory,
    designToolsCategory
  ]
};

const CVPage: React.FC = () =>
  typeof document !== undefined ? <PDF {...props} /> : <div />;

// CVPage.getLayout = (page) => <MainLayout title="Alan Hadyk">{page}</MainLayout>;

export default CVPage;
