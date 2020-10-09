import { ThemeProvider, ColorModeProvider } from "@xstyled/styled-components";
import { GlobalStyle, theme } from "../globalStyles";
import { Nav, SocialMedia } from "../components";
import AnimationProvider from "../animationProvider";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ColorModeProvider>
          <GlobalStyle />
          <AnimationProvider>
            <header>
              <Nav />
            </header>
            <main>
              <SocialMedia />
              <Component {...pageProps} />
            </main>
          </AnimationProvider>
        </ColorModeProvider>
      </div>
    </ThemeProvider>
  );
}
