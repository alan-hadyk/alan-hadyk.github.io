import { Company } from "@app/components/organisms/Company/Company";
import { projectSaaSForContentWriters } from "@app/containers/experience/companies/toptal/projects/projectSaaSForContentWriters";
import { projectHealthcareSaaS } from "@app/containers/experience/companies/toptal/projects/projectHealthcareSaaS";
import { projectRealEstateStartup } from "@app/containers/experience/companies/toptal/projects/projectRealEstateStartup";
import { projectTribe } from "@app/containers/experience/companies/toptal/projects/projectTribe";

export const CompanyToptal: React.FC = () => (
  <Company
    date="Apr 2021 - Jan 2023"
    link="https://www.toptal.com/"
    projects={[
      projectSaaSForContentWriters,
      projectHealthcareSaaS,
      projectRealEstateStartup,
      projectTribe,
    ]}
    name="Toptal"
    position="Senior Software Developer (Consulting Agency)"
  />
);
