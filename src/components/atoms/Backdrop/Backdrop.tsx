import { IBackdropProps } from "@app/components/atoms/Backdrop/@types/Backdrop";
import { backdropDefaultThemeClasses } from "@app/components/atoms/Backdrop/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

export const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => (
  <div
    className={convertObjectValuesToString(backdropDefaultThemeClasses)}
    onClick={onClick}
  />
);
