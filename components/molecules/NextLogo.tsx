import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { isSafari } from "helpers/browser/isSafari";

const NextLogo: React.FC = () => (
  <LayoutContainer height="h-100%" padding="p-[2vh]" width="w-100%">
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      height="h-100%"
      justifyContent="justify-center"
    >
      <IconDynamic
        themeClasses={{
          height: isSafari() ? "h-[18vh]" : "h-100%",
          pseudoClasses: [
            "childrenSvg:animate-glow-slow",
            "childrenSvg:duration-slow",
            "childrenPath:fill-blue300"
          ],
          width: isSafari() ? "w-[18vh]" : "w-[100%]"
        }}
        iconName="nextJs"
        isResponsive
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { NextLogo };
