import {
  CornerVariant,
  ICornerProps
} from "components/atoms/Corner/@types/Corner";
import {
  cornerDefaultThemeClasses,
  mapPositionToCornerProps
} from "components/atoms/Corner/styles";
import { convertObjectValuesToArray } from "helpers/arrays/convertObjectValuesToArray";
import { IThemeClasses } from "types/theme";

const Corner: React.FC<ICornerProps> = ({
  isActive = false,
  position,
  variant = CornerVariant.Light
}) => {
  const themeClasses: IThemeClasses = {
    ...cornerDefaultThemeClasses,
    ...mapPositionToCornerProps(isActive)[position],
    borderColor:
      variant === CornerVariant.Light ? "border-white" : "border-blue500",
    opacity: isActive ? "opacity-100" : "opacity-50"
  };

  const classNames = convertObjectValuesToArray(themeClasses);

  return <div className={classNames.join(" ")} />;
};

export { Corner };
