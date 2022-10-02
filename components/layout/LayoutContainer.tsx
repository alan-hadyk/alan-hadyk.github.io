import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";
import { forwardRef } from "react";

const _LayoutContainer: React.ForwardRefRenderFunction<
  HTMLInputElement | HTMLFormElement | HTMLDivElement | HTMLElement,
  ILayoutContainerProps
> = (
  {
    alignItems,
    alignSelf,
    as = "div",
    bottom,
    children,
    className,
    dataCy,
    display,
    flex,
    flexFlow,
    height,
    id,
    justifyContent,
    left,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    name,
    onClick,
    order,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    position,
    right,
    style,
    top,
    width,
    zIndex
  },
  ref
) => {
  const Tag = `${as}` as keyof Pick<
    JSX.IntrinsicElements,
    | "div"
    | "main"
    | "section"
    | "article"
    | "header"
    | "footer"
    | "nav"
    | "form"
    | "a"
    | "button"
  >;
  const props = {
    className: trimTemplateLiteral(`
      ${alignItems || ""}  
      ${alignSelf || ""}  
      ${bottom || ""}  
      ${display || ""}  
      ${flex || ""}
      ${flexFlow || ""}
      ${height?.includes("h-") ? height : ""}  
      ${justifyContent || ""}  
      ${left || ""}  
      ${marginBottom || ""}  
      ${marginLeft || ""}  
      ${marginRight || ""}  
      ${marginTop || ""}  
      ${onClick ? "cursor-pointer" : ""}
      ${order || ""}  
      ${padding || ""}  
      ${paddingBottom || ""}  
      ${paddingLeft || ""}  
      ${paddingRight || ""}  
      ${paddingTop || ""}  
      ${position || ""}  
      ${right || ""}  
      ${top || ""}  
      ${width?.includes("w-") ? width : ""}  
      ${zIndex || ""}  
      ${className || ""}  
    `),
    ["data-cy"]: dataCy,
    id,
    name,
    onClick,
    style: {
      height: !height?.includes("h-") ? height : undefined,
      width: !width?.includes("w-") ? width : undefined,
      ...style
    }
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
  HTMLInputElement | HTMLFormElement | HTMLDivElement | HTMLElement,
  ILayoutContainerProps
>(_LayoutContainer);

export { LayoutContainer };
