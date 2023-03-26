import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ICompanyDescriptionIconWithLabelProps } from "components/molecules/CompanyDescriptionIconWithLabel/@types/CompanyDescriptionIconWithLabel";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";

const CompanyDescriptionIconWithLabel: React.FC<
  ICompanyDescriptionIconWithLabelProps
> = ({ href, iconName, label, themeClasses }) => (
  <LayoutContainer themeClasses={themeClasses}>
    <IconWithLabel
      href={href}
      isExternal
      iconName={iconName}
      label={label}
      size={IconWithLabelSize.Medium}
      themeClasses={{
        iconWithLabelContent: {
          label: {
            color: "text-blue300"
          }
        }
      }}
    />
  </LayoutContainer>
);

export { CompanyDescriptionIconWithLabel };
