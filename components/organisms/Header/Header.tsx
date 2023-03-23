import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { LinkWithImage } from "components/molecules/LinkWithImage/LinkWithImage";
import { IHeaderProps } from "components/organisms/Header/@types/Header";
import { useHeaderThemeClasses } from "components/organisms/Header/hooks/useHeaderThemeClasses";
import {
  headerInnerContainerDefaultThemeClasses,
  headerInnerWrapperDefaultThemeClasses,
  headerLinkWithImageContainerDefaultThemeClasses,
  headerMobileLinkWithImageContainerDefaultThemeClasses,
  headerOuterContainerDefaultThemeClasses,
  headerOuterWrapperDefaultThemeClasses
} from "components/organisms/Header/styles";
import { useHeaderState } from "components/organisms/Header/hooks/useTypingAnimationState";

const Header: React.FC<IHeaderProps> = ({ children, themeClasses }) => {
  const { isMenuVisible, toggleMenuVisibility } = useHeaderState();

  const { headerContainerThemeClasses } = useHeaderThemeClasses({
    themeClasses
  });

  return (
    <LayoutContainer themeClasses={headerContainerThemeClasses}>
      <LayoutContainer
        as="header"
        themeClasses={headerOuterWrapperDefaultThemeClasses}
      >
        <LayoutContainer themeClasses={headerInnerWrapperDefaultThemeClasses}>
          <LayoutContainer
            themeClasses={headerOuterContainerDefaultThemeClasses}
          >
            <LayoutContainer
              themeClasses={headerInnerContainerDefaultThemeClasses}
            >
              <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
                <LinkWithImage
                  href="/"
                  iconName="logo"
                  themeClasses={headerLinkWithImageContainerDefaultThemeClasses}
                />
              </Responsive>

              <Responsive devices={[Device.Mobile]}>
                <LinkWithImage
                  href="/"
                  iconName="logoShortcut"
                  themeClasses={
                    headerMobileLinkWithImageContainerDefaultThemeClasses
                  }
                />
              </Responsive>

              {children({ isMenuVisible, toggleMenuVisibility })}
            </LayoutContainer>
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { Header };
