import React from "react";

import Text from "<atoms>/Text";

import Hexagon from "<molecules>/Hexagon";
import IconsWithLabels from "<molecules>/IconsWithLabels";

import SpacingContainer from "<layout>/SpacingContainer";

import {
  SkillsItemProps
} from "<molecules>/__typings__/SkillsItem.d.ts";

const SkillsItem = ({ iconsWithLabels, title }: SkillsItemProps): JSX.Element => (
  <Hexagon
    dataTestId="SkillsItem"
  >
    <Text 
      textAlign="center"
      color="blue300"
      fontSize="font32"
      lineHeight="spacing40"
      textTransform="capitalize"
    >
      {title}
    </Text>
    <SpacingContainer
      marginTop="spacing16"
    >
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position="vertical"
        size="medium"
      />
    </SpacingContainer>
  </Hexagon>
);
 
export default SkillsItem;