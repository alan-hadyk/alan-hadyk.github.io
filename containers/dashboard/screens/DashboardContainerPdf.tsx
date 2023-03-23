import { Typography } from "components/atoms/Typography/Typography";
import { ConsolePdf } from "components/molecules/Console/screens/ConsolePdf";
import { catchPhrase } from "containers/dashboard/config";

const DashboardContainerPdf: React.FC = () => (
  <>
    <Typography
      themeClasses={{
        color: "text-blue600",
        fontFamily: "font-exan",
        fontSize: "text-48",
        paddingBottom: "pb-16",
        paddingTop: "pt-40",
        textAlign: "text-center"
      }}
    >
      Curriculum Vitae
    </Typography>
    <ConsolePdf>{catchPhrase}</ConsolePdf>
  </>
);

export { DashboardContainerPdf };
