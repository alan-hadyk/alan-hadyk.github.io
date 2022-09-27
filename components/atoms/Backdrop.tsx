import { IBackdropProps } from "components/atoms/@types/Backdrop";

const DEFAULT_CLASS_NAMES = [
  "bottom-0",
  "left-0",
  "right-0",
  "top-0",
  "fixed",
  "cursor-pointer",
  "z-900"
];

const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => (
  <div
    className={DEFAULT_CLASS_NAMES.join(" ")}
    data-cy="Backdrop"
    onClick={onClick}
  />
);

export { Backdrop };
