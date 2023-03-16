import React from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { Corners } from "components/molecules/Corners/Corners";

import { IDashboardElementProps } from "components/molecules/@types/DashboardElement";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "types/theme";

const DashboardElement: React.FC<IDashboardElementProps> = ({
  alignSelf = "self-auto",
  children,
  description,
  flex,
  overflow = "overflow-hidden",
  shouldDisplayBorder = false,
  shouldDisplayCorners = false,
  order = "order-0",
  title,
  titleFontSize = "text-16",
  titleOverflow = "overflow-visible"
}) => {
  const calcChildrenHeight = (): IThemeClasses["height"] =>
    description
      ? "h-[calc(100%-3.6rem-2.4rem-2.8rem)]"
      : "h-[calc(100%-3.6rem)]";

  return (
    <LayoutContainer
      themeClasses={{
        alignSelf,
        flex,
        order,
        overflow: titleOverflow
      }}
    >
      {title ? (
        <Typography
          ellipsis
          themeClasses={{
            color:
              titleFontSize === "text-28" ? "text-blue100" : "text-blue300",
            fontFamily: "font-anonymousPro",
            fontSize: titleFontSize,
            lineHeight: "leading-36",
            textTransform: "uppercase"
          }}
        >
          {title}
        </Typography>
      ) : null}

      {description ? (
        <LayoutContainer
          themeClasses={{ height: "h-24", marginBottom: "mb-28" }}
        >
          <Typography
            themeClasses={{
              color: "text-blue300",
              fontSize: "text-8",
              lineHeight: "leading-12",
              maxHeight: "max-h-36",
              overflow: "overflow-hidden",
              textTransform: "uppercase"
            }}
          >
            {description}
          </Typography>
        </LayoutContainer>
      ) : null}

      <LayoutContainer
        themeClasses={{
          height: calcChildrenHeight(),
          marginTop: titleFontSize === "text-28" ? "mt-8" : "mt-0"
        }}
      >
        <LayoutContainer
          themeClasses={{ height: "h-100%", position: "relative" }}
        >
          {shouldDisplayCorners && <Corners />}

          <LayoutContainer
            themeClasses={{
              height: "h-100%",
              overflow,
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
              })
            }}
          >
            {shouldDisplayCorners ? (
              <LayoutContainer
                themeClasses={{
                  height: "h-100%",
                  padding: "p-8"
                }}
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
