import { Typography } from "components/atoms/Typography";
import { CompanyDescription } from "components/organisms/CompanyDescription";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";

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
      alignItems="items-center"
      className="directChildren:mt-48 firstdirectChild:mt-48 max-w-1056"
      display="flex"
      flexFlow="flex-col flex-nowrap"
    >
      <Typography
        color="text-white"
        fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
        fontSize="text-48"
        lineHeight="leading-48"
        textAlign="text-center"
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
