import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";

import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { animatedIcons } from "components/molecules/AnimatedIcons/config";
import {
  animatedIconsDefaultThemeClasses,
  animatedIconsContainerDefaultThemeClasses,
  animatedIconsIconWrapperDefaultThemeClasses,
  animatedIconsIconWrapperDefaultStyles,
  animatedIconsIconDefaultThemeClasses
} from "components/molecules/AnimatedIcons/styles";

const AnimatedIcons: React.FC = () => (
  <LayoutContainer themeClasses={animatedIconsDefaultThemeClasses}>
    <LayoutContainer themeClasses={animatedIconsContainerDefaultThemeClasses}>
      {animatedIcons.map(
        (icon: IIconDynamicProps["iconName"]): JSX.Element => (
          <LayoutContainer
            key={icon}
            style={animatedIconsIconWrapperDefaultStyles}
            themeClasses={animatedIconsIconWrapperDefaultThemeClasses}
          >
            <IconDynamic
              themeClasses={animatedIconsIconDefaultThemeClasses}
              iconName={icon}
              isResponsive
            />
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
  </LayoutContainer>
);

export { AnimatedIcons };
