import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
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
      <ImageDynamic
        imageName="earth"
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
