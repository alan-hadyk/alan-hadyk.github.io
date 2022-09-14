import PropTypes from "prop-types";

import { iconNames } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";
import { CompanyDescription } from "components/organisms/CompanyDescription";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/@types/Responsive";
import { spacingPropType } from "helpers/propTypes/spacing";
import { LayoutContainer } from "components/layout/LayoutContainer";

const CompanyMobile: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  name,
  responsibilities,
  responsibilitiesPaddingBottom,
  title
}) => (
  <Responsive dataTestId="CompanyMobile" devices={[Device.MOBILE]}>
    <LayoutContainer
      alignItems="items-center"
      className="directChildren:mt-48 firstdirectChild:mt-48 max-w-1056"
      display="flex"
      flexFlow="flex-col flex-nowrap"
    >
      <Text
        color="text-white"
        dataTestId="CompanyMobileName"
        fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
        fontSize="text-48"
        lineHeight="leading-48"
        textAlign="text-center"
      >
        {name}
      </Text>

      <CompanyDescription
        date={date}
        iconsWithLabels={iconsWithLabels}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={responsibilitiesPaddingBottom}
        textAlign="text-center"
        title={title}
      />
    </LayoutContainer>
  </Responsive>
);

CompanyMobile.propTypes = {
  date: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  name: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired,
  responsibilitiesPaddingBottom: spacingPropType("pb"),
  title: PropTypes.string.isRequired
};

export { CompanyMobile };
