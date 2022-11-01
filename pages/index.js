import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Intro from "../components/Intro";
import About from "../components/About";
import Product from "../components/Product";
import Enquiry from "../components/Enquiry";

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export default function Home({blogs,about}) {
    const client = createClient({
      projectId: "iytovi01",
      dataset: "production",
      useCdn: false,
    });
    // console.log(blogs);
    const builder = imageUrlBuilder(client);
      
      
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AzuTrade</title>
        <meta name="description" content="Azutrade" />
        <link rel="icon" type="image" href="../public/images/anar.png" />
      </Head>

      <Nav />
      <Intro />
      <Product products={blogs} />
      <Team />
      <Enquiry />
      <About about={about} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "kbnh7il4",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "product"]`;
  const aboutq = await client.fetch(`*[_type == "aboutus"]`);
  const faq = await client.fetch(`*[_type == "faq"]`);
  const blogs = await client.fetch(query);
  const about = aboutq[0].aboutus[0].children[0].text
  
  return {
    props: {
      blogs,about
    },
  };
}