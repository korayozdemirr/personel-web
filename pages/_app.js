import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
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
