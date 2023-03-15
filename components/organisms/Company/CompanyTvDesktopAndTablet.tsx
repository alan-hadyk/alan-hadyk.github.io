import React from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { CompanyDescription } from "components/organisms/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline";
import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  responsibilitiesPaddingBottom,
  timelineBottom,
  title
}) => (
  <Responsive devices={[Device.TV, Device.DESKTOP, Device.TABLET]}>
    <CompanyTimeline timelineBottom={timelineBottom} />

    <LayoutContainer
      themeClasses={{
        alignItems: "items-start",
        display: "flex",
        flexFlow: "flex-row-nowrap",
        marginX: "mx-auto",
        marginY: "my-0",
        maxWidth: "max-w-1056"
      }}
    >
      <LayoutContainer
        themeClasses={{
          flex: "flex-[0_0_50%]",
          paddingRight: "pr-40",
          pseudoClasses: isIE11()
            ? [
                "msHighContrastNone:flex-none",
                "msHighContrastNone:w-50%",
                "msHighContrastActive:flex-none",
                "msHighContrastActive:w-50%"
              ]
            : []
        }}
      >
        <Typography
          themeClasses={{
            color: "text-white",
            fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
            fontSize: "text-48",
            lineHeight: "leading-56",
            textAlign: "text-right"
          }}
        >
          {name}
        </Typography>
      </LayoutContainer>

      <LayoutContainer
        themeClasses={{
          flex: "flex-[0_0_50%]",
          paddingLeft: "pl-40",
          pseudoClasses: isIE11()
            ? [
                "msHighContrastNone:flex-none",
                "msHighContrastNone:w-50%",
                "msHighContrastActive:flex-none",
                "msHighContrastActive:w-50%"
              ]
            : []
        }}
      >
        <CompanyDescription
          date={date}
          iconsWithLabels={iconsWithLabels}
          link={link}
          responsibilities={responsibilities}
          responsibilitiesPaddingBottom={responsibilitiesPaddingBottom}
          title={title}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

export { CompanyTvDesktopAndTablet };
