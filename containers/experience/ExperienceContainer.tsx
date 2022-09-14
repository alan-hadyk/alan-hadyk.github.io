import { Section } from "components/molecules/Section";

import { CompanyStealthRealEstateStartup } from "containers/experience/companies/CompanyStealthRealEstateStartup";

const ExperienceContainer: React.FC = () => (
  <Section dataCy="Experience" id="experience" title="Experience">
    <CompanyStealthRealEstateStartup />
    {/* <CompanyTribe />
    <CompanyOmise />
    <CompanyShiji />
    <CompanySAP />
    <CompanyDiH />
    <CompanyPersonallyEmployed /> */}
  </Section>
);

export { ExperienceContainer };
