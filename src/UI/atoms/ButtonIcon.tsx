import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";

export interface ButtonIconProps {
  iconName: "codeSandbox" | "download" | "externalLink" | "send";
  size: "small" | "medium" | "large";
}

interface ButtonHeight {
  height: "spacing12" | "spacing24"; 
}

function ButtonIcon({ iconName, size }: ButtonIconProps): JSX.Element {
  const buttonIconProps = mapSizeToButtonIconProps();
  return (
    renderIcon()
  );

  function mapSizeToButtonIconProps(): ButtonHeight {
    switch (size) {
    case "small":
      return {
        height: "spacing12"
      };
    case "medium":
    case "large":
      return {
        height: "spacing24"
      };
    }
  }

  function renderIcon(): JSX.Element {
    let iconComponent;

    switch (iconName) {
    case "codeSandbox":
      iconComponent = BtnCodeSandbox;
      break;
    case "download":
      iconComponent = BtnDownload;
      break;
    case "externalLink":
      iconComponent = BtnExternalLink;
      break;
    case "send":
      iconComponent = BtnSend;
      break;
    }
  
    const ButtonIcon = styled(iconComponent)<ButtonHeight>`
      ${({
    height,
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
          height: ${height in spacing && spacing[height]};
          width: auto;
        `}
      `;

    return (
      <ButtonIcon {...buttonIconProps} />
    );

  }
}

export default memo(ButtonIcon);