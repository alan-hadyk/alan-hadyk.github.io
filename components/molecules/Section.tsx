import React, { Fragment } from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import {
  IRenderTitle,
  ISectionProps
} from "components/molecules/@types/Section";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { Device } from "components/layout/@types/Responsive";

const Section: React.FC<ISectionProps> = ({
  children,
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
        <Typography
          themeClasses={{
            color: "text-blue100",
            fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
            fontSize,
            lineHeight: "leading-80",
            textAlign: "text-center",
            textTransform: isIE11() ? "uppercase" : "lowercase"
          }}
        >
          {title}
        </Typography>
      </LayoutContainer>
    ) : null;

  return (
    <LayoutContainer
      className={minHeight}
      id={id}
      marginBottom={marginBottom}
      paddingTop={title ? "pt-96" : "pt-0"}
    >
      {title && (
        <Fragment>
          <Responsive devices={[Device.TV, Device.DESKTOP, Device.TABLET]}>
            {renderTitle({
              fontSize: "text-72",
              marginBottom: "mb-96"
            })}
          </Responsive>

          <Responsive devices={[Device.MOBILE]}>
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

export { Section };
