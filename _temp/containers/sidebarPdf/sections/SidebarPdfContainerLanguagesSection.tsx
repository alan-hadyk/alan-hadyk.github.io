import { LanguagesGroup } from "components/molecules/LanguagesGroup/LanguagesGroup";
import {
  SectionSize,
  SectionVariant
} from "components/molecules/Section/@types/Section";
import { Section } from "components/molecules/Section/Section";
import { languages } from "containers/sidebarPdf/config";

const SidebarPdfContainerLanguagesSection: React.FC = () => (
  <Section
    id="languages"
    title="Languages"
    size={SectionSize.Small}
    themeClasses={{
      paddingTop: "pt-24"
    }}
    variant={SectionVariant.Light}
  >
    <LanguagesGroup languages={languages} />
  </Section>
);

export { SidebarPdfContainerLanguagesSection };
