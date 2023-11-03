import { Company } from "@app/components/organisms/Company/Company";
import { projectSaaSForContentWriters } from "@app/containers/experience/companies/toptal/projects/projectSaaSForContentWriters";
import { projectHealthcareSaaS } from "@app/containers/experience/companies/toptal/projects/projectHealthcareSaaS";
import { projectRealEstateStartup } from "@app/containers/experience/companies/toptal/projects/projectRealEstateStartup";
import { projectTribe } from "@app/containers/experience/companies/toptal/projects/projectTribe";

export const CompanyToptal: React.FC = () => (
  <Company
    date="April 2021 - January 2023"
    projects={[
      projectSaaSForContentWriters,
      projectHealthcareSaaS,
      projectRealEstateStartup,
      projectTribe,
    ]}
    name="Toptal"
    title="Front-End Engineer / Full-Stack Developer (Contract)"
  />
);
