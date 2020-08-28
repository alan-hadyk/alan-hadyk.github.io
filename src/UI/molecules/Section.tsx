import React, { Fragment } from "react";

import Text from "<atoms>/Text";

import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import {
  SectionProps
} from "<molecules>/__typings__/Section.d.ts";

import { FontSizes } from "<styles>/variables/__typings__/variables.d.ts";

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
        {renderTitleContainer("spacing96", "font72")}
      </Responsive>

      <Responsive devices={["mobile"]}>
        {renderTitleContainer("spacing48", "font48")}
      </Responsive>
      
      <Fragment>
        {children}
      </Fragment>
    </SpacingContainer>
  );

  function renderTitleContainer(marginBottom: string, fontSize: FontSizes): JSX.Element {
    if (!title) {	
      return;	
    }

    return (
      <SpacingContainer
        dataTestId="TitleSpacingContainer"
        marginBottom={marginBottom}
        paddingTop="spacing108"
      >
        <Text
          color="blue100"
          fontFamily="Exan"
          fontSize={fontSize}
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