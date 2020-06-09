import React from "react";

import Text from "<atoms>/Text";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Hexagon from "<molecules>//Hexagon";

function HexagonWithDescription(): JSX.Element {
  function renderDescription(): JSX.Element {
    return (
      <span>
        <strong>Proven talent</strong> for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures. <strong> Growth-focused thought leader</strong> with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. <strong>Exceptionally dedicated technical professional</strong> with keen organizational skills.
      </span>
    );
  }
  
  function renderImage(): JSX.Element {
    return (
      <FlexItem
        flex="0 1 50%"
      >
        <Hexagon></Hexagon>
      </FlexItem>
    );
  }

  return (
    <SpacingContainer
      dataTestId="HexagonWithDescription"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="spacing1056"
    >
      <FlexContainer
        alignItems="center"
        flexFlow="row nowrap"
      >
        {renderImage()}

        <FlexItem
          flex="0 1 50%"
        >
          <SpacingContainer
            dataTestId="DescriptionSpacingContainer"
            marginLeft="spacing48"
          >
            <Text
              color="blue100"
              fontFamily="AnonymousPro"
              fontSize="font20"
              lineHeight="spacing36"
            >
              {renderDescription()}
            </Text>
          </SpacingContainer>
        </FlexItem>
      </FlexContainer>
    </SpacingContainer>
  );
} 

export default HexagonWithDescription;
