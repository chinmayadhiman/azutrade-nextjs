import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 4,
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
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="w-full bg-slate-50 p-0 mt-10" id="">
      <h1 className="heading">
        membership & <span>certification</span>
      </h1>

      <div className="mb-6 bg-slate-50 p-8">
        <Slider {...settings} className="">
          <img src="images/team.png" alt="" className=" h-96 " />
          <img src="images/team1.png" alt="" className=" h-96 " />
          <img src="images/team2.jpg" alt="" className=" h-96 " />
          <img src="images/team3.jpg" alt="" className=" h-96 " />
          <img src="images/team4.jpg" alt="" className=" h-96 " />
          <img src="images/team5.png" alt="" className=" h-96" />
          <img src="images/team6.png" alt="" className= "h-96 " />
          <img src="images/team7.png" alt="" className=" h-96"/>
          <img src="images/team8.png" alt="" className=" h-96" />
          <img src="images/team9.png" alt="" className=" h-96" />
        </Slider>
      </div>
    </section>
  );
}

export default Team