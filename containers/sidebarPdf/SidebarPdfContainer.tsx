import { SidebarPdfContainerLanguagesSection } from "containers/sidebarPdf/sections/SidebarPdfContainerLanguagesSection";
import { SidebarPdfContainerLogoSection } from "containers/sidebarPdf/sections/SidebarPdfContainerLogoSection";
import { SidebarPdfContainerMainIconsSection } from "containers/sidebarPdf/sections/SidebarPdfContainerMainIconsSection";
import { SkillsContainerFormat } from "containers/skills/@types/SkillsContainer";
import { SkillsContainer } from "containers/skills/SkillsContainer";

const SidebarPdfContainer: React.FC = () => (
  <>
    <SidebarPdfContainerLogoSection />

    <SidebarPdfContainerMainIconsSection />

    <SkillsContainer format={SkillsContainerFormat.Pdf} />

    <SidebarPdfContainerLanguagesSection />
  </>
);

export { SidebarPdfContainer };
