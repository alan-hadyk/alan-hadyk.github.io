import React, { useCallback } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import Text from "UI/atoms/Text";
import Corners from "UI/molecules/Corners";
import PositionContainer from "UI/layout/PositionContainer";
import FlexItem from "UI/layout/FlexItem";
import SpacingContainer from "UI/layout/SpacingContainer";

import Cross from "assets/svg/Cross.svg";

import spacing from "styles/variables/spacing";

import {
  DashboardElementProps,
  DashboardElementInnerContainerProps
} from "UI/molecules/__typings__/DashboardElement";

const DashboardElementInnerContainer = styled.div<
  DashboardElementInnerContainerProps
>`
  ${({
    overflow,
    shouldDisplayBorder,
    shouldDisplayCorners,
    theme: {
      colorPalette: { blue100, blue300 },
      spacing: { spacing8, spacing32 }
    }
  }): FlattenSimpleInterpolation => css`
    height: 100%;
    overflow: ${overflow};

    ${shouldDisplayBorder &&
    `
      border: thin solid ${blue300};
      box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    `} ${(shouldDisplayCorners || shouldDisplayBorder) &&
    `
      background: url(${Cross});
      background-position: center;
      background-repeat: space;
      background-size: ${spacing32} ${spacing32};
    `};
  `};
`;

function DashboardElement({
  alignSelf = "auto",
  children,
  dataCy,
  dataTestId,
  description,
  flex,
  overflow = "hidden",
  shouldDisplayBorder = false,
  shouldDisplayCorners = false,
  order = 0,
  title,
  titleFontSize = "font16",
  titleOverflow = "visible"
}: DashboardElementProps): JSX.Element {
  const calcChildrenHeight = useCallback((): string => {
    return description
      ? `calc(100% - ${spacing.spacing36} - ${spacing.spacing24} - ${spacing.spacing28})`
      : `calc(100% - ${spacing.spacing36})`;
  }, [description]);

  return (
    <FlexItem
      alignSelf={alignSelf}
      dataCy={dataCy}
      dataTestId={dataTestId || "DashboardElement"}
      flex={flex}
      order={order}
      overflow={titleOverflow}
    >
      {title && (
        <Text
          color={titleFontSize === "font28" ? "blue100" : "blue300"}
          dataTestId="DashboardElementTitleText"
          ellipsis
          fontFamily="AnonymousPro"
          fontSize={titleFontSize}
          lineHeight="spacing36"
          textTransform="uppercase"
        >
          {title}
        </Text>
      )}

      {description && (
        <SpacingContainer
          dataTestId="DashboardElementDescriptionSpacingContainer"
          height="spacing24"
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
          >
            {description}
          </Text>
        </SpacingContainer>
      )}

      <SpacingContainer
        dataTestId="DashboardElementOuterSpacingContainer"
        height={calcChildrenHeight()}
        marginTop={titleFontSize === "font28" ? "spacing8" : "spacing0"}
      >
        <PositionContainer height="100%" position="relative">
          {shouldDisplayCorners && <Corners />}
          {renderInnerContainer()}
        </PositionContainer>
      </SpacingContainer>
    </FlexItem>
  );

  function renderInnerContainer(): JSX.Element {
    return (
      <DashboardElementInnerContainer
        data-testid="DashboardElementInnerContainer"
        overflow={overflow}
        shouldDisplayBorder={shouldDisplayBorder}
        shouldDisplayCorners={shouldDisplayCorners}
      >
        {shouldDisplayCorners ? (
          <SpacingContainer
            dataTestId="DashboardElementInnerSpacingContainer"
            height="100%"
            paddingRight="spacing8"
            paddingLeft="spacing8"
            paddingTop="spacing8"
            paddingBottom="spacing8"
          >
            {children}
          </SpacingContainer>
        ) : (
          children
        )}
      </DashboardElementInnerContainer>
    );
  }
}

DashboardElement.propTypes = {
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  description: PropTypes.string,
  overflow: PropTypes.oneOf(["visible", "hidden"]),
  shouldDisplayBorder: PropTypes.bool,
  shouldDisplayCorners: PropTypes.bool,
  title: PropTypes.string,
  titleFontSize: PropTypes.oneOf(["font16", "font28"]),
  titleOverflow: PropTypes.oneOf(["visible", "hidden"])
};

export default DashboardElement;
