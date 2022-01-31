import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const theme = {
  colors: {
    primary: 'rgb(51, 51, 51)',
    fadedPrimary: 'rgba(0, 0, 0, 0.25)',
    bgCardHover: 'rgba(255, 255, 255, 0.75)',
    primaryDark: 'rgba(10, 10, 10, 1)',
    primaryDarkHover: 'rgba(10, 10, 10, 0.6)',
    bg: 'white',
  },
  fonts: {
    primary: '"Lato", Helvetica, Arial, Lucida, sans-serif',
  },
};

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background: ${theme.colors.bg};
  display: block;
}

body {
  background-color: ${theme.colors.bg};
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  font-family: ${theme.fonts.primary};
  font-weight: 400;
  font-size: 15px;
  color: ${theme.colors.primary};
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
