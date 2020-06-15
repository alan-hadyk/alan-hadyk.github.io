import React, { memo } from "react";

import Section from "<molecules>/Section";
import Skills from "<organisms>/Skills";

import LanguagesCategory from "<pages>/Home/sections/skills/categories/LanguagesCategory";
import FrameworksCategory from "<pages>/Home/sections/skills/categories/FrameworksCategory";
import StateManagementCategory from "<pages>/Home/sections/skills/categories/StateManagementCategory";
import WebApisCategory from "<pages>/Home/sections/skills/categories/WebApisCategory";
import WebTechnologiesCategory from "<pages>/Home/sections/skills/categories/WebTechnologiesCategory";
import TestingCategory from "<pages>/Home/sections/skills/categories/TestingCategory";
import CICDCategory from "<pages>/Home/sections/skills/categories/CICDCategory";
import BundlersCategory from "<pages>/Home/sections/skills/categories/BundlersCategory";
import TaskManagementCategory from "<pages>/Home/sections/skills/categories/TaskManagementCategory";
import DesignToolsCategory from "<pages>/Home/sections/skills/categories/DesignToolsCategory";

const SkillsSection = (): JSX.Element => (
  <Section
    id="skills"
    title="Skills, Technology & Tools"
  >
    <Skills>
      <LanguagesCategory />
      <FrameworksCategory />
      <StateManagementCategory />
      <WebApisCategory />
      <WebTechnologiesCategory />
      <TestingCategory />
      <CICDCategory />
      <BundlersCategory />
      <TaskManagementCategory />
      <DesignToolsCategory />
    </Skills>
  </Section>
);

export default memo(SkillsSection);
