import {
  IconWithLabelSize,
  IconWithLabelVariant
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { VerticalIconsWithLabels } from "components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";
import { mainIconsWithLabels } from "containers/sidebarPdf/config";
import { sidebarPdfContainerMainIconsDefaultThemeClasses } from "containers/sidebarPdf/styles";

const SidebarPdfContainerMainIconsSection: React.FC = () => (
  <VerticalIconsWithLabels
    iconsWithLabels={mainIconsWithLabels}
    size={IconWithLabelSize.Small}
    themeClasses={sidebarPdfContainerMainIconsDefaultThemeClasses}
    variant={IconWithLabelVariant.White}
  />
);

export { SidebarPdfContainerMainIconsSection };
