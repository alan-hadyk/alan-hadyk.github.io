import { detect } from "detect-browser";

import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useEffect, useState } from "react";
import {
  browserInfoDefaultThemeClasses,
  browserInfoIconDefaultThemeClasses,
  browserInfoIconWrapperActiveIconDefaultThemeClasses,
  browserInfoIconWrapperDefaultThemeClasses,
  browserInfoIconWrapperInactiveIconDefaultThemeClasses,
  browserInfoInnerContainerDefaultThemeClasses,
  browserInfoOuterContainerDefaultThemeClasses,
} from "@app/components/molecules/BrowserInfo/styles";
import { browserIcons } from "@app/components/molecules/BrowserInfo/config";
import { TActiveIcon } from "@app/components/molecules/BrowserInfo/@types/BrowserInfo";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import {
  ImageDynamicName,
  ImageDynamicVariant,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";

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
              (icon) => icon === activeIcon,
            );
            const isIconActive =
              icon === ImageDynamicName.IE
                ? activeIcon === ImageDynamicName.IE || activeIcon === "edge"
                : activeIcon === icon;

            return (
              <LayoutContainer
                key={icon}
                themeClasses={{
                  ...browserInfoIconWrapperDefaultThemeClasses,
                  mediaQuery: isIconActive
                    ? browserInfoIconWrapperActiveIconDefaultThemeClasses
                    : browserInfoIconWrapperInactiveIconDefaultThemeClasses,
                }}
              >
                <ImageDynamic
                  themeClasses={browserInfoIconDefaultThemeClasses}
                  imageName={icon}
                  variants={[
                    ...(isIconActive || isIconUnknown
                      ? [
                          ImageDynamicVariant.GlowAnimation,
                          ImageDynamicVariant.Active,
                        ]
                      : []),
                    ImageDynamicVariant.Responsive,
                  ]}
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
