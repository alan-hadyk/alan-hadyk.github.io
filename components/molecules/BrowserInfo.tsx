import { Browser, detect } from "detect-browser";

import { Icon } from "components/atoms/Icon";

import { isSafari } from "helpers/browser/isSafari";

import { IIconProps } from "components/atoms/@types/Icon";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { useEffect, useState } from "react";

const BROWSER_ICONS: IIconProps["iconName"][] = [
  "chrome",
  "firefox",
  "ie",
  "opera",
  "safari",
  "unknown"
];

const BrowserInfo: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<
    Browser | "react-native" | "bot" | "node" | undefined
  >();
  const browserInfo = detect();
  const { name } = browserInfo || {};

  useEffect(() => {
    setActiveIcon(name);
  }, [name]);

  return (
    <LayoutContainer height="h-100%" padding="p-[1.25vh]" width="w-100%">
      <LayoutContainer data-testid="LayoutContainer" height="h-100%">
        <LayoutContainer
          alignItems="items-center"
          flexFlow="flex-row flex-wrap"
          height="h-100%"
          justifyContent="justify-between"
        >
          {BROWSER_ICONS.map((icon: IIconProps["iconName"]): JSX.Element => {
            const isUnknown = !BROWSER_ICONS.find(
              (icon: IIconProps["iconName"]) => icon === activeIcon
            );
            const isActive: boolean =
              icon === "ie"
                ? activeIcon === "ie" || activeIcon === "edge"
                : activeIcon === icon;

            return (
              <LayoutContainer
                className={`
                ${
                  isActive
                    ? "screenMaxHeight640:block screenMaxHeight640:h-100% screenMaxHeight640:mx-auto screenMaxHeight640:my-0"
                    : "screenMaxHeight640:hidden"
                }
                ${isSafari() ? "overflow-hidden" : "overflow-visible"}
              `}
                display={isSafari() ? "flex" : "block"}
                flex="flex-[0_1_28%]"
                height="h-50%"
                justifyContent={isSafari() ? "justify-center" : undefined}
                key={icon}
                paddingBottom="pb-[4.8%]"
                paddingTop="pt-[4.8%]"
              >
                <Icon
                  animation="childrenSvg:animate-glow-verySlow"
                  height={isSafari() ? "h-[4vh]" : "h-[100%]"}
                  iconName={icon}
                  isActive={isActive || isUnknown}
                  isResponsive
                  overflow={isSafari() ? "overflow-hidden" : "overflow-visible"}
                  shouldDisplayGlowAnimation={isActive || isUnknown}
                  width={isSafari() ? "4vh" : "100%"}
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
