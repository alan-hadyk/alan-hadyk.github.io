import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { convertObjectValuesToArray } from "helpers/arrays/convertObjectValuesToArray";

const useLayoutContainerThemeClasses = ({
  onClick,
  style,
  themeClasses
}: Pick<ILayoutContainerProps, "onClick" | "style" | "themeClasses">) => {
  const { height, width, ...otherThemeClasses } = themeClasses || {};

  const layoutContainerClassNames = [
    ...(onClick ? ["cursor-pointer"] : []),
    ...(height?.includes("h-") ? [height] : []),
    ...(width?.includes("w-") ? [width] : [])
  ];

  if (otherThemeClasses) {
    layoutContainerClassNames.push(
      ...convertObjectValuesToArray(otherThemeClasses)
    );
  }

  const layoutContainerStyles = {
    height: !height?.includes("h-") ? height : undefined,
    width: !width?.includes("w-") ? width : undefined,
    ...style
  };

  return { layoutContainerClassNames, layoutContainerStyles };
};

export { useLayoutContainerThemeClasses };
