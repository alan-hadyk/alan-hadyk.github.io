import PropTypes from "prop-types";

import { Text } from "components/atoms/Text";
import { iconNames } from "components/atoms/Icon";
import { IconsWithLabels } from "components/molecules/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { ITechStackProps } from "components/molecules/@types/TechStack";
import { colorPropType } from "helpers/propTypes/color";

const TechStack: React.FC<ITechStackProps> = ({ iconsWithLabels }) => (
  <LayoutContainer dataCy="CompanyTechStack" marginBottom="mb-16">
    <Text
      color="text-blue100"
      dataCy="TechStackTitle"
      fontFamily="font-anonymousPro"
      fontSize="text-24"
      fontWeight="font-bold"
      lineHeight="leading-32"
    >
      Tech stack
    </Text>
    <LayoutContainer marginLeft="ml-16" marginTop="mt-16">
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position="horizontal"
        size="small"
      />
    </LayoutContainer>
  </LayoutContainer>
);

TechStack.propTypes = {
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: colorPropType("text"),
      size: PropTypes.oneOf<"small" | "medium" | "large">([
        "small",
        "medium",
        "large"
      ])
    }).isRequired
  ).isRequired
};

export { TechStack };
