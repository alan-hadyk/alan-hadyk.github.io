import { Section } from "@app/components/molecules/Section/Section";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { skillsItems } from "@app/containers/skills/config";
import { ContentFrameWithIconsGroup } from "@app/components/molecules/ContentFrameWithIconsGroup/ContentFrameWithIconsGroup";

export const SkillsContainer: React.FC = () => (
  <Section id="skills" title="Skills">
    <ContentFrameWithIconsGroup
      columnCount="columns-5"
      device={Device.Tv}
      items={skillsItems}
    />

    <ContentFrameWithIconsGroup
      columnCount="columns-3"
      device={Device.Desktop}
      items={skillsItems}
    />

    <ContentFrameWithIconsGroup
      columnCount="columns-2"
      device={Device.Tablet}
      items={skillsItems}
    />

    <ContentFrameWithIconsGroup device={Device.Mobile} items={skillsItems} />
  </Section>
);
