import { ThemeProvider, ColorModeProvider } from "@xstyled/styled-components";
import { GlobalStyle, theme } from "../globalStyles";
import { Nav, SocialMediaBar } from "../components";
import AnimationProvider from "../animationProvider";
import { DefaultSeo } from "next-seo";
import configs from "../configs";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ColorModeProvider>
          <GlobalStyle />
          <AnimationProvider>
            <header>
              <DefaultSeo {...configs.seo} />
              <Nav />
            </header>
            <main>
              <Component {...pageProps} />
              <SocialMediaBar />
            </main>
          </AnimationProvider>
        </ColorModeProvider>
      </div>
    </ThemeProvider>
  );
}
