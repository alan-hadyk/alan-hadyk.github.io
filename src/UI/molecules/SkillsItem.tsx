import React, { useCallback } from "react";

import Text from "<atoms>/Text";

import IconsWithLabels from "<molecules>/IconsWithLabels";

import SpacingContainer from "<layout>/SpacingContainer";
import FlexItem from "<layout>/FlexItem";

import {
  SkillsItemProps
} from "<molecules>/__typings__/SkillsItem.d.ts";

function SkillsItem({ iconsWithLabels, title }: SkillsItemProps): JSX.Element {
  const renderTitle = useCallback(() => (
    <Text 
      color="blue300"
      fontSize="font32"
      lineHeight="spacing40"
      textAlign="center"
    >
      {title}
    </Text>
  ), [title]);

  return (
    <FlexItem flex="1 1 20%">
      {renderTitle()}
    
      <SpacingContainer
        marginLeft="auto"
        marginRight="auto"
        marginTop="spacing16"
        maxWidth="75%"
      >
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position="vertical"
          size="medium"
        />
      </SpacingContainer>
    </FlexItem>
  );
}

export default SkillsItem;