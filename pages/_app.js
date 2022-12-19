import HttpsRedirect from "react-https-redirect";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import { useRouter } from "next/router";
import { store } from "../store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let title = "Koray Özdemir";
  if (router.pathname == "/about") {
    title = "About Me - Koray Özdemir";
  } else if (router.pathname == "/contact") {
    title = "Contact Me - Koray Özdemir";
  } else if (router.pathname == "/projects") {
    title = "My Projects - Koray Özdemir";
  }

  const seo = {
    url: "https://www.korayozdemir.com/",
    name: "Koray Özdemir",
    description:
      "Merhaba ben Koray Özdemir. Uzun süreden beridir yazılım üzerinde çalışıyorum. Javascript, Html5, Css3 yazılım dillerine hakimim. Çeşitli kütüphaneler kullanarak sizler için mobil ve masaüstü uygulamalar geliştirebilir veya size ait kişisel web sitenizi oluşturabilirim."
  };

  return (
    <Provider store={store}>
    <HttpsRedirect>
      <Head>
        <link rel="canonical" href={seo.url} />
        <link rel="icon" href="../icon.png" type="image/png" sizes="24x24" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.name} />
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:title" content={seo.name} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="Author" content="Koray Özdemir" />
        <meta name="publisher" content="Vercel Inc." />
        <meta name="robots" content="follow, index" />
        {/* <meta name="theme-color" content=""/>
        <meta name="msapplication-navbutton-color" content={theme === "dark" ? "#212529" :  ""} />
        <meta name="apple-mobile-web-app-status-bar-style" content={theme === "dark" ? "#212529" :  ""} /> */}
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WNCVBCY16X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

           gtag('config', 'G-WNCVBCY16X');
        `}
      </Script>
      <Header />
      <main>
        
          <Component {...pageProps} />
        
      </main>
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </HttpsRedirect>
    </Provider>
  );
}

export default MyApp;
