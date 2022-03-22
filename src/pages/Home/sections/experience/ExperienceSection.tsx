import React, { memo } from "react";

import Section from "UI/molecules/Section";
import CompanyAlpha from "pages/Home/sections/experience/companies/CompanyAlpha";
import CompanyOmise from "pages/Home/sections/experience/companies/CompanyOmise";
import CompanyShiji from "pages/Home/sections/experience/companies/CompanyShiji";
import CompanyTribe from "pages/Home/sections/experience/companies/CompanyTribe";
import CompanySAP from "pages/Home/sections/experience/companies/CompanySAP";
import CompanyDiH from "pages/Home/sections/experience/companies/CompanyDiH";
import CompanyPersonallyEmployed from "pages/Home/sections/experience/companies/CompanyPersonallyEmployed";

const ExperienceSection = (): JSX.Element => (
  <Section
    dataCy="Experience"
    dataTestId="ExperienceSection"
    id="experience"
    title="Experience"
  >
    <CompanyAlpha />
    <CompanyTribe />
    <CompanyOmise />
    <CompanyShiji />
    <CompanySAP />
    <CompanyDiH />
    <CompanyPersonallyEmployed />
  </Section>
);

export default memo(ExperienceSection);
