import { IThemeClasses } from "types/theme";

export const pdfTemplateDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-white",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  marginX: "mx-auto",
  marginY: "my-0",
  maxWidth: "max-w-screenXl",
  minHeight: "min-h-screenSm",
  width: "w-full"
};

export const pdfTemplateChildrenDefaultThemeClasses: IThemeClasses = {
  paddingBottom: "pb-96",
  paddingTop: "pt-0",
  paddingX: "px-48"
};

export const pdfTemplateSidebarDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-blue600",
  display: "flex",
  flex: "flex-[0_0_30%]",
  flexFlow: "flex-col-nowrap",
  paddingX: "px-24",
  paddingY: "py-40"
};
