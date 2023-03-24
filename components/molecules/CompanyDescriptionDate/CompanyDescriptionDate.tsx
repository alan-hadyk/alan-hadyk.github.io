import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ICompanyDescriptionDateProps } from "components/molecules/CompanyDescriptionDate/@types/CompanyDescriptionDate";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";

const CompanyDescriptionDate: React.FC<ICompanyDescriptionDateProps> = ({
  label,
  themeClasses
}) => {
  return (
    <LayoutContainer
      themeClasses={{
        marginTop: "mt-32",
        ...themeClasses
      }}
    >
      <IconWithLabel
        iconName={IconStaticName.Calendar}
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
};
export { CompanyDescriptionDate };
