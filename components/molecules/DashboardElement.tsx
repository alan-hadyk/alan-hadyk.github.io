import React from "react";

import { Text } from "components/atoms/Text";
import { Corners } from "components/molecules/Corners";

import { IDashboardElementProps } from "components/molecules/@types/DashboardElement";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";

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
  titleOverflow = "visible"
}) => {
  const calcChildrenHeight = (): ILayoutContainerProps["height"] =>
    description
      ? "h-[calc(100%-3.6rem-2.4rem-2.8rem)]"
      : "h-[calc(100%-3.6rem)]";

  return (
    <LayoutContainer
      alignSelf={alignSelf}
      className={titleOverflow}
      flex={flex}
      order={order}
    >
      {title ? (
        <Text
          color={titleFontSize === "text-28" ? "text-blue100" : "text-blue300"}
          ellipsis
          fontFamily="font-anonymousPro"
          fontSize={titleFontSize}
          lineHeight="leading-36"
          textTransform="uppercase"
        >
          {title}
        </Text>
      ) : null}

      {description ? (
        <LayoutContainer height="h-24" marginBottom="mb-28">
          <Text
            color="text-blue300"
            fontSize="text-8"
            lineHeight="leading-12"
            maxHeight="max-h-36"
            overflow="overflow-hidden"
            textTransform="uppercase"
          >
            {description}
          </Text>
        </LayoutContainer>
      ) : null}

      <LayoutContainer
        height={calcChildrenHeight()}
        marginTop={titleFontSize === "text-28" ? "mt-8" : "mt-0"}
      >
        <LayoutContainer height="h-100%" position="relative">
          {shouldDisplayCorners && <Corners />}

          <LayoutContainer
            className={`
              h-100%
              ${overflow}

              ${
                shouldDisplayBorder && "border-thin border-solid border-blue300"
              }

              ${
                (shouldDisplayCorners || shouldDisplayBorder) &&
                `
                  bg-[url('/images/svg/Cross.svg')]
                  bg-center
                  bg-repeat-space
                  bg-[length:3.2rem_3.2rem]
                `
              };
            `}
          >
            {shouldDisplayCorners ? (
              <LayoutContainer height="h-100%" padding="p-8">
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
