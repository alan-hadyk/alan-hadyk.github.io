import { Typography } from "@app/components/atoms/Typography/Typography";

import {
  IVerticalIconsWithLabelsProps,
  VerticalIconsWithLabelsSize,
} from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  IconWithLabelVariant,
  IIconWithLabelProps,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { verticalIconsWithLabelsDefaultThemeClasses } from "@app/components/molecules/VerticalIconsWithLabels/styles";
import { useVerticalIconsWithLabelsThemeClasses } from "@app/components/molecules/VerticalIconsWithLabels/hooks/useVerticalIconsWithLabelsThemeClasses";
import { Link } from "@app/components/molecules/Link/Link";
import { VerticalIcons } from "@app/components/molecules/VerticalIcons/VerticalIcons";
import { mapVerticalIconsWithLabelsSizeToVerticalIconSize } from "@app/components/molecules/VerticalIconsWithLabels/config";

const VerticalIconsWithLabels: React.FC<IVerticalIconsWithLabelsProps> = ({
  iconsWithLabels,
  size = VerticalIconsWithLabelsSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue,
}) => {
  const { verticalIconsWithLabelsThemeClasses } =
    useVerticalIconsWithLabelsThemeClasses({ size, themeClasses, variant });

  const icons = iconsWithLabels.map(({ iconName }) => iconName);

  return (
    <LayoutContainer
      themeClasses={{
        ...verticalIconsWithLabelsDefaultThemeClasses.wrapper,
        ...themeClasses?.wrapper,
      }}
    >
      <VerticalIcons
        icons={icons}
        size={mapVerticalIconsWithLabelsSizeToVerticalIconSize[size]}
      />
      <LayoutContainer
        themeClasses={verticalIconsWithLabelsThemeClasses.labelsWrapper}
      >
        {iconsWithLabels.map(
          ({ href, isExternal, label }: IIconWithLabelProps): JSX.Element => (
            <LayoutContainer
              key={label}
              themeClasses={verticalIconsWithLabelsThemeClasses.labelContainer}
            >
              {href ? (
                <Link href={href} isExternal={isExternal}>
                  <Typography
                    ellipsis
                    themeClasses={verticalIconsWithLabelsThemeClasses.label}
                  >
                    {label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  ellipsis
                  themeClasses={verticalIconsWithLabelsThemeClasses.label}
                >
                  {label}
                </Typography>
              )}
            </LayoutContainer>
          ),
        )}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { VerticalIconsWithLabels };
