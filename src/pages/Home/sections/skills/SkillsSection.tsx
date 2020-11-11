import React, { memo } from "react";

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
import { RenderColumnsArgs } from "pages/Home/sections/skills/__typings__/SkillsSection";

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
    {renderColumns({
      columnCount: 5,
      dataTestId: "SkillsResponsiveTv",
      devices: ["tv"]
    })}

    {renderColumns({
      columnCount: 3,
      dataTestId: "SkillsResponsiveDesktop",
      devices: ["desktop"]
    })}

    {renderColumns({
      columnCount: 2,
      dataTestId: "SkillsResponsiveTablet",
      devices: ["tablet"]
    })}

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

function renderColumns({
  columnCount,
  dataTestId,
  devices
}: RenderColumnsArgs): JSX.Element {
  return (
    <Responsive dataTestId={dataTestId} devices={devices}>
      <ColumnsContainer columnCount={columnCount} columnGap="spacing32">
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
  );
}

export default memo(SkillsSection);
