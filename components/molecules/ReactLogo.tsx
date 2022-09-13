import { Icon } from "components/atoms/Icon";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { isSafari } from "helpers/browser/isSafari";

const ReactLogo: React.FC = () => (
  <LayoutContainer height="h-100%" padding="p-[1vh]" width="w-100%">
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      height="h-100%"
      justifyContent="justify-center"
    >
      <Icon
        height={isSafari() ? "h-[18vh]" : "h-100%"}
        iconName="reactLogo"
        isResponsive
        width={isSafari() ? "w-[18vh]" : "w-[100%]"}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { ReactLogo };
