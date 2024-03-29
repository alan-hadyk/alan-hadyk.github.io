import { Button } from "@app/components/molecules/Button/Button";
import { HorizontalLinksWithImages } from "@app/components/molecules/HorizontalLinksWithImages/HorizontalLinksWithImages";
import { Nav } from "@app/components/molecules/Nav/Nav";

import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { isIE11 } from "@app/helpers/browser/isIE11";

import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerTvProps } from "@app/containers/header/@types/HeaderContainerTv";
import { ButtonSize } from "@app/components/molecules/Button/@types/Button";
import { icons, navItems } from "@app/containers/header/config";
import { headerContainerTvDefaultThemeClasses } from "@app/containers/header/styles";
import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";

const HeaderContainerTv: React.FC<IHeaderContainerTvProps> = ({
  onCVButtonClick,
}) => (
  <Responsive devices={[Device.Tv]}>
    <LayoutContainer themeClasses={headerContainerTvDefaultThemeClasses}>
      <LayoutContainer themeClasses={{ marginRight: "mr-24" }}>
        <Nav navItems={navItems} />
      </LayoutContainer>

      <Button
        iconName={ImageDynamicName.Download}
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size={ButtonSize.Medium}
        tabIndex={0}
      >
        Resume
      </Button>

      <HorizontalLinksWithImages icons={icons} />
    </LayoutContainer>
  </Responsive>
);

export { HeaderContainerTv };
