import { HexagonWithDescriptionContent } from "components/molecules/HexagonWithDescriptionContent/HexagonWithDescriptionContent";
import { Responsive } from "components/layout/Responsive/Responsive";

import { IHexagonWithDescriptionProps } from "components/molecules/HexagonWithDescription/@types/HexagonWithDescription";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import {
  hexagonWithDescriptionDefaultThemeClasses,
  hexagonWithDescriptionMobileDescriptionContentDefaultThemeClasses,
  hexagonWithDescriptionTabletDescriptionContentDefaultThemeClasses,
  hexagonWithDescriptionTvDesktopDescriptionContentDefaultThemeClasses
} from "components/molecules/HexagonWithDescription/styles";

const HexagonWithDescription: React.FC<IHexagonWithDescriptionProps> = ({
  children,
  description
}) => (
  <LayoutContainer themeClasses={hexagonWithDescriptionDefaultThemeClasses}>
    <Responsive devices={[Device.TV, Device.DESKTOP]}>
      <HexagonWithDescriptionContent
        description={description}
        themeClasses={
          hexagonWithDescriptionTvDesktopDescriptionContentDefaultThemeClasses
        }
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={[Device.TABLET]}>
      <HexagonWithDescriptionContent
        description={description}
        themeClasses={
          hexagonWithDescriptionTabletDescriptionContentDefaultThemeClasses
        }
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={[Device.MOBILE]}>
      <HexagonWithDescriptionContent
        description={description}
        themeClasses={
          hexagonWithDescriptionMobileDescriptionContentDefaultThemeClasses
        }
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>
  </LayoutContainer>
);

export { HexagonWithDescription };
