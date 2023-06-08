import { IconWithLabel } from "@app/components/molecules/IconWithLabel/IconWithLabel";
import { IIconsWithLabelsProps } from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { useIconsWithLabelsThemeClasses } from "@app/components/molecules/IconsWithLabels/hooks/useIconsWithLabelsThemeClasses";

const IconsWithLabels: React.FC<IIconsWithLabelsProps> = ({
  iconsWithLabels,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant,
}) => {
  const { iconsWithLabelsThemeClasses } = useIconsWithLabelsThemeClasses({
    size,
    themeClasses,
  });

  return (
    <LayoutContainer themeClasses={iconsWithLabelsThemeClasses}>
      {iconsWithLabels.map(({ iconName, iconVariant, label }) => (
        <IconWithLabel
          iconName={iconName}
          iconVariant={iconVariant}
          key={label}
          label={label}
          size={size}
          themeClasses={themeClasses?.iconWithLabel}
          variant={variant}
        />
      ))}
    </LayoutContainer>
  );
};

export { IconsWithLabels };
