import React from 'react'
import contactbanner from "../public/images/contactbanner.gif";
import Image from "next/Image";
import Enquiry from "../components/Enquiry";
const Contactus = () => {
  return (
    <>
      <div className="banner  my-20">
        <Image src={contactbanner} alt="You Ask We Answer">
        </Image>
        <Enquiry/>
</div>
    </>
  )
}

export default Contactus