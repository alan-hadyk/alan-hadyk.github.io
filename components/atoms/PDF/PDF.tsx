/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
  Link
} from "@react-pdf/renderer";
import { IPDFProps } from "components/atoms/@types/PDF";
import {
  Envelope,
  Github,
  Globe,
  LinkedIn,
  Logo,
  Pin
} from "components/atoms/PDF/svg/SVG";
import tailwindConfig from "tailwind.config";

Font.register({
  family: "AnonymousPro",
  fonts: [
    {
      fontWeight: 400,
      src: "/fonts/anonymous-pro-v13-latin-regular.woff"
    },
    {
      fontWeight: 700,
      src: "/fonts/anonymous-pro-v13-latin-700.woff"
    }
  ]
});

Font.register({
  family: "Exan",
  fonts: [
    {
      fontWeight: 400,
      src: "/fonts/ExanModifiedRegular.ttf"
    }
  ]
});

const theme = tailwindConfig.theme;

// Create styles
const styles = StyleSheet.create({
  content: {
    flex: "0 0 70%",
    letterSpacing: "0px",
    padding: "40px 12px"
  },
  description: {
    color: theme.colors.blue600,
    flexDirection: "row",
    fontFamily: "AnonymousPro",
    fontSize: "12px",
    lineHeight: "1.3333",
    marginBottom: "28px",
    padding: "8px 16px",
    textAlign: "center",
    textTransform: "uppercase"
  },
  jobTitle: {
    fontSize: theme.fontSize[12],
    padding: "4px 0 16px"
  },
  logo: {
    height: "auto",
    width: "100%"
  },
  page: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    fontFamily: "AnonymousPro"
  },
  sidebar: {
    backgroundColor: theme.colors.blue600,
    color: theme.colors.white,
    flex: "0 0 30%",
    margin: 0,
    padding: "40px 24px"
  },
  sidebarInfo: {
    marginBottom: "28px"
  },
  sidebarInfoContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: "8px"
  },
  sidebarInfoIconContainer: {
    alignItems: "flex-start",
    display: "flex",
    height: "14px",
    justifyContent: "center",
    width: "16px"
  },
  sidebarInfoLink: {
    color: theme.colors.white,
    fontSize: "10px"
  },

  sidebarInfoText: {
    fontSize: "10px"
  },
  subTitle: {
    color: theme.colors.blue600,
    fontFamily: "Exan",
    fontSize: "20px",
    marginBottom: "20px",
    textAlign: "center",
    textTransform: "lowercase"
  },
  title: {
    color: theme.colors.blue600,
    fontFamily: "Exan",
    fontSize: "32px",
    marginBottom: "16px",
    textAlign: "center",
    textTransform: "lowercase"
  }
});

const skillsStyles = StyleSheet.create({
  skill: {
    fontSize: "12px",
    letterSpacing: "0.5"
  },
  skills: {
    display: "flex",
    marginBottom: "24px"
  },
  skillsLabel: {
    fontSize: "8px",
    paddingTop: "12px"
  },
  skillsLabelContainer: {
    flex: "1 0 50%"
  },
  skillsLabelWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px"
  },
  title: {
    color: theme.colors.white,
    fontFamily: "Exan",
    fontSize: "20px",
    lineHeight: "1.25",
    marginBottom: "12px",
    textAlign: "center",
    textTransform: "lowercase"
  }
});

const experienceStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: "12px",
    paddingTop: "12px",
    width: "100%"
  },
  date: {
    color: theme.colors.blue500,
    fontSize: "8px",
    fontWeight: "bold",
    lineHeight: "1.333",
    marginBottom: "8px"
  },
  name: {
    color: theme.colors.blue500,
    flex: "0 0 50%",
    // fontFamily: "Exan",
    fontSize: "20px",
    lineHeight: "1.3",
    paddingRight: "16px",
    textAlign: "right"
    // textTransform: "lowercase"
  },
  rightSide: {
    flex: "0 0 50%",
    paddingLeft: "16px"
  },
  sectionTitle: {
    color: theme.colors.blue600,
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "1.333",
    marginBottom: "8px"
  },
  tech: {
    color: theme.colors.blue600,
    fontSize: "8px",
    lineHeight: "1.25",
    marginBottom: "8px",
    marginRight: "8px"
  },
  techContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "12px",
    paddingLeft: "8px"
  },
  title: {
    color: theme.colors.blue600,
    fontFamily: "Exan",
    fontSize: "16px",
    lineHeight: "1.25",
    marginBottom: "8px"
  }
});

const sidebarIcons = {
  envelope: Envelope,
  github: Github,
  globe: Globe,
  linkedIn: LinkedIn,
  pin: Pin
};

const PDF: React.FC<IPDFProps> = ({
  document,
  experience,
  sidebarInfo,
  skills
}) => (
  <PDFViewer>
    <Document {...document}>
      <Page size="A4" style={styles.page} wrap={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Curriculum vitae</Text>
          <Text style={styles.description}>
            Vision-driven change agent with career-long record of front-end user
            strategy and UI development
          </Text>
          <Text style={styles.subTitle}>Employment history</Text>
          {experience?.map(
            ({ date, iconsWithLabels, name, responsibilities, title }) => (
              <View key={name} style={experienceStyles.container}>
                <Text style={experienceStyles.name}>{name}</Text>
                <View style={experienceStyles.rightSide}>
                  <Text style={experienceStyles.title}>{title}</Text>
                  <Text style={experienceStyles.date}>{date}</Text>
                  <Text style={experienceStyles.sectionTitle}>Tech stack</Text>
                  <View style={experienceStyles.techContainer}>
                    {iconsWithLabels.map(({ label }) => (
                      <Text key={label} style={experienceStyles.tech}>
                        • {label}
                      </Text>
                    ))}
                  </View>
                  <Text style={experienceStyles.sectionTitle}>
                    Responsibilities
                  </Text>
                  <View style={experienceStyles.techContainer}>
                    {responsibilities.map((responsibility: any, index) => (
                      <Text key={index} style={experienceStyles.tech}>
                        •{" "}
                        {responsibility?.props?.children?.[0]?.props?.children}
                        {responsibility?.props.children[1]}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            )
          )}
        </View>
        <View style={styles.sidebar}>
          <Logo />
          <Text style={styles.jobTitle}>Front-end architect</Text>
          <View style={styles.sidebarInfo}>
            {sidebarInfo?.map(({ iconName, link, text }) => {
              const SidebarIcon: any = sidebarIcons[iconName];

              return (
                <View key={text} style={styles.sidebarInfoContainer}>
                  <View style={styles.sidebarInfoIconContainer}>
                    <SidebarIcon />
                  </View>
                  {text && !link && (
                    <Text style={styles.sidebarInfoText}>{text}</Text>
                  )}
                  {link && (
                    <Link src={link} style={styles.sidebarInfoLink}>
                      <Text>{text}</Text>
                    </Link>
                  )}
                </View>
              );
            })}
          </View>
          <Text style={skillsStyles.title}>Skills</Text>

          {skills?.map(({ iconsWithLabels, title }) => (
            <View style={skillsStyles.skills} key={title}>
              <Text style={skillsStyles.skill}>{title}</Text>
              {/* <Image src={iconsWithLabels.icon}></Image> */}
              <View style={skillsStyles.skillsLabelWrapper}>
                {iconsWithLabels?.map(({ label }) => (
                  <View key={label} style={skillsStyles.skillsLabelContainer}>
                    <Text style={skillsStyles.skillsLabel}>• {label}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export { PDF };
