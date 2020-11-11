import React, { memo } from "react";
// import { Masonry } from "masonic";

import Section from "UI/molecules/Section";
import SkillsItem from "UI/molecules/SkillsItem";
import Responsive from "UI/layout/Responsive";
import ColumnsContainer from "UI/layout/ColumnsContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import languagesCategory from "pages/Home/sections/skills/categories/languagesCategory";
import frameworksCategory from "pages/Home/sections/skills/categories/frameworksCategory";
import stateManagementCategory from "pages/Home/sections/skills/categories/stateManagementCategory";
import webApisCategory from "pages/Home/sections/skills/categories/webApisCategory";
import webTechnologiesCategory from "pages/Home/sections/skills/categories/webTechnologiesCategory";
import cssToolsCategory from "pages/Home/sections/skills/categories/cssToolsCategory";
import testingCategory from "pages/Home/sections/skills/categories/testingCategory";
import cicdCategory from "pages/Home/sections/skills/categories/cicdCategory";
import bundlersCategory from "pages/Home/sections/skills/categories/bundlersCategory";
import taskManagementCategory from "pages/Home/sections/skills/categories/taskManagementCategory";
import designToolsCategory from "pages/Home/sections/skills/categories/designToolsCategory";

import { Data } from "UI/molecules/__typings__/SkillsItem";

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
    dataTestId="SkillsSection"
    id="skills"
    title="Skills"
  >
    <Responsive dataTestTvId="SkillsResponsiveTv" devices={["tv"]}>
      <ColumnsContainer columnCount={5} columnGap="spacing32">
        {items.map((data: Data) => (
          <SpacingContainer
            dataTestId="ItemSpacingContainer"
            key={data?.title}
            marginBottom="spacing32"
          >
            <SkillsItem key={data?.title} data={data} />
          </SpacingContainer>
        ))}
      </ColumnsContainer>
    </Responsive>
    <Responsive
      dataTestDesktopId="SkillsResponsiveDesktop"
      devices={["desktop"]}
    >
      <ColumnsContainer columnCount={3} columnGap="spacing32">
        {items.map((data: Data) => (
          <SpacingContainer
            dataTestId="ItemSpacingContainer"
            key={data?.title}
            marginBottom="spacing32"
          >
            <SkillsItem key={data?.title} data={data} />
          </SpacingContainer>
        ))}
      </ColumnsContainer>
    </Responsive>
    <Responsive dataTestTabletId="SkillsResponsiveTablet" devices={["tablet"]}>
      <ColumnsContainer columnCount={2} columnGap="spacing32">
        {items.map((data: Data) => (
          <SpacingContainer
            dataTestId="ItemSpacingContainer"
            key={data?.title}
            marginBottom="spacing32"
          >
            <SkillsItem key={data?.title} data={data} />
          </SpacingContainer>
        ))}
      </ColumnsContainer>
    </Responsive>
    <Responsive dataTestMobileId="SkillsResponsiveMobile" devices={["mobile"]}>
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
