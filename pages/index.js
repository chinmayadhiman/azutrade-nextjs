import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Intro from "../components/Intro";
import About from "../components/About";
import Product from "../components/Product";
import Enquiry from "../components/Enquiry";

import { createClient } from "next-sanity";

export default function Home({product,about}) {

  return (
    <>
    
      <Nav />
      <Intro />
      <Product products={product} />
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
  const product = await client.fetch(query);
  const about = aboutq[0].aboutus[0].children[0].text
  
  return {
    props: {
      product,about
    },
  };
}