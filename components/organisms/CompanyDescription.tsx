import { Typography } from "components/atoms/Typography/Typography";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";
import { UnorderedList } from "components/molecules/UnorderedList/UnorderedList";

import { ICompanyDescriptionProps } from "components/organisms/@types/CompanyDescription";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "components/molecules/TechStack/TechStack";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  link,
  responsibilities,
  responsibilitiesPaddingBottom = "pb-68",
  textAlign = "text-left",
  title
}) => (
  <LayoutContainer
    themeClasses={{
      mediaQuery: ["msHighContrastNone:w-100%", "msHighContrastActive:w-100%"]
    }}
  >
    <Typography
      themeClasses={{
        color: "text-white",
        fontFamily: "font-anonymousPro",
        fontSize: "text-36",
        lineHeight: "leading-56",
        textAlign
      }}
    >
      {title}
    </Typography>

    <LayoutContainer
      themeClasses={{
        marginBottom: link ? "mb-16" : "mb-32",
        marginTop: "mt-32"
      }}
    >
      <IconWithLabel
        iconName={IconStaticName.Calendar}
        label={date}
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

    {link && (
      <LayoutContainer
        themeClasses={{
          marginBottom: "mb-32"
        }}
      >
        <IconWithLabel
          href={link}
          isExternal
          iconName={IconStaticName.Link}
          label={link}
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
    )}

    <TechStack iconsWithLabels={iconsWithLabels} />

    <LayoutContainer
      themeClasses={{
        paddingBottom: responsibilitiesPaddingBottom
      }}
    >
      <Typography
        themeClasses={{
          color: "text-blue100",
          fontFamily: "font-anonymousPro",
          fontSize: "text-24",
          fontWeight: "font-bold",
          lineHeight: "leading-32"
        }}
      >
        Responsibilities
      </Typography>
      <LayoutContainer
        themeClasses={{
          marginLeft: "ml-16",
          marginTop: "mt-16"
        }}
      >
        <UnorderedList items={responsibilities} />
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { CompanyDescription };
