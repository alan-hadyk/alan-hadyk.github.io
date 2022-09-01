/* eslint-disable react/prop-types */
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { childrenPropTypes } from "helpers/propTypes/children";
import { spacingPropTypes } from "helpers/propTypes/spacing";
import { zIndexPropTypes } from "helpers/propTypes/zIndex";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";
import PropTypes from "prop-types";
import { useCallback, forwardRef } from "react";

const _LayoutContainer: React.ForwardRefRenderFunction<
  HTMLInputElement | HTMLFormElement | HTMLDivElement | HTMLElement,
  ILayoutContainerProps
> = (
  {
    alignItems,
    as = "div",
    bottom,
    children,
    className,
    dataCy,
    display,
    height,
    justifyContent,
    left,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    onClick,
    onSubmit,
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
  >;

  const calculatePadding = useCallback(
    (prefix: "pb" | "pl" | "pr" | "pt", value?: string | number) => {
      if (value) {
        if (typeof value === "string") {
          return value;
        } else {
          return `${prefix}-[${value}px]`;
        }
      }

      return undefined;
    },
    []
  );

  const props = {
    className: trimTemplateLiteral(`
      ${alignItems || ""}  
      ${bottom || ""}  
      ${display || ""}  
      ${height || ""}  
      ${justifyContent || ""}  
      ${left || ""}  
      ${marginBottom || ""}  
      ${marginLeft || ""}  
      ${marginRight || ""}  
      ${marginTop || ""}  
      ${onClick || onSubmit ? "cursor-pointer" : ""}
      ${padding || ""}  
      ${calculatePadding("pb", paddingBottom) || ""}  
      ${calculatePadding("pl", paddingLeft) || ""}  
      ${calculatePadding("pr", paddingRight) || ""}  
      ${calculatePadding("pt", paddingTop) || ""}  
      ${position || ""}  
      ${right || ""}  
      ${top || ""}  
      ${width || ""}  
      ${zIndex || ""}  
      ${className || ""}  
    `),
    ["data-cy"]: dataCy,
    onClick,
    onSubmit,
    style
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
    "a"
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
  height: spacingPropTypes("h"),
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
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  padding: spacingPropTypes("p"),
  paddingBottom: PropTypes.oneOfType([
    spacingPropTypes("pb"),
    PropTypes.number
  ]),
  paddingLeft: PropTypes.oneOfType([spacingPropTypes("pl"), PropTypes.number]),
  paddingRight: PropTypes.oneOfType([spacingPropTypes("pr"), PropTypes.number]),
  paddingTop: PropTypes.oneOfType([spacingPropTypes("pt"), PropTypes.number]),
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
