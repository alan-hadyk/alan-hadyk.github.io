import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";

import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { horizontalIcons } from "components/molecules/HorizontalIcons/config";
import {
  horizontalIconsDefaultThemeClasses,
  horizontalIconsContainerDefaultThemeClasses,
  horizontalIconsIconWrapperDefaultThemeClasses,
  horizontalIconsIconWrapperDefaultStyles,
  horizontalIconsIconDefaultThemeClasses
} from "components/molecules/HorizontalIcons/styles";

const HorizontalIcons: React.FC = () => (
  <LayoutContainer themeClasses={horizontalIconsDefaultThemeClasses}>
    <LayoutContainer themeClasses={horizontalIconsContainerDefaultThemeClasses}>
      {horizontalIcons.map(
        (icon: IIconDynamicProps["iconName"]): JSX.Element => (
          <LayoutContainer
            key={icon}
            style={horizontalIconsIconWrapperDefaultStyles}
            themeClasses={horizontalIconsIconWrapperDefaultThemeClasses}
          >
            <IconDynamic
              themeClasses={horizontalIconsIconDefaultThemeClasses}
              iconName={icon}
              isResponsive
            />
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
  </LayoutContainer>
);

export { HorizontalIcons };
