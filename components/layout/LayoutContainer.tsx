import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { childrenPropTypes } from "helpers/propTypes/children";
import { flexPropType } from "helpers/propTypes/flex";
import { orderPropType } from "helpers/propTypes/order";
import { spacingPropTypes } from "helpers/propTypes/spacing";
import { zIndexPropTypes } from "helpers/propTypes/zIndex";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";
import PropTypes from "prop-types";
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

LayoutContainer.propTypes = {
  alignItems: PropTypes.oneOf([
    "items-start",
    "items-end",
    "items-center",
    "items-baseline",
    "items-stretch"
  ]),
  alignSelf: PropTypes.oneOf([
    "self-auto",
    "self-start",
    "self-end",
    "self-center",
    "self-stretch",
    "self-baseline"
  ]),
  as: PropTypes.oneOf([
    "div",
    "main",
    "section",
    "article",
    "header",
    "footer",
    "nav",
    "form",
    "table",
    "a",
    "button"
  ]),
  bottom: spacingPropTypes("bottom"),
  children: childrenPropTypes,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  display: PropTypes.oneOf([
    "block",
    "inline-block",
    "inline",
    "flex",
    "inline-flex",
    "table",
    "inline-table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row-group",
    "table-row",
    "flow-root",
    "grid",
    "inline-grid",
    "contents",
    "list-item",
    "hidden"
  ]),
  flex: flexPropType,
  flexFlow: PropTypes.oneOf([
    "flex-row flex-wrap",
    "flex-row-reverse flex-wrap",
    "flex-col flex-wrap",
    "flex-col-reverse flex-wrap",
    "flex-row flex-wrap-reverse",
    "flex-row-reverse flex-wrap-reverse",
    "flex-col flex-wrap-reverse",
    "flex-col-reverse flex-wrap-reverse",
    "flex-row flex-nowrap",
    "flex-row-reverse flex-nowrap",
    "flex-col flex-nowrap",
    "flex-col-reverse flex-nowrap"
  ]),
  height: spacingPropTypes("h"),
  id: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly"
  ]),
  left: spacingPropTypes("left"),
  marginBottom: spacingPropTypes("mb"),
  marginLeft: spacingPropTypes("ml"),
  marginRight: spacingPropTypes("mr"),
  marginTop: spacingPropTypes("mt"),
  name: PropTypes.string,
  onClick: PropTypes.func,
  order: orderPropType,
  padding: spacingPropTypes("p"),
  paddingBottom: spacingPropTypes("pb"),
  paddingLeft: spacingPropTypes("pl"),
  paddingRight: spacingPropTypes("pr"),
  paddingTop: spacingPropTypes("pt"),
  position: PropTypes.oneOf([
    "static",
    "relative",
    "absolute",
    "fixed",
    "sticky"
  ]),
  right: spacingPropTypes("right"),
  style: PropTypes.object,
  top: spacingPropTypes("top"),
  width: spacingPropTypes("w"),
  zIndex: zIndexPropTypes
};

export { LayoutContainer };
