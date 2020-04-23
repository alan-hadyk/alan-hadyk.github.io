import React, { useRef, useLayoutEffect, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Text from "<atoms>/Text";
import Corners from "<molecules>/Corners";
import PositionContainer from "<layout>/PositionContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Cross from "<assets>/svg/Cross.svg";

import spacing from "<styles>/variables/spacing";

import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement.d.ts";

function DashboardElement({
  alignSelf = "auto",
  children,
  description,
  dataTestId,
  flex,
  shouldDisplayCorners = false,
  shuffleDelay = 0,
  order = 0,
  title
}: DashboardElementProps): JSX.Element {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [childrenHeight, setChildrenHeight] = useState(null);

  useLayoutEffect(() => {
    const height: string = calcChildrenHeight();
    setChildrenHeight(height);
  });

  return (
    <FlexItem
      alignSelf={alignSelf}
      dataTestId={dataTestId || "DashboardElement"}
      flex={flex}
      order={order}
    >
      <Text 
        color="blue300"
        ellipsis
        fontFamily="AnonymousPro"
        fontSize="font16"
        lineHeight="spacing36"
        shouldShuffle
        shuffleDelay={shuffleDelay}
        textTransform="uppercase"
      >
        {title}
      </Text>
      {description && (
        <SpacingContainer
          dataTestId="DashboardElementDescription"
          marginBottom="spacing28"
        >
          <Text
            color="blue300"
            dataTestId="DashboardElementDescriptionText"
            fontSize="font8"
            lineHeight="spacing12"
            maxHeight="spacing36"
            overflow="hidden"
            textTransform="uppercase"
            ref={descriptionRef}
          >
            {description}
          </Text>
        </SpacingContainer>
      )}
      <PositionContainer
        height={childrenHeight}
        position="relative"
      >
        {shouldDisplayCorners && <Corners />}
        {renderInnerContainer()}
      </PositionContainer>
    </FlexItem>
  );

  function calcChildrenHeight(): string {
    if (descriptionRef.current) {
      const { height }: DOMRect = descriptionRef.current.getBoundingClientRect();

      return `calc(100% - ${spacing.spacing36} - ${spacing.spacing28} - ${height}px)`;
    } else {
      return `calc(100% - ${spacing.spacing36})`;
    }
  }

  function renderInnerContainer(): JSX.Element {
    return (
      <DashboardElement.InnerContainer
        shouldDisplayCorners={shouldDisplayCorners}
        data-testid="DashboardElementInnerContainer"
      >
        {
          shouldDisplayCorners ? (
            <SpacingContainer 
              height="100%"
              paddingRight="spacing8" 
              paddingLeft="spacing8" 
              paddingTop="spacing8" 
              paddingBottom="spacing8"
            >
              {children}
            </SpacingContainer>
          ) : children
        }
      </DashboardElement.InnerContainer>
    );
  }
}

type DashboardElementInnerContainer = Partial<DashboardElementProps>;

DashboardElement.InnerContainer = styled.div<DashboardElementInnerContainer>`
  ${({
    shouldDisplayCorners,
    theme: {
      spacing: { 
        spacing32
      }
    }
  }): FlattenSimpleInterpolation => css`
      height: 100%;
      overflow: hidden;
      
      ${shouldDisplayCorners && `
        background: url(${Cross});
        background-repeat: space;
        background-position: center;
        background-size: ${spacing32} ${spacing32};
    `}
  `}
`;

export default DashboardElement;