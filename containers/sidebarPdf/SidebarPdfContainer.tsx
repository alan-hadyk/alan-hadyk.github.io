import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { Typography } from "components/atoms/Typography/Typography";
import {
  IconWithLabelSize,
  IconWithLabelVariant
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { VerticalIconsWithLabels } from "components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";
import { SkillsContainerFormat } from "containers/skills/@types/SkillsContainer";
import { SkillsContainer } from "containers/skills/SkillsContainer";

const SidebarPdfContainer: React.FC = () => (
  <>
    <ImageDynamic
      imageName="logo"
      themeClasses={{
        height: "h-auto",
        marginBottom: "mb-4",
        maxWidth: "max-w-100%"
      }}
    />

    <Typography
      themeClasses={{
        color: "text-white",
        fontSize: "text-12",
        lineHeight: "leading-16",
        marginBottom: "mb-16"
      }}
    >
      Front-End Architect
    </Typography>

    <VerticalIconsWithLabels
      iconsWithLabels={[
        {
          iconName: IconStaticName.Pin,
          label: "Mysłowice, Poland"
        },
        {
          href: "mailto:alan.hadyk@gmail.com",
          iconName: IconStaticName.Envelope,
          isExternal: true,
          label: "alan.hadyk@gmail.com"
        },
        {
          href: "https://alanhadyk.dev/",
          iconName: IconStaticName.Globe,
          isExternal: true,
          label: "alanhadyk.dev"
        },
        {
          href: "https://github.com/alan-hadyk",
          iconName: IconStaticName.GitHub,
          isExternal: true,
          label: "GitHub"
        },
        {
          href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
          iconName: IconStaticName.LinkedIn,
          isExternal: true,
          label: "LinkedIn"
        }
      ]}
      size={IconWithLabelSize.Small}
      themeClasses={{
        wrapper: {
          height: "h-auto",
          marginBottom: "mb-28"
        }
      }}
      variant={IconWithLabelVariant.White}
    />

    <SkillsContainer format={SkillsContainerFormat.Pdf} />
  </>
);

export { SidebarPdfContainer };
