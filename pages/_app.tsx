import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}
