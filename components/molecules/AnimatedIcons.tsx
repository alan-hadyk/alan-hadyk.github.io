import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";

import { isSafari } from "helpers/browser/isSafari";

import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const animatedIcons: IIconDynamicProps["iconName"][] = [
  "react",
  "javaScript",
  "typeScript",
  "webpack",
  "nodeJs",
  "apollo",
  "graphql"
];

const AnimatedIcons: React.FC = () => (
  <LayoutContainer
    themeClasses={{
      height: "h-100%",
      padding: "p-8",
      width: "w-100%"
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        display: "flex",
        flexFlow: "flex-row-nowrap",
        height: "h-100%",
        justifyContent: "justify-center"
      }}
    >
      {animatedIcons.map(
        (icon: IIconDynamicProps["iconName"]): JSX.Element => (
          <LayoutContainer
            key={icon}
            themeClasses={{
              height: isSafari() ? "h-auto" : "h-100%",
              position: "relative",
              width: `${Number(Number(100 / animatedIcons.length).toFixed(2))}%`
            }}
          >
            <IconDynamic
              themeClasses={{
                height: isSafari() ? "h-[8vh]" : "h-100%",
                width: isSafari() ? "w-[8vh]" : "w-100%"
              }}
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
