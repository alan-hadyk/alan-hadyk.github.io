import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { useLayoutContainerThemeClasses } from "components/layout/LayoutContainer/hooks/useLayoutContainerThemeClasses";
import { forwardRef, LegacyRef } from "react";

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

  const { layoutContainerClassNames } = useLayoutContainerThemeClasses({
    onClick,
    themeClasses
  });

  const props = {
    className: layoutContainerClassNames.join(" "),
    id,
    name,
    onClick,
    onFocus,
    style,
    tabIndex
  };

  return children ? (
    <HTMLTag {...props} ref={ref as LegacyRef<HTMLDivElement>}>
      {children}
    </HTMLTag>
  ) : (
    <HTMLTag {...props} ref={ref as LegacyRef<HTMLDivElement>} />
  );
};

const LayoutContainer = forwardRef<
  HTMLDivElement | HTMLElement,
  ILayoutContainerProps
>(_LayoutContainer);

export { LayoutContainer };
