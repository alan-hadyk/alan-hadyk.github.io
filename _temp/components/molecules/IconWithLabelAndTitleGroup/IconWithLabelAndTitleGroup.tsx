import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";
import { IIconWithLabelAndTitleGroupProps } from "components/molecules/IconWithLabelAndTitleGroup/@types/IconWithLabelAndTitleGroup";
import {
  iconWithLabelAndTitleGroupDefaultThemeClasses,
  iconWithLabelAndTitleGroupIconDefaultThemeClasses,
  iconWithLabelAndTitleGroupTitleDefaultThemeClasses
} from "components/molecules/IconWithLabelAndTitleGroup/styles";

const IconWithLabelAndTitleGroup: React.FC<
  IIconWithLabelAndTitleGroupProps
> = ({ iconsWithLabelsGroup }) => (
  <LayoutContainer themeClasses={iconWithLabelAndTitleGroupDefaultThemeClasses}>
    {iconsWithLabelsGroup.map(({ iconWithLabel, title }, index) => (
      <LayoutContainer key={title + index}>
        <Typography
          themeClasses={iconWithLabelAndTitleGroupTitleDefaultThemeClasses}
        >
          {title}
        </Typography>
        <IconWithLabel
          {...iconWithLabel}
          size={IconWithLabelSize.ExtraSmall}
          themeClasses={iconWithLabelAndTitleGroupIconDefaultThemeClasses}
        />
      </LayoutContainer>
    ))}
  </LayoutContainer>
);

export { IconWithLabelAndTitleGroup };
