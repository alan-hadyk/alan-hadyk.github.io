import "styles/loader.css";
import "styles/fonts.css";
import "styles/globals.css";
import { TAppPropsWithComponent } from "types/next";
import { useLoader } from "hooks/useLoader";

const App: React.FC<TAppPropsWithComponent> = ({ Component, pageProps }) => {
  useLoader();

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
