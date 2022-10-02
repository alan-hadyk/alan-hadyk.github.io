import { Icon } from "components/atoms/Icon";
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
      <Icon
        themeClasses={{
          fill: "childrenPath:fill-blue300",
          height: isSafari() ? "h-[18vh]" : "h-100%",
          width: isSafari() ? "w-[18vh]" : "w-[100%]"
        }}
        iconName="brandNext"
        isResponsive
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { NextLogo };
