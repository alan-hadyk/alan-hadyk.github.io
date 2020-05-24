import React, { memo } from "react";

import Section from "<molecules>/Section";
import CompanyOmise from "<pages>/Home/sections/experience/companies/CompanyOmise";

// TODO: Write tests when this section will be ready
const ExperienceSection = (): JSX.Element => (
  <Section
    id="experience"
    title="Experience"
  >
    <CompanyOmise />
  </Section>
);

export default memo(ExperienceSection);
