import { calculateChildrenHeight } from "components/molecules/ContentFrame/helpers/calculateChildrenHeight";
import {
  contentFrameChildrenOuterContainerDefaultThemeClasses,
  contentFrameDefaultThemeClasses,
  contentFrameTitleDefaultThemeClasses
} from "components/molecules/ContentFrame/styles";
import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { IThemeClasses } from "types/theme";
import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";

const useContentFrameThemeClasses = ({
  description,
  shouldDisplayBorder,
  shouldDisplayCorners,
  themeClasses
}: Pick<
  IContentFrameProps,
  | "description"
  | "shouldDisplayBorder"
  | "shouldDisplayCorners"
  | "themeClasses"
>) => {
  const contentFrameThemeClasses: IThemeClasses = {
    ...contentFrameDefaultThemeClasses,
    ...themeClasses?.container
  };

  const contentFrameTitleBaseThemeClasses: ITypographyProps["themeClasses"] = {
    ...contentFrameTitleDefaultThemeClasses,
    ...themeClasses?.title
  };

  const contentFrameTitleThemeClasses: ITypographyProps["themeClasses"] = {
    ...contentFrameTitleBaseThemeClasses,
    color:
      contentFrameTitleBaseThemeClasses?.fontSize === "text-28"
        ? "text-blue100"
        : "text-blue300",
    ...themeClasses?.title
  };

  const contentFrameChildrenOuterWrapperThemeClasses: IThemeClasses = {
    height: calculateChildrenHeight({ description }),
    marginTop:
      contentFrameTitleThemeClasses.fontSize === "text-28" ? "mt-8" : "mt-0"
  };

  const contentFrameChildrenOuterContainerThemeClasses: IThemeClasses = {
    ...contentFrameChildrenOuterContainerDefaultThemeClasses,
    ...(shouldDisplayBorder && {
      borderColor: "border-blue300",
      borderStyle: "border-solid",
      borderWidth: "border-thin"
    }),
    ...((shouldDisplayCorners || shouldDisplayBorder) && {
      background: [
        "bg-[url('/images/static/cross.svg')]",
        "bg-center",
        "bg-repeat-space",
        "bg-[length:3.2rem_3.2rem]"
      ]
    }),
    ...themeClasses?.children
  };

  return {
    contentFrameChildrenOuterContainerThemeClasses,
    contentFrameChildrenOuterWrapperThemeClasses,
    contentFrameThemeClasses,
    contentFrameTitleThemeClasses
  };
};

export { useContentFrameThemeClasses };
