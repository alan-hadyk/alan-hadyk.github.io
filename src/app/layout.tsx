import "@app/styles/loader.css";
import "@app/styles/fonts.css";
import "@app/styles/global.css";
import Head from "next/head";
import Script from "next/script";
import { IRootLayoutProps } from "@app/app/@types/layout";

const metadata = {
  description: "Alan Hadyk's Portfolio",
  title: "Alan Hadyk - Portfolio",
};

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="preconnect" href="https://api.github.com" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22272a" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#22272a" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#22272a" />
    </Head>

    {/* Global site tag (gtag.js) - Google Analytics */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-6TBH8GVEQK"
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `
              var isLocalhost = Boolean(
                window.location.hostname === "localhost" ||
                  // [::1] is the IPv6 localhost address.
                  window.location.hostname === "[::1]" ||
                  // 127.0.0.0/8 are considered localhost for IPv4.
                  window.location.hostname.match(
                    /^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                  )
              );
  
              if (!isLocalhost) {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
          
                gtag('config', 'G-6TBH8GVEQK');
              }
            `,
      }}
      id="google-tag-manager-code"
      strategy="afterInteractive"
    />

    <body>{children}</body>
  </html>
);

export { metadata };
export default RootLayout;
