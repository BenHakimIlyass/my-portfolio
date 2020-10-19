import { ThemeProvider, ColorModeProvider } from "@xstyled/styled-components";
import { DefaultSeo } from "next-seo";

import { Nav, SocialMediaBar } from "@components";
import configs from "@config";
import { GlobalStyle, theme } from "../globalStyles";
import ContextProvider from "../contextProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle />
        <ContextProvider>
          <Header />
          <main>
            <Component {...pageProps} />
            <SocialMediaBar />
          </main>
        </ContextProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
const Header = () => {
  return (
    <header>
      <DefaultSeo {...configs.seo} />
      <Nav />
    </header>
  );
};
