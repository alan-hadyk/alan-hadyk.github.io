import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Company } from "@app/components/organisms/Company/Company";
import { projectSaaSForContentWriters } from "@app/containers/experience/companies/toptal/projects/projectSaaSForContentWriters";
import { projectHealthcareSaaS } from "@app/containers/experience/companies/toptal/projects/projectHealthcareSaaS";

export const CompanyToptal: React.FC<
  Pick<ICompanyProps, "format" | "variant">
> = ({ format, variant }) => (
  <Company
    date="April 2021 - January 2023"
    format={format}
    projects={[
      projectSaaSForContentWriters(format),
      projectHealthcareSaaS(format),
    ]}
    name="Various Projects via Toptal"
    title="Front-End Engineer / Full-Stack Developer (Contract)"
    variant={variant}
  />
);
