import React from 'react'
import { getAbout } from './backend/Data';
import About from "../components/About";
const Aboutus = ({aboutData}) => {
  return (
    <>
      <div className="my-32 md:mt-20">
        <About about={aboutData} />
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
  const aboutData = (await getAbout()) || [];
  return {
    props: {
      aboutData,
    },
  };
}
export default Aboutus