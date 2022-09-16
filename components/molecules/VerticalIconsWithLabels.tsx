import PropTypes from "prop-types";

import { Icon, iconNames } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";
import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "components/molecules/IconWithLabel";

import { IVerticalIconsWithLabelsProps } from "components/molecules/@types/VerticalIconsWithLabels";
import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { colorPropType } from "helpers/propTypes/color";

const VerticalIconsWithLabels: React.FC<IVerticalIconsWithLabelsProps> = ({
  iconsWithLabels,
  labelColor = "text-blue100",
  size = "medium"
}) => (
  <LayoutContainer
    alignItems="items-center"
    display="flex"
    flexFlow="flex-row flex-nowrap"
    height="h-100%"
    justifyContent="justify-center"
    width="w-100%"
  >
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      flexFlow="flex-col flex-nowrap"
      flex="flex-[0_0_9.2rem]"
    >
      {iconsWithLabels.map(
        ({ iconName }: IIconWithLabelProps, index: number): JSX.Element => (
          <LayoutContainer
            dataCy="VerticalIcon"
            key={iconName + index}
            marginBottom="mb-12"
          >
            <Icon height={mapSizeToIconHeight[size]} iconName={iconName} />
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
    <LayoutContainer flex="flex-[0_0_75%]">
      {iconsWithLabels.map(
        ({ label }: IIconWithLabelProps): JSX.Element => (
          <LayoutContainer
            dataCy="VerticalLabel"
            height="h-32"
            key={label}
            marginBottom="mb-12"
          >
            <Text
              dataTestId="LabelText"
              color={labelColor}
              ellipsis
              fontSize={mapSizeToTextFontSize[size]}
              key={label}
              lineHeight="leading-32"
            >
              {label}
            </Text>
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
  </LayoutContainer>
);

VerticalIconsWithLabels.propTypes = {
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  labelColor: colorPropType("text"),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export { VerticalIconsWithLabels };
