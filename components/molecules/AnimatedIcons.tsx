import { Icon } from "components/atoms/Icon";

import { isSafari } from "helpers/browser/isSafari";

import { IIconProps } from "components/atoms/@types/Icon";
import { LayoutContainer } from "components/layout/LayoutContainer";

const animatedIcons: IIconProps["iconName"][] = [
  "react",
  "javascript",
  "typescript",
  "webpack",
  "nodeIcon",
  "apollo",
  "graphql"
];

const AnimatedIcons: React.FC = () => (
  <LayoutContainer height="h-100%" padding="p-8" width="w-100%">
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      flexFlow="flex-row flex-nowrap"
      height="h-100%"
      justifyContent="justify-center"
    >
      {animatedIcons.map(
        (icon: IIconProps["iconName"]): JSX.Element => (
          <LayoutContainer
            height={isSafari() ? "h-auto" : "h-100%"}
            key={icon}
            position="relative"
            width={`${Number(Number(100 / animatedIcons.length).toFixed(2))}%`}
          >
            <Icon
              height={isSafari() ? "h-[8vh]" : "h-100%"}
              iconName={icon}
              isResponsive
              width={isSafari() ? "w-[8vh]" : "w-100%"}
            />
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
  </LayoutContainer>
);

export { AnimatedIcons };
