import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { Typography } from "components/atoms/Typography/Typography";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import {
  IconWithLabelSize,
  IconWithLabelVariant
} from "components/molecules/IconWithLabel/@types/IconWithLabel";

const SidebarPdfContainer: React.FC = () => (
  <>
    <ImageDynamic
      imageName="logo"
      themeClasses={{
        height: "h-auto",
        marginBottom: "mb-4"
      }}
    />

    <Typography
      themeClasses={{
        color: "text-white",
        fontSize: "text-12",
        lineHeight: "leading-16"
      }}
    >
      Front-End Architect
    </Typography>

    <IconsWithLabels
      iconsWithLabels={[
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
      position={IconsWithLabelsPosition.Vertical}
      size={IconWithLabelSize.Small}
      themeClasses={{
        wrapper: {
          height: "h-auto"
        }
      }}
      variant={IconWithLabelVariant.White}
    />
  </>
);

export { SidebarPdfContainer };
