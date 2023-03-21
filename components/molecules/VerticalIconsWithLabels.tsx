import { Typography } from "components/atoms/Typography/Typography";

import { IVerticalIconsWithLabelsProps } from "components/molecules/@types/VerticalIconsWithLabels";
import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconStatic } from "components/atoms/IconStatic/IconStatic";
import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "components/molecules/IconWithLabel/styles";

const VerticalIconsWithLabels: React.FC<IVerticalIconsWithLabelsProps> = ({
  iconsWithLabels,
  size = IconWithLabelSize.Medium,
  themeClasses = {
    label: {
      color: "text-blue100"
    }
  }
}) => (
  <LayoutContainer
    themeClasses={{
      alignItems: "items-center",
      display: "flex",
      flexFlow: "flex-row-nowrap",
      height: "h-100%",
      justifyContent: "justify-center",
      width: "w-100%"
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        display: "flex",
        flex: "flex-[0_0_9.2rem]",
        flexFlow: "flex-col-nowrap"
      }}
    >
      {iconsWithLabels.map(
        ({ iconName }: IIconWithLabelProps, index: number): JSX.Element => (
          <LayoutContainer
            key={iconName + index}
            themeClasses={{
              marginBottom: "mb-12"
            }}
          >
            <IconStatic
              themeClasses={{
                height: mapSizeToIconHeight[size]
              }}
              iconName={iconName}
            />
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
    <LayoutContainer
      themeClasses={{
        flex: "flex-[0_0_75%]"
      }}
    >
      {iconsWithLabels.map(
        ({ label }: IIconWithLabelProps): JSX.Element => (
          <LayoutContainer
            key={label}
            themeClasses={{
              height: "h-32",
              marginBottom: "mb-12"
            }}
          >
            <Typography
              ellipsis
              key={label}
              themeClasses={{
                ...themeClasses.label,
                fontSize: mapSizeToTextFontSize[size],
                lineHeight: "leading-32"
              }}
            >
              {label}
            </Typography>
          </LayoutContainer>
        )
      )}
    </LayoutContainer>
  </LayoutContainer>
);

export { VerticalIconsWithLabels };
