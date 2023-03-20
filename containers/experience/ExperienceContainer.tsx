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

const ExperienceContainer: React.FC = () => (
  <Section id="experience" title="Experience">
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
