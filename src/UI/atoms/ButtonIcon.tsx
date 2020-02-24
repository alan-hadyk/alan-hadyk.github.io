import React, { memo, SVGProps, FunctionComponent } from "react";
import styled, { css, FlattenSimpleInterpolation, StyledComponentBase, DefaultTheme } from "styled-components";

import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";

export interface ButtonIconProps {
  iconName: "codeSandbox" | "download" | "externalLink" | "send";
  size: "small" | "medium" | "large";
}
interface IconProps {
  iconheight: "spacing12" | "spacing24";
}

function ButtonIcon({ iconName, size }: ButtonIconProps): JSX.Element {
  return (
    renderIcon()
  );

  function mapSizeToIconProps(): IconProps {
    switch (size) {
    case "small":
      return {
        iconheight: "spacing12"
      };
      
    case "medium":
    case "large":
      return {
        iconheight: "spacing24"
      };
    }
  }

  function renderIcon(): JSX.Element {
    let iconComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
    const iconProps: IconProps = mapSizeToIconProps();

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
    
    type ButtonIconIconType = string & StyledComponentBase<FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>, DefaultTheme, IconProps, never>;
  
    const Icon: ButtonIconIconType = styled(iconComponent)<IconProps>`
      ${({
    // eslint-disable-next-line indent
        iconheight,
    // eslint-disable-next-line indent
        theme: {
      // eslint-disable-next-line indent
          spacing
      // eslint-disable-next-line indent
        }
    // eslint-disable-next-line indent
      }): FlattenSimpleInterpolation => css`
          height: ${iconheight in spacing && spacing[iconheight]};
          width: auto;
        `}
      `;

    return (
      <Icon {...iconProps} />
    );

  }
}

export default memo(ButtonIcon);