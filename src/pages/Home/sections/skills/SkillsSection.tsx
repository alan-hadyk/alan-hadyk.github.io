import React, { memo } from "react";

import Section from "<molecules>/Section";
import FlexContainer from "<layout>/FlexContainer";

import LanguagesCategory from "<pages>/Home/sections/skills/categories/LanguagesCategory";
import FrameworksCategory from "<pages>/Home/sections/skills/categories/FrameworksCategory";
import StateManagementCategory from "<pages>/Home/sections/skills/categories/StateManagementCategory";
import WebApisCategory from "<pages>/Home/sections/skills/categories/WebApisCategory";
import WebTechnologiesCategory from "<pages>/Home/sections/skills/categories/WebTechnologiesCategory";
import CSSToolsCategory from "<pages>/Home/sections/skills/categories/CSSToolsCategory";
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
    <FlexContainer
      alignItems="flex-start"
      flexFlow="row wrap"
      gap="spacing48"    
    >
      <LanguagesCategory />
      <FrameworksCategory />
      <StateManagementCategory />
      <WebApisCategory />
      <WebTechnologiesCategory />
      <CSSToolsCategory />
      <TestingCategory />
      <CICDCategory />
      <BundlersCategory />
      <TaskManagementCategory />
      <DesignToolsCategory />
    </FlexContainer>
  </Section>
);

export default memo(SkillsSection);
