import React from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { Corners } from "components/molecules/Corners/Corners";

import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  contentFrameChildrenCornersContainerDefaultThemeClasses,
  contentFrameChildrenInnerWrapperDefaultThemeClasses,
  contentFrameDescriptionDefaultThemeClasses,
  contentFrameDescriptionWrapperDefaultThemeClasses
} from "components/molecules/ContentFrame/styles";
import { useContentFrameThemeClasses } from "components/molecules/ContentFrame/hooks/useContentFrameThemeClasses";

const ContentFrame: React.FC<IContentFrameProps> = ({
  children,
  description,
  shouldDisplayBorder = false,
  shouldDisplayCorners = false,
  themeClasses,
  title
}) => {
  const {
    contentFrameChildrenOuterContainerThemeClasses,
    contentFrameChildrenOuterWrapperThemeClasses,
    contentFrameThemeClasses,
    contentFrameTitleThemeClasses
  } = useContentFrameThemeClasses({
    description,
    shouldDisplayBorder,
    shouldDisplayCorners,
    themeClasses
  });

  return (
    <LayoutContainer themeClasses={contentFrameThemeClasses}>
      {title ? (
        <Typography ellipsis themeClasses={contentFrameTitleThemeClasses}>
          {title}
        </Typography>
      ) : null}

      {description ? (
        <LayoutContainer
          themeClasses={contentFrameDescriptionWrapperDefaultThemeClasses}
        >
          <Typography themeClasses={contentFrameDescriptionDefaultThemeClasses}>
            {description}
          </Typography>
        </LayoutContainer>
      ) : null}

      <LayoutContainer
        themeClasses={contentFrameChildrenOuterWrapperThemeClasses}
      >
        <LayoutContainer
          themeClasses={contentFrameChildrenInnerWrapperDefaultThemeClasses}
        >
          {shouldDisplayCorners && <Corners />}

          <LayoutContainer
            themeClasses={contentFrameChildrenOuterContainerThemeClasses}
          >
            {shouldDisplayCorners ? (
              <LayoutContainer
                themeClasses={
                  contentFrameChildrenCornersContainerDefaultThemeClasses
                }
              >
                {children}
              </LayoutContainer>
            ) : (
              children
            )}
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { ContentFrame };
