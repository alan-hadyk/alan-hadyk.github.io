import React, { memo } from "react";

import Section from "<molecules>/Section";
import Skills from "<organisms>/Skills";

import LanguagesCategory from "<pages>/Home/sections/skills/categories/LanguagesCategory";

const SkillsSection = (): JSX.Element => (
  <Section
    id="skills"
    title="Skills, Technology & Tools"
  >
    <Skills>
      <LanguagesCategory />
      <LanguagesCategory />
      <LanguagesCategory />
      <LanguagesCategory />
      <LanguagesCategory />
      <LanguagesCategory />
      <LanguagesCategory />
    </Skills>
  </Section>
);

export default memo(SkillsSection);
