import React from 'react';
import type { AppProps } from 'next/app';
import { AppContainer } from '../components/_app/AppContainer';
import { AppHead } from '../components/_app/AppHead';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <AppHead />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
