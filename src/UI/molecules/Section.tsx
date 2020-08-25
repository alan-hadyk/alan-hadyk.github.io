import React, { Fragment } from "react";

import Text from "<atoms>/Text";

import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import {
  SectionProps
} from "<molecules>/__typings__/Section.d.ts";

function Section({
  children,
  id,
  minHeight,
  title
}: SectionProps): JSX.Element {
  return (
    <SpacingContainer 
      dataTestId="Section"
      id={id}
      marginBottom="spacing16"
      minHeight={minHeight}
      paddingBottom={title ? "spacing96" : "spacing0"}
    >
      <Responsive devices={["tv", "desktop", "tablet"]}>
        {renderTitleContainer()}
      </Responsive>

      <Responsive devices={["mobile"]}>
        {renderTitleMobileContainer()}
      </Responsive>
      
      <Fragment>
        {children}
      </Fragment>
    </SpacingContainer>
  );

  function renderTitleContainer(): JSX.Element {
    return (
      <SpacingContainer
        dataTestId="TitleSpacingContainer"
        marginBottom="spacing96"
        paddingTop="spacing108"
      >
        <Text
          color="blue100"
          fontFamily="Exan"
          fontSize="font72"
          lineHeight="spacing80"
          textAlign="center"
          textTransform="lowercase"
        >
          {title}
        </Text>
      </SpacingContainer>
    );
  }

  function renderTitleMobileContainer(): JSX.Element {
    return (
      <SpacingContainer
        dataTestId="TitleSpacingContainer"
        marginBottom="spacing48"
        paddingTop="spacing108"
      >
        <Text
          color="blue100"
          fontFamily="Exan"
          fontSize="font48"
          lineHeight="spacing80"
          textAlign="center"
          textTransform="lowercase"
        >
          {title}
        </Text>
      </SpacingContainer>
    );
  }
}

export default Section;