import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function MyApp({ Component, pageProps }) {
  const seo = {
    url: 'https://korayozdemir.vercel.app/',
    name: 'Koray Özdemir',
    description:
      ' Uzun süreden beridir dijital pazarlama üzerinde çalışıyorum. Müşterilerin internette sizi bulmasını sağlamak için web sitelerinden yerel işletme girişlerine, mobil uygulamalardan sosyal medyaya kadar uzanan çok çeşitli yollar var. Ben bu yolları sizin için oluşturabilirim.',
  };
  return (
    <>
      <Head>
        <link rel='canonical' href={seo.url} />
        <title>Koray Özdemir</title>
        <meta name='description' content={seo.description} />
        <meta property='og:url' content={seo.url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={seo.name} />
        <meta property='og:description' content={seo.description} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content={seo.url} />
        <meta name='twitter:title' content={seo.name} />
        <meta name='twitter:description' content={seo.description} />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'></script>
    </>
  );
}

export default MyApp;
