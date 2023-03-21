import { IconStatic } from "components/atoms/IconStatic/IconStatic";
import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import { useIconWithLabelContentThemeClasses } from "components/molecules/IconWithLabelContent/hooks/useIconWithLabelContentThemeClasses";
import { iconWithLabelContentDefaultThemeClasses } from "components/molecules/IconWithLabelContent/styles";

const IconWithLabelContent: React.FC<IIconWithLabelContentProps> = ({
  iconName,
  isHoverable,
  label,
  size = IconWithLabelSize.Medium,
  themeClasses
}) => {
  const {
    iconWithLabelContentIconThemeClasses,
    iconWithLabelContentIconWrapperThemeClasses,
    iconWithLabelContentLabelThemeClasses
  } = useIconWithLabelContentThemeClasses({ size, themeClasses });

  return (
    <LayoutContainer themeClasses={iconWithLabelContentDefaultThemeClasses}>
      <LayoutContainer
        themeClasses={iconWithLabelContentIconWrapperThemeClasses}
      >
        <IconStatic
          themeClasses={iconWithLabelContentIconThemeClasses}
          iconName={iconName}
        />
      </LayoutContainer>

      <Typography
        isHoverable={isHoverable}
        themeClasses={iconWithLabelContentLabelThemeClasses}
      >
        {label}
      </Typography>
    </LayoutContainer>
  );
};

export { IconWithLabelContent };
