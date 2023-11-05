import { ISectionTitleProps } from "@app/components/molecules/SectionTitle/@types/SectionTitle";
import {
  mapDeviceToTitleTypographyStyles,
  mapDeviceToWrapperStyles,
  sectionTitleTypographyDefaultThemeClasses,
} from "@app/components/molecules/SectionTitle/styles";

const useSectionTitleThemeClasses = ({
  themeClasses,
}: Pick<ISectionTitleProps, "themeClasses">) => {
  const sectionTitleMobileThemeClasses: ISectionTitleProps["themeClasses"] = {
    title: {
      ...sectionTitleTypographyDefaultThemeClasses,
      ...mapDeviceToTitleTypographyStyles["mobile"],
      ...themeClasses?.title,
    },
    wrapper: {
      ...mapDeviceToWrapperStyles["mobile"],
      ...themeClasses?.wrapper,
    },
  };

  const sectionTitleTvDesktopTabletThemeClasses: ISectionTitleProps["themeClasses"] =
    {
      title: {
        ...sectionTitleTypographyDefaultThemeClasses,
        ...mapDeviceToTitleTypographyStyles["tvDesktopAndTablet"],
        ...themeClasses?.title,
      },
      wrapper: {
        ...mapDeviceToWrapperStyles["tvDesktopAndTablet"],
        ...themeClasses?.wrapper,
      },
    };

  return {
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses,
  };
};

export { useSectionTitleThemeClasses };
