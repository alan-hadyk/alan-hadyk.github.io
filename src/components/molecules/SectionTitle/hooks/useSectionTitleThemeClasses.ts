import {
  ISectionTitleProps,
  SectionTitleDevice,
} from "@app/components/molecules/SectionTitle/@types/SectionTitle";
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
      ...mapDeviceToTitleTypographyStyles[SectionTitleDevice.Mobile],
      ...themeClasses?.title,
    },
    wrapper: {
      ...mapDeviceToWrapperStyles[SectionTitleDevice.Mobile],
      ...themeClasses?.wrapper,
    },
  };

  const sectionTitleTvDesktopTabletThemeClasses: ISectionTitleProps["themeClasses"] =
    {
      title: {
        ...sectionTitleTypographyDefaultThemeClasses,
        ...mapDeviceToTitleTypographyStyles[
          SectionTitleDevice.TvDesktopAndTablet
        ],
        ...themeClasses?.title,
      },
      wrapper: {
        ...mapDeviceToWrapperStyles[SectionTitleDevice.TvDesktopAndTablet],
        ...themeClasses?.wrapper,
      },
    };

  return {
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses,
  };
};

export { useSectionTitleThemeClasses };
