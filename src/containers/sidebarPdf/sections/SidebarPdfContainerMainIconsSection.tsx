import {
  IconWithLabelSize,
  IconWithLabelVariant,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { VerticalIconsWithLabels } from "@app/components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";
import { mainIconsWithLabels } from "@app/containers/SidebarPdf/config";
import { sidebarPdfContainerMainIconsDefaultThemeClasses } from "@app/containers/SidebarPdf/styles";

const SidebarPdfContainerMainIconsSection: React.FC = () => (
  <VerticalIconsWithLabels
    iconsWithLabels={mainIconsWithLabels}
    size={IconWithLabelSize.Small}
    themeClasses={sidebarPdfContainerMainIconsDefaultThemeClasses}
    variant={IconWithLabelVariant.White}
  />
);

export { SidebarPdfContainerMainIconsSection };
