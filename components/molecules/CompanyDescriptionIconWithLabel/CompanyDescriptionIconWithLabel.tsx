import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyDescriptionIconWithLabelVariant,
  ICompanyDescriptionIconWithLabelProps
} from "components/molecules/CompanyDescriptionIconWithLabel/@types/CompanyDescriptionIconWithLabel";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";

const CompanyDescriptionIconWithLabel: React.FC<
  ICompanyDescriptionIconWithLabelProps
> = ({
  href,
  iconName,
  label,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = CompanyDescriptionIconWithLabelVariant.Blue
}) => (
  <LayoutContainer themeClasses={themeClasses}>
    <IconWithLabel
      href={href}
      isExternal
      iconName={iconName}
      label={label}
      size={size}
      themeClasses={{
        content: {
          label: {
            color:
              variant === CompanyDescriptionIconWithLabelVariant.Blue
                ? "text-blue300"
                : "text-blue600"
          }
        }
      }}
    />
  </LayoutContainer>
);

export { CompanyDescriptionIconWithLabel };
