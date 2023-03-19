import React from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { Corners } from "components/molecules/Corners/Corners";

import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { calculateChildrenHeight } from "components/molecules/ContentFrame/helpers/calculateChildrenHeight";
import {
  contentFrameChildrenCornersContainerDefaultThemeClasses,
  contentFrameChildrenInnerWrapperDefaultThemeClasses,
  contentFrameChildrenOuterContainerDefaultThemeClasses,
  contentFrameDefaultThemeClasses,
  contentFrameDescriptionDefaultThemeClasses,
  contentFrameDescriptionWrapperDefaultThemeClasses,
  contentFrameTitleDefaultThemeClasses
} from "components/molecules/ContentFrame/styles";
import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { IThemeClasses } from "types/theme";

const ContentFrame: React.FC<IContentFrameProps> = ({
  children,
  description,
  shouldDisplayBorder = false,
  shouldDisplayCorners = false,
  themeClasses,
  title
}) => {
  const contentFrameThemeClasses: IThemeClasses = {
    ...contentFrameDefaultThemeClasses,
    ...themeClasses?.container
  };

  const contentFrameTitleBaseThemeClasses: ITypographyProps["themeClasses"] = {
    ...contentFrameTitleDefaultThemeClasses,
    ...themeClasses?.title
  };

  const contentFrameTitleThemeClasses: ITypographyProps["themeClasses"] = {
    ...contentFrameTitleBaseThemeClasses,
    color:
      contentFrameTitleBaseThemeClasses.fontSize === "text-28"
        ? "text-blue100"
        : "text-blue300",
    ...themeClasses?.title
  };

  const contentFrameChildrenOuterWrapperThemeClasses: IThemeClasses = {
    height: calculateChildrenHeight({ description }),
    marginTop:
      contentFrameTitleThemeClasses.fontSize === "text-28" ? "mt-8" : "mt-0"
  };

  const contentFrameChildrenOuterContainerThemeClasses: IThemeClasses = {
    ...contentFrameChildrenOuterContainerDefaultThemeClasses,
    ...(shouldDisplayBorder && {
      borderColor: "border-blue300",
      borderStyle: "border-solid",
      borderWidth: "border-thin"
    }),
    ...((shouldDisplayCorners || shouldDisplayBorder) && {
      background: [
        "bg-[url('/images/svg/Cross.svg')]",
        "bg-center",
        "bg-repeat-space",
        "bg-[length:3.2rem_3.2rem]"
      ]
    }),
    ...themeClasses?.children
  };

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
