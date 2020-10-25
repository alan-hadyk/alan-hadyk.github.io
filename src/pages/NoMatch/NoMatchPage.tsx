import React, { memo } from "react";

import LinkWithIcon from "UI/molecules/LinkWithIcon";
import NoMatchPageTemplate from "UI/templates/NoMatchPageTemplate";

const NoMatchPage = (): JSX.Element => (
  <NoMatchPageTemplate>
    <LinkWithIcon
      dataCy="SiteLogo"
      href="/"
      height="spacing48"
      iconName="logo"
      width="spacing248"
    />
  </NoMatchPageTemplate>
);

export default memo(NoMatchPage);
