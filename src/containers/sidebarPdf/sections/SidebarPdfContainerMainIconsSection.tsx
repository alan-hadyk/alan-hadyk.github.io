import {
  VerticalIconsWithLabelsSize,
  VerticalIconsWithLabelsVariant,
} from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import { VerticalIconsWithLabels } from "@app/components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";
import { mainIconsWithLabels } from "@app/containers/sidebarPdf/config";
import { sidebarPdfContainerMainIconsDefaultThemeClasses } from "@app/containers/sidebarPdf/styles";

const SidebarPdfContainerMainIconsSection: React.FC = () => (
  <VerticalIconsWithLabels
    iconsWithLabels={mainIconsWithLabels}
    size={VerticalIconsWithLabelsSize.Small}
    themeClasses={sidebarPdfContainerMainIconsDefaultThemeClasses}
    variant={VerticalIconsWithLabelsVariant.White}
  />
);

export { SidebarPdfContainerMainIconsSection };
