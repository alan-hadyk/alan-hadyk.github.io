import {
  ITechStackProps,
  TechStackVariant
} from "components/molecules/TechStack/@types/TechStack";
import { techStackTitleDefaultThemeClasses } from "components/molecules/TechStack/styles";
import { IThemeClasses } from "types/theme";
const useTechStackThemeClasses = ({
  variant = TechStackVariant.Blue
}: Pick<ITechStackProps, "variant">) => {
  const techStackTitleThemeClasses: IThemeClasses = {
    ...techStackTitleDefaultThemeClasses,
    color: variant === TechStackVariant.Blue ? "text-blue100" : "text-blue600"
  };

  return { techStackTitleThemeClasses };
};

export { useTechStackThemeClasses };
