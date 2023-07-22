import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const theme = createTheme({
    typography: {
        fontFamily: "inherit",
        button: {
            textTransform: "none"
        },
    },
    palette: {
        primary: {
            main: "#000000"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
});

export default function App({Component, pageProps}: AppProps) {
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
