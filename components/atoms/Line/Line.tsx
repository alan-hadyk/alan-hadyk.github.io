import { ILineProps, LineDirection } from "components/atoms/Line/@types/Line";
import { lineDefaultThemeClasses } from "components/atoms/Line/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "types/theme";

const Line: React.FC<ILineProps> = ({ direction, isActive = false }) => {
  const lineThemeClasses: IThemeClasses = {
    ...lineDefaultThemeClasses,
    ...(isActive
      ? {
          opacity: "opacity-100",
          visibility: "visible",
          width: "w-50%"
        }
      : {
          opacity: "opacity-0",
          visibility: "invisible",
          width: "w-0"
        }),
    ...(direction === LineDirection.LEFT && {
      left: "left-50%"
    }),
    ...(direction === LineDirection.RIGHT && {
      right: "right-50%"
    })
  };

  const lineClassNames = [
    "line",
    convertObjectValuesToString(lineThemeClasses)
  ];

  return <div className={lineClassNames.join(" ")} />;
};

export { Line };
