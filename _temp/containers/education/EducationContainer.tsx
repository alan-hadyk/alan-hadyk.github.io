import { IconWithLabelAndTitleGroup } from "components/molecules/IconWithLabelAndTitleGroup/IconWithLabelAndTitleGroup";
import {
  SectionSize,
  SectionVariant
} from "components/molecules/Section/@types/Section";
import { Section } from "components/molecules/Section/Section";
import { education } from "containers/education/config";

const EducationContainer: React.FC = () => (
  <Section
    id="education"
    title="Education"
    size={SectionSize.Small}
    variant={SectionVariant.Dark}
  >
    <IconWithLabelAndTitleGroup iconsWithLabelsGroup={education} />
  </Section>
);

export { EducationContainer };
