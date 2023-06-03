import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Link } from "@app/components/molecules/Link/Link";
import {
  IVerticalLabelsProps,
  VerticalLabelsSize,
  VerticalLabelsVariant,
} from "@app/components/molecules/VerticalLabels/@types/VerticalLabels";
import { useVerticalLabelsThemeClasses } from "@app/components/molecules/VerticalLabels/hooks/useVerticalLabelsThemeClasses";

export const VerticalLabels: React.FC<IVerticalLabelsProps> = ({
  labels,
  size = VerticalLabelsSize.Medium,
  themeClasses,
  variant = VerticalLabelsVariant.Blue,
}) => {
  const { verticalLabelsThemeClasses } = useVerticalLabelsThemeClasses({
    size,
    themeClasses,
    variant,
  });

  return (
    <LayoutContainer themeClasses={verticalLabelsThemeClasses.labelsWrapper}>
      {labels.map(({ href, isExternal, label }) => (
        <LayoutContainer
          key={label}
          themeClasses={verticalLabelsThemeClasses.labelContainer}
        >
          {href ? (
            <Link href={href} isExternal={isExternal}>
              <Typography
                ellipsis
                themeClasses={verticalLabelsThemeClasses.label}
              >
                {label}
              </Typography>
            </Link>
          ) : (
            <Typography
              ellipsis
              themeClasses={verticalLabelsThemeClasses.label}
            >
              {label}
            </Typography>
          )}
        </LayoutContainer>
      ))}
    </LayoutContainer>
  );
};
