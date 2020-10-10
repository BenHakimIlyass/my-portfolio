import { ThemeProvider, ColorModeProvider } from "@xstyled/styled-components";
import { GlobalStyle, theme } from "../globalStyles";
import { Nav, SocialMedia } from "../components";
import AnimationProvider from "../animationProvider";
import { motion, AnimatePresence } from 'framer-motion'

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
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            </main>
          </AnimationProvider>
        </ColorModeProvider>
      </div>
    </ThemeProvider>
  );
}
