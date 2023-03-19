import React from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { Corners } from "components/molecules/Corners/Corners";

import { IDashboardElementProps } from "components/molecules/DashboardElement/@types/DashboardElement";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { calculateChildrenHeight } from "components/molecules/DashboardElement/helpers/calculateChildrenHeight";
import {
  dashboardElementChildrenCornersContainerDefaultThemeClasses,
  dashboardElementChildrenInnerWrapperDefaultThemeClasses,
  dashboardElementChildrenOuterContainerDefaultThemeClasses,
  dashboardElementDefaultThemeClasses,
  dashboardElementDescriptionDefaultThemeClasses,
  dashboardElementDescriptionWrapperDefaultThemeClasses,
  dashboardElementTitleDefaultThemeClasses
} from "components/molecules/DashboardElement/styles";
import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { IThemeClasses } from "types/theme";

const DashboardElement: React.FC<IDashboardElementProps> = ({
  children,
  description,
  shouldDisplayBorder = false,
  shouldDisplayCorners = false,
  themeClasses,
  title
}) => {
  const dashboardElementThemeClasses: IThemeClasses = {
    ...dashboardElementDefaultThemeClasses,
    ...themeClasses?.container
  };

  const dashboardElementTitleBaseThemeClasses: ITypographyProps["themeClasses"] =
    {
      ...dashboardElementTitleDefaultThemeClasses,
      ...themeClasses?.title
    };

  const dashboardElementTitleThemeClasses: ITypographyProps["themeClasses"] = {
    ...dashboardElementTitleBaseThemeClasses,
    color:
      dashboardElementTitleBaseThemeClasses.fontSize === "text-28"
        ? "text-blue100"
        : "text-blue300",
    ...themeClasses?.title
  };

  const dashboardElementChildrenOuterWrapperThemeClasses: IThemeClasses = {
    height: calculateChildrenHeight({ description }),
    marginTop:
      dashboardElementTitleThemeClasses.fontSize === "text-28" ? "mt-8" : "mt-0"
  };

  const dashboardElementChildrenOuterContainerThemeClasses: IThemeClasses = {
    ...dashboardElementChildrenOuterContainerDefaultThemeClasses,
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
    <LayoutContainer themeClasses={dashboardElementThemeClasses}>
      {title ? (
        <Typography ellipsis themeClasses={dashboardElementTitleThemeClasses}>
          {title}
        </Typography>
      ) : null}

      {description ? (
        <LayoutContainer
          themeClasses={dashboardElementDescriptionWrapperDefaultThemeClasses}
        >
          <Typography
            themeClasses={dashboardElementDescriptionDefaultThemeClasses}
          >
            {description}
          </Typography>
        </LayoutContainer>
      ) : null}

      <LayoutContainer
        themeClasses={dashboardElementChildrenOuterWrapperThemeClasses}
      >
        <LayoutContainer
          themeClasses={dashboardElementChildrenInnerWrapperDefaultThemeClasses}
        >
          {shouldDisplayCorners && <Corners />}

          <LayoutContainer
            themeClasses={dashboardElementChildrenOuterContainerThemeClasses}
          >
            {shouldDisplayCorners ? (
              <LayoutContainer
                themeClasses={
                  dashboardElementChildrenCornersContainerDefaultThemeClasses
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

export { DashboardElement };
