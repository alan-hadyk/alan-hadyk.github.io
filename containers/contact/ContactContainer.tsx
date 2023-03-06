import { Typography } from "components/atoms/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { Link } from "components/molecules/Link";
import { Section } from "components/molecules/Section";

const ContactContainer: React.FC = () => (
  <Section id="contact" title="Contact">
    <LayoutContainer display="flex" justifyContent="justify-center">
      <Link href="mailto:alan.hadyk@gmail.com" isExternal isHoverable>
        <Typography
          color="text-blue300"
          ellipsis
          fontSize="text-28"
          isHoverable
          paddingBottom="pb-16"
          textAlign="text-center"
        >
          alan.hadyk@gmail.com
        </Typography>
      </Link>
    </LayoutContainer>
  </Section>
);

export { ContactContainer };
