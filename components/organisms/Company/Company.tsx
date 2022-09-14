import PropTypes from "prop-types";

import { iconNames } from "components/atoms/Icon";
import { CompanyTvDesktopAndTablet } from "components/organisms/Company/CompanyTvDesktopAndTablet";
// import { CompanyMobile } from "components/organisms/Company/CompanyMobile";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropType } from "helpers/propTypes/spacing";
import { colorPropType } from "helpers/propTypes/color";

const Company: React.FC<ICompanyProps> = ({
  // companyMobilePaddingBottom,
  dataCy,
  date,
  iconsWithLabels,
  name,
  responsibilities,
  timelineBottom,
  title
}) => (
  <LayoutContainer dataCy={dataCy}>
    <LayoutContainer position="relative" width="w-100%">
      <CompanyTvDesktopAndTablet
        date={date}
        iconsWithLabels={iconsWithLabels}
        name={name}
        responsibilities={responsibilities}
        timelineBottom={timelineBottom}
        title={title}
      />

      {/* <CompanyMobile
        date={date}
        iconsWithLabels={iconsWithLabels}
        name={name}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={companyMobilePaddingBottom}
        title={title}
      /> */}
    </LayoutContainer>
  </LayoutContainer>
);

Company.propTypes = {
  companyMobilePaddingBottom: spacingPropType("pb"),
  dataCy: PropTypes.string,
  date: PropTypes.string.isRequired,
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
  ).isRequired,
  name: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired,
  timelineBottom: spacingPropType("bottom"),
  title: PropTypes.string.isRequired
};

export { Company };
