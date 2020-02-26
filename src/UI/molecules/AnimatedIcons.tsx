import React, { memo } from "react";
import styled from "styled-components";

import { ReactComponent as IconApollo } from "<assets>/svg/Icon-Apollo.svg";
import { ReactComponent as IconGraphql } from "<assets>/svg/Icon-Graphql.svg";
import { ReactComponent as IconJavascript } from "<assets>/svg/Icon-Javascript.svg";
import { ReactComponent as IconNode } from "<assets>/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "<assets>/svg/Icon-React.svg";
import { ReactComponent as IconTypescript } from "<assets>/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "<assets>/svg/Icon-Webpack.svg";

const AnimatedIcons = (): JSX.Element => (
  <AnimatedIcons.Container>
    <AnimatedIcons.InnerContainer>

    </AnimatedIcons.InnerContainer>
  </AnimatedIcons.Container>
);

AnimatedIcons.Container = styled.div``;
AnimatedIcons.InnerContainer = styled.div``;
  
export default memo(AnimatedIcons);
