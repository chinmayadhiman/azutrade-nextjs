import React from 'react'
import contactbanner from "../public/images/contactbanner.gif";
import Image from "next/image";
import Enquiry from "../components/Enquiry";
const Contactus = () => {
  return (
    <>
      <div className="banner  md:my-20 w-full">
        <Image src={contactbanner} alt="You Ask We Answer" className='w-full'>
        </Image>
        <Enquiry/>
</div>
    </>
  )
}

export default Contactus