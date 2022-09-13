import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Text } from "components/atoms/Text";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import {
  IRenderTitle,
  ISectionProps
} from "components/molecules/@types/Section";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropType } from "helpers/propTypes/spacing";
import { childrenPropTypes } from "helpers/propTypes/children";
import { Device } from "components/layout/@types/Responsive";
import { minHeightPropType } from "helpers/propTypes/minHeight";

const Section: React.FC<ISectionProps> = ({
  children,
  dataCy,
  id,
  marginBottom = "mb-0",
  minHeight,
  title
}) => {
  const renderTitle = ({
    fontSize,
    marginBottom
  }: IRenderTitle): JSX.Element | null =>
    title ? (
      <LayoutContainer marginBottom={marginBottom}>
        <Text
          color="text-blue100"
          fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
          fontSize={fontSize}
          lineHeight="leading-80"
          textAlign="text-center"
          textTransform={isIE11() ? "uppercase" : "lowercase"}
        >
          {title}
        </Text>
      </LayoutContainer>
    ) : null;

  return (
    <LayoutContainer
      className={minHeight}
      dataCy={dataCy}
      id={id}
      marginBottom={marginBottom}
      paddingTop={title ? "pt-96" : "pt-0"}
    >
      {title && (
        <Fragment>
          <Responsive
            dataTestId="ResponsiveTitleTvDesktopTablet"
            devices={[Device.TV, Device.DESKTOP, Device.TABLET]}
          >
            {renderTitle({
              fontSize: "text-72",
              marginBottom: "mb-96"
            })}
          </Responsive>

          <Responsive
            dataTestId="ResponsiveTitleMobile"
            devices={[Device.MOBILE]}
          >
            {renderTitle({
              fontSize: "text-48",
              marginBottom: "mb-48"
            })}
          </Responsive>
        </Fragment>
      )}

      <Fragment>{children}</Fragment>
    </LayoutContainer>
  );
};

Section.propTypes = {
  children: childrenPropTypes.isRequired,
  dataCy: PropTypes.string,
  id: PropTypes.string.isRequired,
  marginBottom: spacingPropType("mb"),
  minHeight: minHeightPropType,
  title: PropTypes.string
};

export { Section };
