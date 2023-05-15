"use client";
import { Header } from "@app/components/organisms/Header/Header";
import { openCV } from "@app/containers/Header/helpers/openCV";
import { HeaderContainerDesktop } from "@app/containers/Header/screens/HeaderContainerDesktop";
import { HeaderContainerTabletAndMobile } from "@app/containers/Header/screens/HeaderContainerTabletAndMobile";
import { HeaderContainerTv } from "@app/containers/Header/screens/HeaderContainerTv";

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
