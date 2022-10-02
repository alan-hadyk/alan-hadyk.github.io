import { HexagonWithDescriptionContent } from "components/molecules/HexagonWithDescriptionContent";
import { Responsive } from "components/layout/Responsive";

import { IHexagonWithDescriptionProps } from "components/molecules/@types/HexagonWithDescription";

import { isIE11 } from "helpers/browser/isIE11";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { Device } from "components/layout/@types/Responsive";

const HexagonWithDescription: React.FC<IHexagonWithDescriptionProps> = ({
  children,
  description
}) => (
  <LayoutContainer
    className="max-w-1056"
    dataCy="HexagonWithDescription"
    marginLeft="ml-auto"
    marginRight="mr-auto"
  >
    <Responsive
      dataCy="ResponsiveTvDesktop"
      devices={[Device.TV, Device.DESKTOP]}
    >
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="flex-row flex-nowrap"
        marginRight="mr-48"
        textWidth="w-50%"
        width="w-50%"
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive dataCy="ResponsiveTablet" devices={[Device.TABLET]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="flex-col flex-nowrap"
        marginBottom="mb-48"
        textWidth="w-80%"
        width={isIE11() ? "w-auto" : "60%"}
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive dataCy="ResponsiveMobile" devices={[Device.MOBILE]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="flex-col flex-nowrap"
        lineHeight="leading-28"
        marginBottom="mb-48"
        width={isIE11() ? "w-auto" : "w-100%"}
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>
  </LayoutContainer>
);

export { HexagonWithDescription };
