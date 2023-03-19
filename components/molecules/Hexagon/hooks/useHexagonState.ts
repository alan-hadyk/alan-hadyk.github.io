import { useEffect, useState, useRef } from "react";
import { isIE11 } from "helpers/browser/isIE11";

import {
  HexagonFill,
  IHexagonProps,
  TIconDimensionsProps
} from "components/molecules/Hexagon/@types/Hexagon";

const useHexagonState = ({ fill }: Pick<IHexagonProps, "fill">) => {
  const [iconDimensions, setIconDimensions] = useState<TIconDimensionsProps>({
    height: undefined,
    width: undefined
  });
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fill !== HexagonFill.None) {
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

  return {
    iconDimensions,
    iconRef
  };
};

export { useHexagonState };
