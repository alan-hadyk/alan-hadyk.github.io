import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import { IThemeClasses } from "types/theme";

const useIconWithLabelThemeClasses = ({
  href,
  themeClasses
}: Pick<IIconWithLabelProps, "href" | "themeClasses">) => {
  const iconWithLabelContentThemeClasses: IIconWithLabelContentProps["themeClasses"] =
    {
      ...themeClasses?.iconWithLabelContent,
      label: {
        groupHover: href ? "group-hover:text-white" : "",
        ...themeClasses?.iconWithLabelContent?.label
      } as Pick<IThemeClasses, "groupHover">
    };

  return { iconWithLabelContentThemeClasses };
};

export { useIconWithLabelThemeClasses };
