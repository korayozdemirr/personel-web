import HttpsRedirect from 'react-https-redirect';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Script from 'next/script';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
function MyApp({ Component, pageProps }) {
  const seo = {
    url: 'https://korayozdemir.vercel.app/',
    name: 'Koray Özdemir',
    description:
      'Merhaba ben Koray Özdemir. Uzun süreden beridir dijital pazarlama üzerinde çalışıyorum. Müşterilerin internette sizi bulmasını sağlamak için web sitelerinden yerel işletme girişlerine, mobil uygulamalardan sosyal medyaya kadar uzanan çok çeşitli yollar var. Ben bu yolları sizin için oluşturabilirim.',
  };
  return (
    <HttpsRedirect>
      <Head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-X6QMWV6J2V'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X6QMWV6J2V');
        `}
        </Script>

        <link rel='canonical' href={seo.url} />
        <link rel='icon' href='./icon.png' type='image/png' sizes='24x24' />
        <title>Koray Özdemir</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={seo.description} />
        <meta property='og:url' content={seo.url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={seo.name} />
        <meta property='og:description' content={seo.description} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content={seo.url} />
        <meta name='twitter:title' content={seo.name} />
        <meta name='twitter:description' content={seo.description} />
        <meta name='Author' content='Koray Özdemir' />
        <meta name='publisher' content='Vercel Inc.' />
        <meta name='robots' content='follow, index' />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' />
    </HttpsRedirect>
  );
}

export default MyApp;
