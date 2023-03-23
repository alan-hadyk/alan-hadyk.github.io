import {
  ISectionProps,
  SectionVariant
} from "components/molecules/Section/@types/Section";
import { sectionDefaultThemeClasses } from "components/molecules/Section/styles";
import { IThemeClasses } from "types/theme";
import { ISectionTitleProps } from "components/molecules/SectionTitle/@types/SectionTitle";

const useSectionThemeClasses = ({
  themeClasses,
  title,
  variant
}: Pick<ISectionProps, "title" | "variant" | "themeClasses">) => {
  const sectionThemeClasses: IThemeClasses = {
    ...sectionDefaultThemeClasses,
    paddingTop: title && variant === SectionVariant.Dark ? "pt-96" : "pt-0",
    ...themeClasses
  };

  const sectionTitleTvDesktopTabletThemeClasses: ISectionTitleProps["themeClasses"] =
    {
      title: {
        fontSize: variant === SectionVariant.Dark ? "text-72" : "text-20",
        lineHeight:
          variant === SectionVariant.Dark ? "leading-80" : "leading-20"
      },
      wrapper: {
        marginBottom: variant === SectionVariant.Dark ? "mb-96" : "mb-20"
      }
    };

  const sectionTitleMobileThemeClasses: ISectionTitleProps["themeClasses"] = {
    title: {
      fontSize: variant === SectionVariant.Dark ? "text-48" : "text-20",
      lineHeight: variant === SectionVariant.Dark ? "leading-80" : "leading-20"
    },
    wrapper: {
      marginBottom: variant === SectionVariant.Dark ? "mb-48" : "mb-20"
    }
  };

  return {
    sectionThemeClasses,
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses
  };
};

export { useSectionThemeClasses };
