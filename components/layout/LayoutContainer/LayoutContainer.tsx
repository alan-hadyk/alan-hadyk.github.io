import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { useLayoutContainerThemeClasses } from "components/layout/LayoutContainer/hooks/useLayoutContainerThemeClasses";
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
  const HTMLTag = as;

  const { layoutContainerClassNames, layoutContainerStyles } =
    useLayoutContainerThemeClasses({
      onClick,
      style,
      themeClasses
    });

  const props = {
    className: layoutContainerClassNames.join(" "),
    id,
    name,
    onClick,
    onFocus,
    style: layoutContainerStyles,
    tabIndex
  };

  return children ? (
    <HTMLTag {...props} ref={ref as never}>
      {children}
    </HTMLTag>
  ) : (
    <HTMLTag {...props} ref={ref as never} />
  );
};

const LayoutContainer = forwardRef<
  HTMLDivElement | HTMLElement,
  ILayoutContainerProps
>(_LayoutContainer);

export { LayoutContainer };
