import { Icon } from "components/atoms/Icon";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { isSafari } from "helpers/browser/isSafari";

const Earth = (): JSX.Element => (
  <LayoutContainer
    dataTestId="Earth"
    height="h-100%"
    paddingBottom="pb-[1vh]"
    paddingLeft="pl-[1vw]"
    paddingRight="pr-[1vw]"
    paddingTop="pt-[1vh]"
    width="w-100%"
  >
    <LayoutContainer
      alignItems="center"
      dataTestId="EarthLayoutContainer"
      height="100%"
      justifyContent="center"
    >
      <Icon
        height={isSafari() ? "18vh" : "100%"}
        iconName="earth"
        isResponsive
        width={isSafari() ? "18vh" : "100%"}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { Earth };
