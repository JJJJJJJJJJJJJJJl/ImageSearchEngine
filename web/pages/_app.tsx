import { AppProps } from 'next/app';
import '../styles/globals.css'
import { GlobalContextProvider } from '../context/GlobalContext';

export const MAX_IMAGE_UPLOAD: number = 20; 

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalContextProvider>
            <Component {...pageProps} />
        </GlobalContextProvider>
    );
}

export default MyApp