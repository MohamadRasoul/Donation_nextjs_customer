import 'rsuite/dist/rsuite.min.css';
import '@/styles/globals.css';
import '@/styles/animate.css';
import '@/styles/tailwind.css';
import Script from 'next/script';
import Head from 'next/head';
import NProgress from 'nprogress';
import 'styles/nprogress.css';
import Router from 'next/router';
import { SWRConfig } from 'swr';
import axios from '@/lib/axios';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({ showSpinner: false });

const fetcher = async (url) => await axios.get(url).then((res) => res.data);

const MyApp = ({ Component, pageProps }) => {
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                ></meta>
            </Head>
            <SWRConfig
                value={{
                    refreshInterval: 3000,
                    fetcher,
                }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SWRConfig>
            <Script src='/assets/js/wow.min.js' strategy='beforeInteractive' />
            <Script src='/assets/js/main.js' strategy='afterInteractive' />
        </>
    );
};

export default MyApp;
