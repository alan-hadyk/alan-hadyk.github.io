import { Section } from "components/molecules/Section/Section";

import { CompanyRealEstateStartup } from "containers/experience/companies/CompanyRealEstateStartup";
import { CompanyDiH } from "containers/experience/companies/CompanyDiH";
import { CompanyOmise } from "containers/experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "containers/experience/companies/CompanyPersonallyEmployed";
import { CompanySAP } from "containers/experience/companies/CompanySAP";
import { CompanyShiji } from "containers/experience/companies/CompanyShiji";
import { CompanyTribe } from "containers/experience/companies/CompanyTribe";
import { CompanyHealthcareSaas } from "containers/experience/companies/CompanyHealthcareSaas";
import { CompanySaaSForContentWriters } from "containers/experience/companies/CompanySaaSForContentWriters";
import {
  ExperienceContainerFormat,
  IExperienceContainerProps
} from "containers/experience/@types/ExperienceContainer";
import { SectionVariant } from "components/molecules/Section/@types/Section";

const ExperienceContainer: React.FC<IExperienceContainerProps> = ({
  format = ExperienceContainerFormat.Web
}) => (
  <Section
    id="experience"
    title="Experience"
    variant={
      format === ExperienceContainerFormat.Web
        ? SectionVariant.Dark
        : SectionVariant.Light
    }
  >
    <CompanySaaSForContentWriters />
    <CompanyHealthcareSaas />
    <CompanyRealEstateStartup />
    <CompanyTribe />
    <CompanyOmise />
    <CompanyShiji />
    <CompanySAP />
    <CompanyDiH />
    <CompanyPersonallyEmployed />
  </Section>
);

export { ExperienceContainer };
