import { Icon } from "components/atoms/Icon";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { isSafari } from "helpers/browser/isSafari";

const Earth: React.FC = () => (
  <LayoutContainer height="h-100%" padding="p-[1vh]" width="w-100%">
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      height="h-100%"
      justifyContent="justify-center"
    >
      <Icon
        iconName="earth"
        isResponsive
        themeClasses={{
          height: isSafari() ? "h-[18vh]" : "h-100%",
          width: isSafari() ? "w-[18vh]" : "w-100%"
        }}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { Earth };
