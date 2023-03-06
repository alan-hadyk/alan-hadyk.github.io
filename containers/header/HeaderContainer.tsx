import { Header } from "components/organisms/Header";
import { openCV } from "containers/header/helpers/openCV";
import { HeaderContainerDesktop } from "containers/header/screens/HeaderContainerDesktop";
import { HeaderContainerTabletAndMobile } from "containers/header/screens/HeaderContainerTabletAndMobile";
import { HeaderContainerTv } from "containers/header/screens/HeaderContainerTv";

const HeaderContainer: React.FC = () => (
  <Header>
    {({ isMenuVisible, toggleMenuVisibility }) => (
      <>
        <HeaderContainerTv onCVButtonClick={openCV} />

        <HeaderContainerDesktop
          isMenuVisible={isMenuVisible}
          onCVButtonClick={openCV}
          onClick={toggleMenuVisibility}
        />

        <HeaderContainerTabletAndMobile
          isMenuVisible={isMenuVisible}
          onCVButtonClick={openCV}
          onClick={toggleMenuVisibility}
        />
      </>
    )}
  </Header>
);

export { HeaderContainer };
