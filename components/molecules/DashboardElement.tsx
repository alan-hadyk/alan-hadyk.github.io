import React from "react";
import PropTypes from "prop-types";

import { Text } from "components/atoms/Text";
import { Corners } from "components/molecules/Corners";

import { IDashboardElementProps } from "components/molecules/@types/DashboardElement";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { childrenPropTypes } from "helpers/propTypes/children";
import { flexPropType } from "helpers/propTypes/flex";
import { orderPropType } from "helpers/propTypes/order";

const DashboardElement: React.FC<IDashboardElementProps> = ({
  alignSelf = "self-auto",
  children,
  dataCy,
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
    description ? "h-[calc(100%-3.6rem-2.4rem-2.8rem]" : "h-[calc(100%-3.6rem]";

  return (
    <LayoutContainer
      alignSelf={alignSelf}
      className={`${titleOverflow}`}
      dataCy={dataCy}
      flex={flex}
      order={order}
    >
      {title && (
        <Text
          color={titleFontSize === "text-28" ? "text-blue100" : "text-blue300"}
          dataTestId="DashboardElementTitleText"
          ellipsis
          fontFamily="font-anonymousPro"
          fontSize={titleFontSize}
          lineHeight="leading-36"
          textTransform="uppercase"
        >
          {title}
        </Text>
      )}

      {description && (
        <LayoutContainer height="h-24" marginBottom="mb-28">
          <Text
            color="text-blue300"
            dataTestId="DashboardElementDescriptionText"
            fontSize="text-8"
            lineHeight="leading-12"
            maxHeight="max-h-36"
            overflow="overflow-hidden"
            textTransform="uppercase"
          >
            {description}
          </Text>
        </LayoutContainer>
      )}

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
            data-testid="DashboardElementInnerContainer"
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

DashboardElement.propTypes = {
  alignSelf: PropTypes.oneOf([
    "self-auto",
    "self-start",
    "self-end",
    "self-center",
    "self-stretch",
    "self-baseline"
  ]),
  children: childrenPropTypes,
  dataCy: PropTypes.string,
  description: PropTypes.string,
  flex: flexPropType,
  order: orderPropType,
  overflow: PropTypes.oneOf(["overflow-visible", "overflow-hidden"]),
  shouldDisplayBorder: PropTypes.bool,
  shouldDisplayCorners: PropTypes.bool,
  title: PropTypes.string,
  titleFontSize: PropTypes.oneOf(["text-16", "text-28"]),
  titleOverflow: PropTypes.oneOf(["overflow-visible", "overflow-hidden"])
};

export { DashboardElement };
