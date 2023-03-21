import { detect } from "detect-browser";

import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { useEffect, useState } from "react";
import { TMediaQuery } from "types/theme";
import {
  browserInfoDefaultThemeClasses,
  browserInfoIconDefaultThemeClasses,
  browserInfoIconWrapperDefaultThemeClasses,
  browserInfoInnerContainerDefaultThemeClasses,
  browserInfoOuterContainerDefaultThemeClasses
} from "components/molecules/BrowserInfo/styles";
import { browserIcons } from "components/molecules/BrowserInfo/config";
import { TActiveIcon } from "components/molecules/BrowserInfo/@types/BrowserInfo";
import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";

const BrowserInfo: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<TActiveIcon>();
  const browserInfo = detect();
  const { name } = browserInfo || {};

  useEffect(() => {
    setActiveIcon(name);
  }, [name]);

  return (
    <LayoutContainer themeClasses={browserInfoDefaultThemeClasses}>
      <LayoutContainer
        themeClasses={browserInfoOuterContainerDefaultThemeClasses}
      >
        <LayoutContainer
          themeClasses={browserInfoInnerContainerDefaultThemeClasses}
        >
          {browserIcons.map((icon) => {
            const isIconUnknown = !browserIcons.find(
              (icon) => icon === activeIcon
            );
            const isIconActive =
              icon === IconDynamicName.IE
                ? activeIcon === IconDynamicName.IE || activeIcon === "edge"
                : activeIcon === icon;

            return (
              <LayoutContainer
                key={icon}
                themeClasses={{
                  ...browserInfoIconWrapperDefaultThemeClasses,
                  mediaQuery: [
                    ...(isIconActive
                      ? [
                          "screenMaxHeight640:block",
                          "screenMaxHeight640:h-100%",
                          "screenMaxHeight640:mx-auto",
                          "screenMaxHeight640:my-0"
                        ]
                      : ["screenMaxHeight640:hidden"])
                  ] as TMediaQuery[]
                }}
              >
                <IconDynamic
                  themeClasses={browserInfoIconDefaultThemeClasses}
                  iconName={icon}
                  isActive={isIconActive || isIconUnknown}
                  isResponsive
                  shouldDisplayGlowAnimation={isIconActive || isIconUnknown}
                />
              </LayoutContainer>
            );
          })}
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { BrowserInfo };
