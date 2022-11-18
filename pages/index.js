import Team from "../components/Team";
import Intro from "../components/Intro";
import About from "../components/About";
import Product from "../components/Product";
import Enquiry from "../components/Enquiry";
import { getAbout, getCertificates, getProducts } from "../backend/Data";



export default function Home({product,about,certificates}) {

  return (
    <>
    
      
      <Intro />
      <Product products={product} />
      <Team certificates={certificates}/>
      <Enquiry />
      <About about={about} />
      
    </>
  );
}

export async function getServerSideProps(context) {
 const product = (await getProducts()) || [];
 const about = (await getAbout()) || [];
 const certificates = (await getCertificates()) || [];
  
  return {
    props: {
      product,about,certificates
    },
  };
}