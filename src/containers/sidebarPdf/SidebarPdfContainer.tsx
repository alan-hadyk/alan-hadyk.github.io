import { SidebarPdfContainerLanguagesSection } from "@app/containers/SidebarPdf/sections/SidebarPdfContainerLanguagesSection";
import { SidebarPdfContainerLogoSection } from "@app/containers/SidebarPdf/sections/SidebarPdfContainerLogoSection";
import { SidebarPdfContainerMainIconsSection } from "@app/containers/SidebarPdf/sections/SidebarPdfContainerMainIconsSection";
import { SkillsContainerFormat } from "@app/containers/Skills/@types/SkillsContainer";
import { SkillsContainer } from "@app/containers/Skills/SkillsContainer";

const SidebarPdfContainer: React.FC = () => (
  <>
    <SidebarPdfContainerLogoSection />

    <SidebarPdfContainerMainIconsSection />

    <SkillsContainer format={SkillsContainerFormat.Pdf} />

    <SidebarPdfContainerLanguagesSection />
  </>
);

export { SidebarPdfContainer };
