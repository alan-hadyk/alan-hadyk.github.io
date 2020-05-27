import React, { memo } from "react";

import Section from "<molecules>/Section";
import CompanyOmise from "<pages>/Home/sections/experience/companies/CompanyOmise";
import CompanyShiji from "<pages>/Home/sections/experience/companies/CompanyShiji";

// TODO: Write tests when this section will be ready
const ExperienceSection = (): JSX.Element => (
  <Section
    id="experience"
    title="Experience"
  >
    <CompanyOmise />
    <CompanyShiji />
  </Section>
);

export default memo(ExperienceSection);
