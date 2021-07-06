import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../bll'
import React from 'react';
import MainContainer from '../components/MainContainer/MainContainer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MainContainer>
            <Component {...pageProps} />
        </MainContainer>
    );
}
export default wrapper.withRedux(MyApp);
