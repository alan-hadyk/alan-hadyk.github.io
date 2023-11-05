import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";
import { SectionTitleDevice } from "@app/components/molecules/SectionTitle/@types/SectionTitle";

export const sectionTitleTypographyDefaultThemeClasses: IThemeClasses = {
  color: "text-blue100",
  fontFamily: isIE11() ? "font-anonymousPro" : "font-rajdhani",
  textAlign: "text-center",
  textTransform: "uppercase",
};

export const mapDeviceToTitleTypographyStyles: Record<
  SectionTitleDevice,
  IThemeClasses
> = {
  [SectionTitleDevice.Mobile]: {
    fontSize: "text-48",
    lineHeight: "leading-80",
  },
  [SectionTitleDevice.TvDesktopAndTablet]: {
    fontSize: "text-72",
    lineHeight: "leading-80",
  },
};

export const mapDeviceToWrapperStyles: Record<
  SectionTitleDevice,
  IThemeClasses
> = {
  [SectionTitleDevice.Mobile]: {
    marginBottom: "mb-48",
  },
  [SectionTitleDevice.TvDesktopAndTablet]: {
    marginBottom: "mb-96",
  },
};
