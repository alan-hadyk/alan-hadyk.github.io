import React from "react";

import Text from "<atoms>/Text";
import Hexagon from "<molecules>/Hexagon";
import IconsWithLabels from "<molecules>/IconsWithLabels";
import SpacingContainer from "<layout>/SpacingContainer";

import {
  SkillsItemProps
} from "<molecules>/__typings__/SkillsItem.d.ts";

function SkillsItem({ iconsWithLabels, title }: SkillsItemProps): JSX.Element {
  return (
    <Hexagon
      dataTestId="SkillsItem"
    >
      <Text 
        color="blue300"
        fontSize="font32"
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
}
 
export default SkillsItem;