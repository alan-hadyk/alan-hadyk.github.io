import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { IThemeClasses } from "types/theme";

const iconStaticDefaultThemeClasses: IIconStaticProps["themeClasses"] = {
  height: "h-full",
  overflow: "overflow-visible",
  width: "w-auto"
};

const iconStaticPictureThemeClasses: IThemeClasses = {
  ...iconStaticDefaultThemeClasses,
  marginX: "mx-auto",
  marginY: "my-auto",
  position: "relative"
};

export { iconStaticDefaultThemeClasses, iconStaticPictureThemeClasses };
