import React, { memo } from "react";
import { Masonry } from "masonic";

import Section from "<molecules>/Section";
import SkillsItem from "<molecules>/SkillsItem";

import languagesCategory from "<pages>/Home/sections/skills/categories/languagesCategory";
import frameworksCategory from "<pages>/Home/sections/skills/categories/frameworksCategory";
import stateManagementCategory from "<pages>/Home/sections/skills/categories/stateManagementCategory";
import webApisCategory from "<pages>/Home/sections/skills/categories/webApisCategory";
import webTechnologiesCategory from "<pages>/Home/sections/skills/categories/webTechnologiesCategory";
import cssToolsCategory from "<pages>/Home/sections/skills/categories/cssToolsCategory";
import testingCategory from "<pages>/Home/sections/skills/categories/testingCategory";
import cicdCategory from "<pages>/Home/sections/skills/categories/cicdCategory";
import bundlersCategory from "<pages>/Home/sections/skills/categories/bundlersCategory";
import taskManagementCategory from "<pages>/Home/sections/skills/categories/taskManagementCategory";
import designToolsCategory from "<pages>/Home/sections/skills/categories/designToolsCategory";

const SkillsSection = (): JSX.Element => (
  <Section
    id="skills"
    title="Skills, Technology & Tools"
  >
    <Masonry
      data-testid="Masonry"
      columnGutter={48}
      columnWidth={300}
      items={[
        languagesCategory,
        frameworksCategory,
        stateManagementCategory,
        webApisCategory,
        webTechnologiesCategory,
        cssToolsCategory,
        testingCategory,
        cicdCategory,
        bundlersCategory,
        taskManagementCategory,
        designToolsCategory
      ]}
      render={SkillsItem}
    />
  </Section>
);

export default memo(SkillsSection);
