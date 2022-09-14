import PropTypes from "prop-types";

import { iconNames } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";
import { IconWithLabel } from "components/molecules/IconWithLabel";
import { UnorderedList } from "components/molecules/UnorderedList";
import { isIE11 } from "helpers/browser/isIE11";

import { ICompanyDescriptionProps } from "components/organisms/@types/CompanyDescription";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { TechStack } from "components/molecules/TechStack";
import { spacingPropType } from "helpers/propTypes/spacing";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  responsibilities,
  responsibilitiesPaddingBottom = "pb-68",
  textAlign = "text-left",
  title
}) => (
  <LayoutContainer
    className="msHighContrastNone:w-100% msHighContrastActive:w-100%"
    data-testid="CompanyDescription"
  >
    <Text
      color="text-white"
      dataCy="CompanyDescriptionMainTitle"
      dataTestId="MainTitle"
      fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
      fontSize="text-36"
      lineHeight="leading-56"
      textAlign={textAlign}
      textTransform="uppercase"
    >
      {title}
    </Text>

    <LayoutContainer marginBottom="mb-32" marginTop="mt-32">
      <IconWithLabel
        labelColor="text-blue300"
        iconName="calendar"
        label={date}
        size="medium"
      />
    </LayoutContainer>

    <TechStack iconsWithLabels={iconsWithLabels} />

    <LayoutContainer
      dataCy="CompanyResponsibilities"
      paddingBottom={responsibilitiesPaddingBottom}
    >
      <Text
        color="text-blue100"
        dataTestId="ResponsibilitiesTitle"
        fontFamily="font-anonymousPro"
        fontSize="text-24"
        fontWeight="font-bold"
        lineHeight="leading-32"
      >
        Responsibilities
      </Text>
      <LayoutContainer marginLeft="ml-16" marginTop="mt-16">
        <UnorderedList items={responsibilities} />
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

CompanyDescription.propTypes = {
  date: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired,
  responsibilitiesPaddingBottom: spacingPropType("pb"),
  textAlign: PropTypes.oneOf(["text-left", "text-center", "text-right"]),
  title: PropTypes.string.isRequired
};

export { CompanyDescription };
