import React, { useState, useEffect } from 'react'
import Nav from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import you from './you.gif'

import { FiExternalLink } from "react-icons/fi";
import { createClient } from "next-sanity";
const blog = ({ faq }) => {
   const [domLoaded, setDomLoaded] = useState(false);

   useEffect(() => {
     setDomLoaded(true);
   }, []);
  return (
    <>
      <Nav/>
      <div className='h-96 w-full'>
        <Image
          src={you}
          alt="Picture of the author"
          className='h-full w-full'
        />
      </div>

      {domLoaded && (
        <>
          <div className="container ">
            <div className="flex-">
              {faq.map((item) => {
                return (
                  <div className="w-fit faqbox text-center flex gap-10 text-4xl pl-5 mx-2 mt-12 bg-orange-200 p-5 px-10 hover:text-white hover:bg-orange-500 rounded-lg">
                    <Link href={item.link}>{item.title}</Link>
                    <Link href={item.link}>
                      <FiExternalLink />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "kbnh7il4",
    dataset: "production",
    useCdn: false,
  });
  const faq = await client.fetch(`*[_type == "faq"]`);
  return {
    props: {
      faq
    },
  };
}
export default blog