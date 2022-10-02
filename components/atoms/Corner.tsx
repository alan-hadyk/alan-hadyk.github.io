import {
  ICornerContainerProps,
  ICornerProps,
  IMapPositionToCornerProps
} from "components/atoms/@types/Corner";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const mapPositionToCornerProps = (
  isActive: ICornerProps["isActive"]
): IMapPositionToCornerProps => ({
  bottomLeft: {
    left: isActive ? "left-[-8px]" : "left-0",
    top: isActive ? "top-full" : "top-[calc(100%-8px)]",
    transform: "rotate-[270deg]"
  },
  bottomRight: {
    left: isActive ? "left-full" : "left-[calc(100%-8px)]",
    top: isActive ? "top-full" : "top-[calc(100%-8px)]",
    transform: "rotate-180"
  },
  topLeft: {
    left: isActive ? "left-[-8px]" : "left-0",
    top: isActive ? "top-[-8px]" : "top-0",
    transform: "rotate-0"
  },
  topRight: {
    left: isActive ? "left-full" : "left-[calc(100%-8px)]",
    top: isActive ? "top-[-8px]" : "top-0",
    transform: "rotate-90"
  }
});

const DEFAULT_CLASS_NAMES = [
  "border-l-thin",
  "border-t-thin",
  "border-solid",
  "border-white",
  "transform-gpu",
  "h-8",
  "w-8",
  "absolute",
  "transition-all",
  "duration-fast",
  "ease-in-out"
];

const Corner: React.FC<ICornerProps> = ({ isActive = false, position }) => {
  const opacity: ICornerContainerProps["opacity"] = isActive
    ? "opacity-100"
    : "opacity-50";

  const cornerClasses = convertObjectValuesToString(
    mapPositionToCornerProps(isActive)[position]
  );

  const classNames = [...DEFAULT_CLASS_NAMES, opacity, cornerClasses];

  return <div className={classNames.join(" ")} data-cy="Corner" />;
};

export { Corner };
