import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

const useIconWithLabelThemeClasses = ({
  href,
  themeClasses
}: Pick<IIconWithLabelProps, "href" | "themeClasses">) => {
  const iconWithLabelContentThemeClasses: IIconWithLabelContentProps["themeClasses"] =
    {
      ...themeClasses?.iconWithLabelContent,
      label: {
        groupHover: href ? "group-hover:text-white" : undefined,
        ...themeClasses?.iconWithLabelContent?.label
      }
    };

  return { iconWithLabelContentThemeClasses };
};

export { useIconWithLabelThemeClasses };
