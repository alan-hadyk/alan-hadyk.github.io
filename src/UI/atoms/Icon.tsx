import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";

import {
  IconContainerProps,
  IconContainerType,
  IconProps
} from "<atoms>/__typings__/Icon";

// TODO: UPDATE TESTS FOR THIS COMPONENT!

function Icon({ iconName, height }: IconProps): JSX.Element {
  const iconComponents = {
    codeSandbox: BtnCodeSandbox,
    download: BtnDownload,
    externalLink: BtnExternalLink,
    send: BtnSend
  };
  
  return (
    renderIcon()
  );

  function renderIcon(): JSX.Element {
    const IconContainer: IconContainerType = styled(iconComponents[iconName])<IconContainerProps>`
      ${({ iconheight, theme: { spacing } }): FlattenSimpleInterpolation => css`
          height: ${iconheight in spacing && spacing[iconheight]};
          width: auto;
      `}
    `;

    return (
      <IconContainer iconheight={height} />
    );
  }
}

export default memo(Icon);