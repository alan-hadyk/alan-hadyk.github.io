import { IBackdropProps } from "components/atoms/Backdrop/@types/Backdrop";
import { IThemeClasses } from "types/theme";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const backdropDefaultThemeClasses: IThemeClasses = {
  bottom: "bottom-0",
  cursor: "cursor-pointer",
  left: "left-0",
  position: "fixed",
  right: "right-0",
  top: "top-0",
  zIndex: "z-900"
};

const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => (
  <div
    className={convertObjectValuesToString(backdropDefaultThemeClasses)}
    onClick={onClick}
  />
);

export { Backdrop };
