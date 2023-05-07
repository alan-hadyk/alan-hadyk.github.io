import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

const useIconWithLabelThemeClasses = ({
  href,
  themeClasses
}: Pick<IIconWithLabelProps, "href" | "themeClasses">) => {
  const iconWithLabelContentThemeClasses: IIconWithLabelContentProps["themeClasses"] =
    {
      ...themeClasses?.content,
      label: {
        groupHover: href ? "group-hover:text-white" : undefined,
        ...themeClasses?.content?.label
      }
    };

  return { iconWithLabelContentThemeClasses };
};

export { useIconWithLabelThemeClasses };
