import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export const companyDescriptionContainerDefaultThemeClasses: IThemeClasses = {
  mediaQuery: ["msHighContrastNone:w-100%", "msHighContrastActive:w-100%"]
};

export const companyDescriptionTitleDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: "font-anonymousPro",
  fontSize: "text-36",
  lineHeight: "leading-56",
  textAlign: "text-left"
};

export const companyDescriptionIconWithLabelWrapperDefaultThemeClasses: IThemeClasses =
  {
    marginTop: "mt-32"
  };

export const companyDescriptionIconWithLabelDefaultThemeClasses: IIconWithLabelProps["themeClasses"] =
  {
    iconWithLabelContent: {
      label: {
        color: "text-blue300"
      }
    }
  };

export const companyDescriptionLinkWrapperDefaultThemeClasses: IThemeClasses = {
  marginBottom: "mb-32"
};

export const companyDescriptionResponsibilitiesWrapperDefaultThemeClasses: IThemeClasses =
  {
    paddingBottom: "pb-68"
  };

export const companyDescriptionResponsibilitiesDefaultThemeClasses: IThemeClasses =
  {
    color: "text-blue100",
    fontFamily: "font-anonymousPro",
    fontSize: "text-24",
    fontWeight: "font-bold",
    lineHeight: "leading-32"
  };

export const companyDescriptionUnorderedListWrapperDefaultThemeClasses: IThemeClasses =
  {
    marginLeft: "ml-16",
    marginTop: "mt-16"
  };
