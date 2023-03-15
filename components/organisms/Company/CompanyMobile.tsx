import { Typography } from "components/atoms/Typography/Typography";
import { CompanyDescription } from "components/organisms/CompanyDescription";
import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const CompanyMobile: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  responsibilitiesPaddingBottom,
  title
}) => (
  <Responsive devices={[Device.MOBILE]}>
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        display: "flex",
        flexFlow: "flex-col-nowrap",
        maxWidth: "max-w-1056",
        pseudoClasses: ["directChildren:mt-48", "firstdirectChild:mt-48"]
      }}
    >
      <Typography
        themeClasses={{
          color: "text-white",
          fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
          fontSize: "text-48",
          lineHeight: "leading-48",
          textAlign: "text-center"
        }}
      >
        {name}
      </Typography>

      <CompanyDescription
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={responsibilitiesPaddingBottom}
        textAlign="text-center"
        title={title}
      />
    </LayoutContainer>
  </Responsive>
);

export { CompanyMobile };
