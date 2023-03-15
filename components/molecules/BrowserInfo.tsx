import { Browser, detect } from "detect-browser";

import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";

import { isSafari } from "helpers/browser/isSafari";

import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { useEffect, useState } from "react";
import { TMediaQuery } from "types/theme";

const BROWSER_ICONS: IIconDynamicProps["iconName"][] = [
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
    <LayoutContainer
      themeClasses={{
        height: "h-100%",
        padding: "p-[1.25vh]",
        width: "w-100%"
      }}
    >
      <LayoutContainer
        themeClasses={{
          height: "h-100%"
        }}
      >
        <LayoutContainer
          themeClasses={{
            alignItems: "items-center",
            display: "flex",
            flexFlow: "flex-row-wrap",
            height: "h-100%",
            justifyContent: "justify-between"
          }}
        >
          {BROWSER_ICONS.map(
            (icon: IIconDynamicProps["iconName"]): JSX.Element => {
              const isUnknown = !BROWSER_ICONS.find(
                (icon: IIconDynamicProps["iconName"]) => icon === activeIcon
              );
              const isActive: boolean =
                icon === "ie"
                  ? activeIcon === "ie" || activeIcon === "edge"
                  : activeIcon === icon;

              return (
                <LayoutContainer
                  key={icon}
                  themeClasses={{
                    display: isSafari() ? "flex" : "block",
                    flex: "flex-[0_1_28%]",
                    height: "h-50%",
                    justifyContent: isSafari() ? "justify-center" : undefined,
                    mediaQuery: [
                      ...(isActive
                        ? [
                            "screenMaxHeight640:block",
                            "screenMaxHeight640:h-100%",
                            "screenMaxHeight640:mx-auto",
                            "screenMaxHeight640:my-0"
                          ]
                        : ["screenMaxHeight640:hidden"])
                    ] as TMediaQuery[],
                    overflow: isSafari()
                      ? "overflow-hidden"
                      : "overflow-visible",
                    paddingY: "py-[4.8%]"
                  }}
                >
                  <IconDynamic
                    themeClasses={{
                      height: isSafari() ? "h-[4vh]" : "h-[100%]",
                      overflow: isSafari()
                        ? "overflow-hidden"
                        : "overflow-visible",
                      pseudoClasses: [
                        "childrenSvg:animate-glow-verySlow",
                        "childrenSvg:duration-slow"
                      ],
                      width: isSafari() ? "4vh" : "100%"
                    }}
                    iconName={icon}
                    isActive={isActive || isUnknown}
                    isResponsive
                    shouldDisplayGlowAnimation={isActive || isUnknown}
                  />
                </LayoutContainer>
              );
            }
          )}
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { BrowserInfo };
