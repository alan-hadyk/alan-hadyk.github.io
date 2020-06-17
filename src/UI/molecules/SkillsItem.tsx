import React from "react";

import IconsWithLabels from "<molecules>/IconsWithLabels";
import DashboardElement from "<molecules>/DashboardElement";

import SpacingContainer from "<layout>/SpacingContainer";

import {
  SkillsItemProps
} from "<molecules>/__typings__/SkillsItem.d.ts";

function SkillsItem({ iconsWithLabels, title }: SkillsItemProps): JSX.Element {
  return (
    <DashboardElement
      dataTestId="TechStack"
      flex="1 1 20%"
      shouldDisplayCorners
      title={title}
      titleFontSize="font28"
    >
      <SpacingContainer
        paddingBottom="spacing32"
        paddingLeft="spacing32"
        paddingRight="spacing32"
        paddingTop="spacing32"
      >
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position="vertical"
          size="medium"
        />
      </SpacingContainer>
    </DashboardElement>
  );
}

export default SkillsItem;