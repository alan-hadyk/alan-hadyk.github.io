import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.Axios,
    label: "Axios"
  },
  {
    iconName: IconStaticName.GraphQL,
    label: "GraphQL"
  },
  {
    iconName: IconStaticName.REST,
    label: "REST"
  },
  {
    iconName: IconStaticName.Websocket,
    label: "WebSockets"
  }
];

export const webApisCategory = {
  iconsWithLabels,
  title: "Web APIs"
};
