import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { IThemeClasses } from "types/theme";

const iconStaticDefaultThemeClasses: IIconStaticProps["themeClasses"] = {
  height: "h-full",
  overflow: "overflow-visible",
  width: "w-auto"
};

const iconStaticPictureDefaultThemeClasses: IThemeClasses = {
  ...iconStaticDefaultThemeClasses,
  display: "inline-block",
  marginX: "mx-auto",
  marginY: "my-auto",
  position: "relative"
};

export { iconStaticDefaultThemeClasses, iconStaticPictureDefaultThemeClasses };
