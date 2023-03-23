import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { Typography } from "components/atoms/Typography/Typography";

const SidebarContainer: React.FC = () => {
  return (
    <>
      <ImageDynamic
        imageName="logo"
        themeClasses={{
          marginBottom: "mb-4"
        }}
      />

      <Typography>Front-End Architect</Typography>
    </>
  );
};

export { SidebarContainer };
