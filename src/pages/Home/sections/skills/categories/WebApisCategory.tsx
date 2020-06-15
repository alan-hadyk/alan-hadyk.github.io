import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandGraphQL",
    label: "GraphQL"
  },
  {
    iconName: "brandApollo",
    label: "Apollo"
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

const WebApisCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Web APIs"
  />
);

export default WebApisCategory;
