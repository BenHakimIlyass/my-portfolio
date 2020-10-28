import { ThemeProvider, ColorModeProvider, useColorMode } from "@xstyled/styled-components";
import { DefaultSeo } from "next-seo";

import { Nav, SocialMediaBar } from "@components";
import configs from "@config";
import { GlobalStyle, theme } from "../globalStyles";
import ContextProvider from "../contextProvider";
import { useFavicons } from "@hooks";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ColorModeProvider>
          <div>
            <GlobalStyle />
            <ContextProvider>
              <div>
                <header>
                  <DefaultSeo {...configs.seo} />
                  <WrapFavicon />
                  <Nav />
                </header>
                <main>
                  <Component {...pageProps} />
                  <SocialMediaBar />
                </main>
              </div>
            </ContextProvider>
          </div>
        </ColorModeProvider>
      </div>
    </ThemeProvider>
  );
}
const WrapFavicon = () => {
  const [mode] = useColorMode();
  useFavicons(`/icons/favicon-${mode === "lightMode" ? "light" : "dark"}.ico`);
  return null;
};
