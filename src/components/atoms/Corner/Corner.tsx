import { ICornerProps } from "@app/components/atoms/Corner/@types/Corner";
import {
  cornerDefaultThemeClasses,
  mapPositionToCornerProps,
} from "@app/components/atoms/Corner/styles";
import { convertObjectValuesToArray } from "@app/helpers/arrays/convertObjectValuesToArray";
import { IThemeClasses } from "@app/types/theme";

export const Corner: React.FC<ICornerProps> = ({
  isActive = false,
  position,
}) => {
  const cornerThemeClasses: IThemeClasses = {
    ...cornerDefaultThemeClasses,
    ...mapPositionToCornerProps(isActive)[position],
    opacity: isActive ? "opacity-100" : "opacity-50",
  };

  const cornerClassNames = convertObjectValuesToArray(cornerThemeClasses);

  return <div className={cornerClassNames.join(" ")} />;
};
