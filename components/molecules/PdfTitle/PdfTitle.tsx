import {
  CornerPosition,
  CornerVariant
} from "components/atoms/Corner/@types/Corner";
import { Corner } from "components/atoms/Corner/Corner";
import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IPdfTitleProps } from "components/molecules/PdfTitle/@types/PdfTitle";

const PdfTitle: React.FC<IPdfTitleProps> = ({ children }) => (
  <LayoutContainer
    themeClasses={{
      paddingBottom: "pb-16",
      paddingTop: "pt-40",
      textAlign: "text-center"
    }}
  >
    <Typography
      themeClasses={{
        color: "text-blue600",
        display: "inline-block",
        fontFamily: "font-exan",
        fontSize: "text-40",
        height: "h-44",
        lineHeight: "leading-44",
        paddingX: "px-8",
        position: "relative"
      }}
    >
      <Corner position={CornerPosition.TopLeft} variant={CornerVariant.Dark} />
      <Corner
        position={CornerPosition.BottomRight}
        variant={CornerVariant.Dark}
      />
      {children}
    </Typography>
  </LayoutContainer>
);

export { PdfTitle };
