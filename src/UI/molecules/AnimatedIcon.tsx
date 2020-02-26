import React, { memo } from "react";
import styled from "styled-components";

import { ReactComponent as IconApollo } from "<assets>/svg/Icon-Apollo.svg";
import { ReactComponent as IconGraphql } from "<assets>/svg/Icon-Graphql.svg";
import { ReactComponent as IconJavascript } from "<assets>/svg/Icon-Javascript.svg";
import { ReactComponent as IconNode } from "<assets>/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "<assets>/svg/Icon-React.svg";
import { ReactComponent as IconTypescript } from "<assets>/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "<assets>/svg/Icon-Webpack.svg";

export interface AnimatedIconProps {
  iconName: "apollo" | "graphql" | "javascript" | "node" | "react" | "typescript" | "webpack";
}

const AnimatedIcon = (): JSX.Element => (
  <AnimatedIcon.Container>

  </AnimatedIcon.Container>
);

AnimatedIcon.Container = styled.div``;
  
export default memo(AnimatedIcon);
