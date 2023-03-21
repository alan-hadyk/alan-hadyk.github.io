import { ISectionTitleProps } from "components/molecules/SectionTitle/@types/SectionTitle";
import { IThemeClasses } from "types/theme";

export const sectionDefaultThemeClasses: IThemeClasses = {
  marginBottom: "mb-0"
};

export const sectionTitleTvDesktopTabletDefaultThemeClasses: ISectionTitleProps["themeClasses"] =
  {
    title: {
      fontSize: "text-72"
    },
    wrapper: {
      marginBottom: "mb-96"
    }
  };

export const sectionTitleMobileDefaultThemeClasses: ISectionTitleProps["themeClasses"] =
  {
    title: {
      fontSize: "text-48"
    },
    wrapper: {
      marginBottom: "mb-48"
    }
  };
