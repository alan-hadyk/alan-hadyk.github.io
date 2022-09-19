import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import { Icon } from "components/atoms/Icon";

import { isIE11 } from "helpers/browser/isIE11";

import {
  IHexagonProps,
  IIconDimensionsProps
} from "components/molecules/@types/Hexagon";
import { childrenPropTypes } from "helpers/propTypes/children";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropType } from "helpers/propTypes/spacing";

const Hexagon: React.FC<IHexagonProps> = ({
  children,
  contentWidth = "w-100%",
  dataCy,
  fill = "none"
}) => {
  const [iconDimensions, setIconDimensions] = useState<IIconDimensionsProps>({
    height: undefined,
    width: undefined
  });
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fill !== "none") {
      return;
    }

    const path = iconRef.current?.querySelector("path");
    const { height, width } = path
      ? path.getBoundingClientRect()
      : { height: undefined, width: undefined };

    if (isIE11() && height && width) {
      setIconDimensions({
        height: `${height}px`,
        width: `${width}px`
      });
    }
  }, [fill]);

  return (
    <LayoutContainer dataCy={dataCy} position="relative">
      {fill === "pattern" && <Icon iconName="hexagonWithPattern" />}

      {fill === "solid" && (
        <Icon
          height={isIE11() ? "h-16" : "h-auto"}
          iconName="hexagon"
          isActive
          shouldGlow
        />
      )}

      {fill === "none" && (
        <Icon
          height={iconDimensions.height}
          iconName="hexagon"
          ref={iconRef}
          shouldGlow
          width={iconDimensions.width}
        />
      )}

      {children && (
        <LayoutContainer
          className={`
            translate-x-negative50% translate-y-negative50%

            ${
              isIE11() &&
              `
              screenMd:left-[48%]
              screenMd:top-[53%]
              screenMd:w-[90%]
            `
            }
          `}
          left="left-50%"
          position="absolute"
          top="top-50%"
          width={contentWidth}
        >
          {children}
        </LayoutContainer>
      )}
    </LayoutContainer>
  );
};
Hexagon.propTypes = {
  children: childrenPropTypes,
  contentWidth: spacingPropType("w"),
  dataCy: PropTypes.string,
  fill: PropTypes.oneOf(["none", "solid", "pattern"])
};

export { Hexagon };
