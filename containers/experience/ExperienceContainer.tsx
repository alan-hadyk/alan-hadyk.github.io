import { Section } from "components/molecules/Section";

import { CompanyStealthRealEstateStartup } from "containers/experience/companies/CompanyStealthRealEstateStartup";
import { CompanyDiH } from "containers/experience/companies/CompanyDiH";
import { CompanyOmise } from "containers/experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "containers/experience/companies/CompanyPersonallyEmployed";
import { CompanySAP } from "containers/experience/companies/CompanySAP";
import { CompanyShiji } from "containers/experience/companies/CompanyShiji";
import { CompanyTribe } from "containers/experience/companies/CompanyTribe";
import { CompanyStealthHealthcareSaasStartup } from "containers/experience/companies/CompanyStealthHealthcareSaasStartup";

const ExperienceContainer: React.FC = () => (
  <Section dataCy="Experience" id="experience" title="Experience">
    <CompanyStealthHealthcareSaasStartup />
    <CompanyStealthRealEstateStartup />
    <CompanyTribe />
    <CompanyOmise />
    <CompanyShiji />
    <CompanySAP />
    <CompanyDiH />
    <CompanyPersonallyEmployed />
  </Section>
);

export { ExperienceContainer };
