import React, { Fragment } from "react";

import SpacingContainer from "<layout>/SpacingContainer";
import Text from "<atoms>/Text";

import {
  SectionProps
} from "<molecules>/__typings__/Section";

function Section({
  children,
  id,
  minHeight,
  title
}: SectionProps): JSX.Element {
  return (
    <SpacingContainer 
      id={id}
      minHeight={minHeight}
      paddingBottom={title ? "spacing96" : "spacing0"}
    >
      {renderTitle()}

      <Fragment>
        {children}
      </Fragment>
    </SpacingContainer>
  );

  function renderTitle(): JSX.Element {
    if (!title) {
      return;
    }

    return (
      <SpacingContainer 
        marginBottom="spacing96"
        paddingTop="spacing120"
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
}

export default Section;