import React, { memo } from "react";

import Section from "<molecules>/Section";
import CompanyOmise from "<pages>/Home/sections/experience/companies/CompanyOmise";
import CompanyShiji from "<pages>/Home/sections/experience/companies/CompanyShiji";
import CompanySAP from "<pages>/Home/sections/experience/companies/CompanySAP";
import CompanyDiH from "<pages>/Home/sections/experience/companies/CompanyDiH";
import CompanyPersonallyEmployed from "<pages>/Home/sections/experience/companies/CompanyPersonallyEmployed";

// TODO: Write tests when this section will be ready
const ExperienceSection = (): JSX.Element => (
  <Section
    id="experience"
    title="Experience"
  >
    <CompanyOmise />
    <CompanyShiji />
    <CompanySAP />
    <CompanyDiH />
    <CompanyPersonallyEmployed />
  </Section>
);

export default memo(ExperienceSection);
