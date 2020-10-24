import { ThemeProvider, ColorModeProvider } from "@xstyled/styled-components";
import { DefaultSeo } from "next-seo";

import { Nav, SocialMediaBar } from "@components";
import configs from "@config";
import { GlobalStyle, theme } from "../globalStyles";
import ContextProvider from "../contextProvider";

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
