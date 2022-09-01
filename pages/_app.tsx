import "styles/fonts.css";
import "styles/globals.css";
import { TAppPropsWithComponent } from "types/next";

const App: React.FC<TAppPropsWithComponent> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
