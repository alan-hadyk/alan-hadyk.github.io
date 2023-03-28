import { Header } from "components/organisms/Header/Header";
import { openCV } from "containers/Header/helpers/openCV";
import { HeaderContainerDesktop } from "containers/Header/screens/HeaderContainerDesktop";
import { HeaderContainerTabletAndMobile } from "containers/Header/screens/HeaderContainerTabletAndMobile";
import { HeaderContainerTv } from "containers/Header/screens/HeaderContainerTv";

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
