//Add GlobalStyle
import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle  />
        <Component {...pageProps} />
    </>
  )
}


