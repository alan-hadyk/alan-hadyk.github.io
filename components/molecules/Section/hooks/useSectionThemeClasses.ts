import {
  ISectionProps,
  SectionSize
} from "components/molecules/Section/@types/Section";
import { sectionDefaultThemeClasses } from "components/molecules/Section/styles";
import { IThemeClasses } from "types/theme";

const useSectionThemeClasses = ({
  size = SectionSize.Large,
  themeClasses,
  title
}: Pick<ISectionProps, "size" | "themeClasses" | "title">) => {
  const sectionThemeClasses: IThemeClasses = {
    ...sectionDefaultThemeClasses,
    paddingTop: title && size === SectionSize.Large ? "pt-96" : "pt-0",
    ...themeClasses
  };

  return {
    sectionThemeClasses
  };
};

export { useSectionThemeClasses };
