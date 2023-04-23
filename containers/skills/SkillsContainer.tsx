import { Section } from "components/molecules/Section/Section";
import {
  ISkillsContainerProps,
  SkillsContainerFormat
} from "containers/skills/@types/SkillsContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import {
  SectionSize,
  SectionVariant
} from "components/molecules/Section/@types/Section";
import { ContentFrameWithIconsGroup } from "components/molecules/ContentFrameWithIconsGroup/ContentFrameWithIconsGroup";
import { skillsItems } from "containers/skills/config";

const SkillsContainer: React.FC<ISkillsContainerProps> = ({
  format = SkillsContainerFormat.Web
}) => (
  <Section
    id="skills"
    title="Skills"
    size={
      format === SkillsContainerFormat.Web
        ? SectionSize.Large
        : SectionSize.Small
    }
    variant={
      format === SkillsContainerFormat.Web
        ? SectionVariant.Blue
        : SectionVariant.Light
    }
  >
    {format === SkillsContainerFormat.Web && (
      <>
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

        <ContentFrameWithIconsGroup
          device={Device.Mobile}
          items={skillsItems}
        />
      </>
    )}

    {format === SkillsContainerFormat.Pdf && (
      <ContentFrameWithIconsGroup items={skillsItems} />
    )}
  </Section>
);

export { SkillsContainer };
