import React, { Fragment } from "react";

import { Responsive } from "components/layout/Responsive/Responsive";
import {
  ISectionProps,
  SectionVariant
} from "components/molecules/Section/@types/Section";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { SectionTitle } from "components/molecules/SectionTitle/SectionTitle";
import { SectionTitleVariant } from "components/molecules/SectionTitle/@types/SectionTitle";
import { useSectionThemeClasses } from "components/molecules/Section/hooks/useSectionThemeClasses";

const Section: React.FC<ISectionProps> = ({
  children,
  id,
  themeClasses,
  title,
  variant = SectionVariant.Dark
}) => {
  const {
    sectionThemeClasses,
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses
  } = useSectionThemeClasses({ themeClasses, title, variant });

  return (
    <LayoutContainer id={id} themeClasses={sectionThemeClasses}>
      {title && (
        <Fragment>
          <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
            <SectionTitle
              themeClasses={sectionTitleTvDesktopTabletThemeClasses}
              variant={
                variant === SectionVariant.Dark
                  ? SectionTitleVariant.Dark
                  : SectionTitleVariant.Light
              }
            >
              {title}
            </SectionTitle>
          </Responsive>

          <Responsive devices={[Device.Mobile]}>
            <SectionTitle
              themeClasses={sectionTitleMobileThemeClasses}
              variant={
                variant === SectionVariant.Dark
                  ? SectionTitleVariant.Dark
                  : SectionTitleVariant.Light
              }
            >
              {title}
            </SectionTitle>
          </Responsive>
        </Fragment>
      )}

      <Fragment>{children}</Fragment>
    </LayoutContainer>
  );
};

export { Section };
