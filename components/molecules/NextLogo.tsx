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
        fill="childrenPath:fill-blue300"
        height={isSafari() ? "h-[18vh]" : "h-100%"}
        iconName="brandNext"
        isInlineSvg
        isResponsive
        width={isSafari() ? "w-[18vh]" : "w-[100%]"}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { NextLogo };
