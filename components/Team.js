import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const Team = ({certificates}) => {
  
   const client = createClient({
     projectId: "kbnh7il4",
     dataset: "production",
     useCdn: false,
   });
  
  const builder = imageUrlBuilder(client);

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="w-full bg-slate-50 p-0 mt-10" id="">
        <h1 className="heading">
          membership & <span>certification</span>
        </h1>

        <div className=" w-full mb-6 bg-slate-50 p-8 flex flex-col">
          <Slider {...settings} className="">
            {certificates.map((item) => {
              return (
                <img
                  key={item._id}
                  src={`${builder.image(item.certificate).width(500).url()}`}
                  alt=""
                  className=" h-96 flex"
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}



export default Team