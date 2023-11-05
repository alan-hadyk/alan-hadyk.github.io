import { IVerticalLabelsProps } from "@app/components/molecules/VerticalLabels/@types/VerticalLabels";
import { verticalLabelsDefaultThemeClasses } from "@app/components/molecules/VerticalLabels/styles";
import { IThemeClasses } from "@app/types/theme";

export const useVerticalLabelsThemeClasses = ({
  themeClasses,
}: Pick<IVerticalLabelsProps, "themeClasses">) => {
  const verticalLabelsThemeClasses: Record<
    "label" | "labelContainer" | "labelsWrapper",
    IThemeClasses
  > = {
    label: {
      color: "text-blue100",
      fontSize: "text-20",
      height: "h-32",
      lineHeight: "leading-32",
      ...themeClasses?.label,
    },
    labelContainer: {
      height: "h-32",
    },
    labelsWrapper: {
      ...verticalLabelsDefaultThemeClasses.labelsWrapper,
      flex: "flex-[0_0_75%]",
      gap: "gap-12",
    },
  };

  return {
    verticalLabelsThemeClasses,
  };
};
