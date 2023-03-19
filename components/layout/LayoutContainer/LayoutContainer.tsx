import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { convertObjectValuesToArray } from "helpers/arrays/convertObjectValuesToArray";
import { forwardRef } from "react";

const _LayoutContainer: React.ForwardRefRenderFunction<
  HTMLDivElement | HTMLElement,
  ILayoutContainerProps
> = (
  {
    as = "div",
    children,
    id,
    name,
    onClick,
    onFocus,
    style,
    tabIndex,
    themeClasses
  },
  ref
) => {
  const Tag = `${as}` as keyof Pick<
    JSX.IntrinsicElements,
    "div" | "nav" | "header" | "main"
  >;

  const { height, width, ...otherThemeClasses } = themeClasses || {};

  const classNames = [
    ...(onClick ? ["cursor-pointer"] : []),
    ...(height?.includes("h-") ? [height] : []),
    ...(width?.includes("w-") ? [width] : [])
  ];

  if (otherThemeClasses) {
    classNames.push(...convertObjectValuesToArray(otherThemeClasses));
  }

  const props = {
    className: classNames.join(" "),
    id,
    name,
    onClick,
    onFocus,
    style: {
      height: !height?.includes("h-") ? height : undefined,
      width: !width?.includes("w-") ? width : undefined,
      ...style
    },
    tabIndex
  };

  return children ? (
    <Tag {...props} ref={ref as never}>
      {children}
    </Tag>
  ) : (
    <Tag {...props} ref={ref as never} />
  );
};

const LayoutContainer = forwardRef<
  HTMLDivElement | HTMLElement,
  ILayoutContainerProps
>(_LayoutContainer);

export { LayoutContainer };
