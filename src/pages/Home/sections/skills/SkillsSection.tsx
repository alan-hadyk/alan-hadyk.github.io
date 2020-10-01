import React, { memo } from "react";
import { Masonry } from "masonic";

import Section from "<molecules>/Section";
import SkillsItem from "<molecules>/SkillsItem";
import Responsive from "<layout>/Responsive";
import SpacingContainer from "<layout>/SpacingContainer";

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

import {
  Data
} from "<molecules>/__typings__/SkillsItem.d.ts";

const items: Data[] = [
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
];

const SkillsSection = (): JSX.Element => (
  <Section
    dataCy="Skills"
    id="skills"
    title="Skills"
  >
    <Responsive 
      dataTestDesktopId="SkillsResponsiveDesktop"
      dataTestTabletId="SkillsResponsiveTablet"
      dataTestTvId="SkillsResponsiveTv"
      devices={["tv", "desktop", "tablet"]}
    >
      <Masonry
        columnGutter={48}
        columnWidth={300}
        items={items}
        render={SkillsItem}
      />
    </Responsive>
    <Responsive 
      dataTestMobileId="SkillsResponsiveMobile"
      devices={["mobile"]}
    >
      {items.map((data: Data) => (
        <SpacingContainer
          dataTestId="ItemSpacingContainer"
          key={data?.title}
          marginBottom="spacing32"
        >
          <SkillsItem data={data} />
        </SpacingContainer>
      ))}
    </Responsive>
  </Section>
);

export default memo(SkillsSection);
