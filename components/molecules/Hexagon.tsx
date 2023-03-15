import { useEffect, useState, useRef } from "react";
import { isIE11 } from "helpers/browser/isIE11";

import {
  IHexagonProps,
  TIconDimensionsProps
} from "components/molecules/@types/Hexagon";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { TMediaQuery } from "types/theme";

const Hexagon: React.FC<IHexagonProps> = ({
  children,
  contentWidth = "w-100%",
  fill = "none"
}) => {
  const [iconDimensions, setIconDimensions] = useState<TIconDimensionsProps>({
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
    <LayoutContainer
      themeClasses={{
        position: "relative"
      }}
    >
      {fill === "pattern" && <ImageDynamic imageName="hexagonWithPattern" />}

      {fill === "solid" && (
        <ImageDynamic
          themeClasses={{
            height: isIE11() ? "h-16" : "h-auto"
          }}
          imageName="hexagon"
          isActive
          shouldGlow
        />
      )}

      {fill === "none" && (
        <ImageDynamic
          themeClasses={{
            height: iconDimensions.height,
            width: iconDimensions.width
          }}
          imageName="hexagon"
          ref={iconRef}
          shouldGlow
        />
      )}

      {children && (
        <LayoutContainer
          themeClasses={{
            left: "left-50%",
            mediaQuery: [
              ...(isIE11()
                ? [
                    "screenMd:left-[48%]",
                    "screenMd:top-[53%]",
                    "screenMd:w-[90%]"
                  ]
                : [])
            ] as TMediaQuery[],
            position: "absolute",
            top: "top-50%",
            translate: ["translate-x-negative50%", "translate-y-negative50%"],
            width: contentWidth
          }}
        >
          {children}
        </LayoutContainer>
      )}
    </LayoutContainer>
  );
};

export { Hexagon };
