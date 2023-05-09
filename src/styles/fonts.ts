import { Anonymous_Pro } from "next/font/google";
import localFont from "next/font/local";

const fontAnonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
  weight: ["400", "700"],
});

const fontExan = localFont({
  src: [{ path: "../../public/fonts/Exan-400.woff2", weight: "400" }],
  variable: "--font-exan",
});

export const fontAnonymousProVariable = `${fontAnonymousPro.variable} font-anonymousPro`;

export const fontExanVariable = `${fontExan.variable} font-exan`;
