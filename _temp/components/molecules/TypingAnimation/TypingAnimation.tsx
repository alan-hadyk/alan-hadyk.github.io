import React from "react";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { useTypingAnimationState } from "components/molecules/TypingAnimation/hooks/useTypingAnimationState";
import {
  typingAnimationCodeDefaultThemeClasses,
  typingAnimationDefaultThemeClasses
} from "components/molecules/TypingAnimation/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const TypingAnimation: React.FC = () => {
  const { codeContainerRef } = useTypingAnimationState();

  return (
    <LayoutContainer themeClasses={typingAnimationDefaultThemeClasses}>
      <pre>
        <code
          className={convertObjectValuesToString(
            typingAnimationCodeDefaultThemeClasses
          )}
          ref={codeContainerRef}
        />
      </pre>
    </LayoutContainer>
  );
};

export { TypingAnimation };
