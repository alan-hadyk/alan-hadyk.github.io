import {
  ILayoutContainerProps,
  TLayoutContainerElementType
} from "components/layout/LayoutContainer/@types/LayoutContainer";
import { useLayoutContainerThemeClasses } from "components/layout/LayoutContainer/hooks/useLayoutContainerThemeClasses";
import { forwardRef, LegacyRef } from "react";

const _LayoutContainer: React.ForwardRefRenderFunction<
  TLayoutContainerElementType,
  ILayoutContainerProps
> = (
  { as = "div", children, id, onClick, onFocus, style, tabIndex, themeClasses },
  ref
) => {
  const HTMLTag = as;

  const { layoutContainerClassNames } = useLayoutContainerThemeClasses({
    onClick,
    themeClasses
  });

  return (
    <HTMLTag
      className={layoutContainerClassNames.join(" ")}
      id={id}
      onClick={onClick}
      onFocus={onFocus}
      style={style}
      tabIndex={tabIndex}
      ref={ref as LegacyRef<HTMLDivElement>}
    >
      {children}
    </HTMLTag>
  );
};

const LayoutContainer = forwardRef<
  TLayoutContainerElementType,
  ILayoutContainerProps
>(_LayoutContainer);

export { LayoutContainer };
