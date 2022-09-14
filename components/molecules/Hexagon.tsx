import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import { Icon } from "components/atoms/Icon";

import { isIE11 } from "helpers/browser/isIE11";

import {
  IHexagonProps,
  IIconDimensionsProps,
  IRenderIconArgs
} from "components/molecules/@types/Hexagon";
import { childrenPropTypes } from "helpers/propTypes/children";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropType } from "helpers/propTypes/spacing";

const renderIcon = ({ fill, iconDimensions, iconRef }: IRenderIconArgs) => {
  switch (fill) {
    case "pattern":
      return <Icon iconName="hexagonWithPattern" />;
    case "solid":
      return (
        <Icon
          height={isIE11() ? "h-16" : "h-auto"}
          iconName="hexagon"
          isActive
          shouldGlow
        />
      );
    case "none":
      return (
        <Icon
          height={iconDimensions.height}
          iconName="hexagon"
          ref={iconRef}
          shouldGlow
          width={iconDimensions.width}
        />
      );
  }
};

const Hexagon: React.FC<IHexagonProps> = ({
  children,
  contentWidth = "w-100%",
  dataCy,
  dataTestId,
  fill = "none"
}) => {
  const [iconDimensions, setIconDimensions] = useState<IIconDimensionsProps>({
    height: undefined,
    width: undefined
  });
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const viewBox2 = iconRef.current?.viewBox;
    const attributes = iconRef.current?.attributes;

    console.log("HEXAGON", {
      attributes,
      current: iconRef.current,
      viewBox2
    });
    // const viewBox = iconRef.current?.attributes?.viewBox?.value;
    // const height = viewBox?.split(" ")[3];
    // const width = viewBox?.split(" ")[2];

    // if (isIE11()) {
    //   setIconDimensions({
    //     height: `${height}px`,
    //     width: `${width}px`
    //   });
    // }
    if (isIE11()) {
      setIconDimensions({
        height: "20px",
        width: "20px"
      });
    }
  }, []);

  return (
    <LayoutContainer
      data-cy={dataCy}
      data-testid={dataTestId || "Hexagon"}
      position="relative"
    >
      {renderIcon({ fill, iconDimensions, iconRef })}

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
          data-testid="LayoutContainer"
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
  dataTestId: PropTypes.string,
  fill: PropTypes.oneOf(["none", "solid", "pattern"])
};

export { Hexagon };
