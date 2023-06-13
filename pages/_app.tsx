import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "inherit"
    }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <StyledEngineProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
      </StyledEngineProvider>
  )
}
