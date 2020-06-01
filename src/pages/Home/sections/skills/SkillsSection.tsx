import React, { memo } from "react";

import Section from "<molecules>/Section";

const SkillsSection = (): JSX.Element => (
  <Section
    id="skills"
    title="Skills, Technology & Tools"
  >
    Skills
  </Section>
);

export default memo(SkillsSection);
