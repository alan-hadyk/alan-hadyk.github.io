import { IBackdropProps } from "components/atoms/Backdrop/@types/Backdrop";
import { backdropDefaultThemeClasses } from "components/atoms/Backdrop/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => (
  <div
    className={convertObjectValuesToString(backdropDefaultThemeClasses)}
    onClick={onClick}
  />
);

export { Backdrop };
