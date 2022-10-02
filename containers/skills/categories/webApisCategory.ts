import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "brandAxios",
    label: "Axios"
  },
  {
    iconName: "brandGraphQL",
    label: "GraphQL"
  },
  {
    iconName: "brandREST",
    label: "REST"
  },
  {
    iconName: "brandWebsocket",
    label: "WebSockets"
  }
];

export const webApisCategory = {
  iconsWithLabels,
  title: "Web APIs"
};
