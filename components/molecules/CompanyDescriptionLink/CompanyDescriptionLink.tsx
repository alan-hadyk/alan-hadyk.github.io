import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ICompanyDescriptionLinkProps } from "components/molecules/CompanyDescriptionLink/@types/CompanyDescriptionLink";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";

const CompanyDescriptionLink: React.FC<ICompanyDescriptionLinkProps> = ({
  href
}) => (
  <LayoutContainer
    themeClasses={{
      marginBottom: "mb-32"
    }}
  >
    <IconWithLabel
      href={href}
      isExternal
      iconName={IconStaticName.Link}
      label={href}
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

export { CompanyDescriptionLink };
