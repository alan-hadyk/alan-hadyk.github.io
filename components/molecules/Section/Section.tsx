import React, { Fragment } from "react";

import { Responsive } from "components/layout/Responsive/Responsive";
import { ISectionProps } from "components/molecules/Section/@types/Section";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { SectionTitle } from "components/molecules/SectionTitle/SectionTitle";
import {
  sectionDefaultThemeClasses,
  sectionTitleMobileDefaultThemeClasses,
  sectionTitleTvDesktopTabletDefaultThemeClasses
} from "components/molecules/Section/styles";
import { IThemeClasses } from "types/theme";

const Section: React.FC<ISectionProps> = ({
  children,
  id,
  title,
  themeClasses
}) => {
  const sectionThemeClasses: IThemeClasses = {
    ...sectionDefaultThemeClasses,
    paddingTop: title ? "pt-96" : "pt-0",
    ...themeClasses
  };

  return (
    <LayoutContainer id={id} themeClasses={sectionThemeClasses}>
      {title && (
        <Fragment>
          <Responsive devices={[Device.TV, Device.DESKTOP, Device.TABLET]}>
            <SectionTitle
              themeClasses={sectionTitleTvDesktopTabletDefaultThemeClasses}
            >
              {title}
            </SectionTitle>
          </Responsive>

          <Responsive devices={[Device.MOBILE]}>
            <SectionTitle themeClasses={sectionTitleMobileDefaultThemeClasses}>
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
