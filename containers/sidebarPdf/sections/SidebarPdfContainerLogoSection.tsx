import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { Typography } from "components/atoms/Typography/Typography";
import {
  sidebarPdfContainerLogoDefaultThemeClasses,
  sidebarPdfContainerTitleDefaultThemeClasses
} from "containers/sidebarPdf/styles";

const SidebarPdfContainerLogoSection: React.FC = () => (
  <>
    <ImageDynamic
      imageName="logo"
      themeClasses={sidebarPdfContainerLogoDefaultThemeClasses}
    />

    <Typography themeClasses={sidebarPdfContainerTitleDefaultThemeClasses}>
      Front-End Architect
    </Typography>
  </>
);

export { SidebarPdfContainerLogoSection };
