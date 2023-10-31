import { IThemeClasses } from "@app/types/theme";
import {
  ProjectTitleSize,
  ProjectTitleVariant,
} from "@app/components/molecules/ProjectTitle/@types/ProjectTitle";

export const projectTitleDefaultThemeClasses: IThemeClasses = {
  fontFamily: "font-anonymousPro",
  fontWeight: "font-bold",
  marginBottom: "mb-32",
  textAlign: "text-left",
};

export const mapProjectTitleVariantToStyles: Record<
  ProjectTitleVariant,
  IThemeClasses
> = {
  [ProjectTitleVariant.Dark]: {
    color: "text-blue600",
  },
  [ProjectTitleVariant.Light]: {
    color: "text-white",
  },
};

export const mapProjectTitleSizeToStyles: Record<
  ProjectTitleSize,
  IThemeClasses
> = {
  [ProjectTitleSize.Medium]: {
    fontSize: "text-20",
    lineHeight: "leading-28",
  },
  [ProjectTitleSize.Large]: {
    fontSize: "text-28",
    lineHeight: "leading-36",
  },
};
