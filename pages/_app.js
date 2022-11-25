import "../styles/globals.css";
import "../styles/azu.css";
import "../styles/navbar.css";
import favicon from '../public/images/anar.png'
import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AzuTrade</title>
        <meta name="description" content="Azutrade" />
        <link rel="icon" type="image" href={favicon.src} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <title>AzuTrade</title>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.coderblogs.site" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AzuTrade" />
        <meta
          property="og:description"
          content="We're small and we care and we're here to help you import the hell out of India. India have lot to provide along with Trust, quality and Tandoori Naan."
        />
        <meta property="og:image" content={`${favicon.src}`} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="azutrade.com" />
        <meta property="twitter:url" content="https://www.azutrade.com" />
        <meta name="twitter:title" content="AzuTrade" />
        <meta
          name="twitter:description"
          content=" We're small and we care and we're here to help you import the hell out of India. India have lot to provide along with Trust, quality and Tandoori Naan."
        />
        <meta name="twitter:image" content={`${favicon.src}`} />
      </Head>
      <NextSeo
        title="AzuTrade"
        titleTemplate="AzuTrade"
        defaultTitle="AzuTrade"
        description="We're small and we care and we're here to help you import the hell out of India. India have lot to provide along with Trust, quality and Tandoori Naan"
        canonical="https://www.azutrade.com/"
        openGraph={{
          url: "https://www.azutrade.com/",
          title: "AzuTrade",
          description:
            " We're small and we care and we're here to help you import the hell out of India. India have lot to provide along with Trust, quality and Tandoori Naan",
          images: [
            {
              url: "../public/images/anar.png",
              width: 800,
              height: 420,
              alt: "logo",
            },
          ],
        }}
      />
      <script></script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WB2XTB4');
        `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB2XTB4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
    </>
  );
}

export default MyApp;
