import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "axios",
    label: "Axios"
  },
  {
    iconName: "graphQL",
    label: "GraphQL"
  },
  {
    iconName: "rest",
    label: "REST"
  },
  {
    iconName: "websocket",
    label: "WebSockets"
  }
];

export const webApisCategory = {
  iconsWithLabels,
  title: "Web APIs"
};
