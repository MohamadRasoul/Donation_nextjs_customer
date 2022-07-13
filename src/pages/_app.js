import '@/styles/globals.css';
import '@/styles/animate.css';
import '@/styles/tailwind.css';
import Script from 'next/script';
import Head from 'next/head';
import 'rsuite/dist/rsuite.min.css';


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

            <Layout>
                <Component {...pageProps} />
            </Layout>

            <Script src='assets/js/wow.min.js' strategy='beforeInteractive' />
            <Script src='assets/js/main.js' strategy='afterInteractive' />
        </>
    );
};

export default MyApp;
