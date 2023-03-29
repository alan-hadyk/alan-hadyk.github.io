import { Typography } from "components/atoms/Typography/Typography";

import { IVerticalIconsWithLabelsProps } from "components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconStatic } from "components/atoms/IconStatic/IconStatic";
import { verticalIconsWithLabelsDefaultThemeClasses } from "components/molecules/VerticalIconsWithLabels/styles";
import { useVerticalIconsWithLabelsThemeClasses } from "components/molecules/VerticalIconsWithLabels/hooks/useVerticalIconsWithLabelsThemeClasses";
import { Link } from "components/molecules/Link/Link";

const VerticalIconsWithLabels: React.FC<IVerticalIconsWithLabelsProps> = ({
  iconsWithLabels,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue
}) => {
  const {
    verticalIconsWithLabelsIconContainerThemeClasses,
    verticalIconsWithLabelsIconThemeClasses,
    verticalIconsWithLabelsIconsWrapperThemeClasses,
    verticalIconsWithLabelsLabelContainerThemeClasses,
    verticalIconsWithLabelsLabelThemeClasses,
    verticalIconsWithLabelsLabelsWrapperThemeClasses
  } = useVerticalIconsWithLabelsThemeClasses({ size, themeClasses, variant });

  return (
    <LayoutContainer
      themeClasses={{
        ...verticalIconsWithLabelsDefaultThemeClasses,
        ...themeClasses?.wrapper
      }}
    >
      <LayoutContainer
        themeClasses={verticalIconsWithLabelsIconsWrapperThemeClasses}
      >
        {iconsWithLabels.map(
          ({ iconName }: IIconWithLabelProps, index: number): JSX.Element => (
            <LayoutContainer
              key={iconName + index}
              themeClasses={verticalIconsWithLabelsIconContainerThemeClasses}
            >
              <IconStatic
                themeClasses={verticalIconsWithLabelsIconThemeClasses}
                iconName={iconName}
              />
            </LayoutContainer>
          )
        )}
      </LayoutContainer>
      <LayoutContainer
        themeClasses={verticalIconsWithLabelsLabelsWrapperThemeClasses}
      >
        {iconsWithLabels.map(
          ({ href, isExternal, label }: IIconWithLabelProps): JSX.Element => (
            <LayoutContainer
              key={label}
              themeClasses={verticalIconsWithLabelsLabelContainerThemeClasses}
            >
              {href ? (
                <Link href={href} isExternal={isExternal}>
                  <Typography
                    ellipsis
                    themeClasses={verticalIconsWithLabelsLabelThemeClasses}
                  >
                    {label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  ellipsis
                  themeClasses={verticalIconsWithLabelsLabelThemeClasses}
                >
                  {label}
                </Typography>
              )}
            </LayoutContainer>
          )
        )}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { VerticalIconsWithLabels };
