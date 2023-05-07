import {
  CornerPosition,
  CornerVariant
} from "components/atoms/Corner/@types/Corner";
import { Corner } from "components/atoms/Corner/Corner";
import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IPdfTitleProps } from "components/molecules/PdfTitle/@types/PdfTitle";
import { pdfTitleDefaultThemeClasses } from "components/molecules/PdfTitle/styles";

const PdfTitle: React.FC<IPdfTitleProps> = ({ children }) => {
  const { container, typography } = pdfTitleDefaultThemeClasses;

  return (
    <LayoutContainer themeClasses={container}>
      <Typography themeClasses={typography}>
        <Corner
          position={CornerPosition.TopLeft}
          variant={CornerVariant.Dark}
        />
        <Corner
          position={CornerPosition.BottomRight}
          variant={CornerVariant.Dark}
        />
        {children}
      </Typography>
    </LayoutContainer>
  );
};

export { PdfTitle };
