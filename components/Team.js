import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="" id="">
      <h1 className="heading">
        membership & <span>certification</span>
      </h1>

      <div className="w-full  mx-auto mb-6 bg-slate-50 p-5 md:p-10 lg:p-10">
        <Slider {...settings}>
          <img src="images/team.png" alt="" className=" h-96  lg:px-28 md:px-10" />
          <img src="images/team1.png" alt="" className=" h-96  lg:px-28 md:px-10" />
          <img src="images/team2.jpg" alt="" className=" h-96  lg:px-28 md:px-10" />
          <img src="images/team3.jpg" alt="" className=" h-96  lg:px-28 md:px-10" />
          <img src="images/team4.jpg" alt="" className=" h-96  lg:px-28 md:px-10" />
          <img src="images/team5.png" alt="" className=" h-96 lg:px-28 md:px-10" />
          <img src="images/team6.png" alt="" className= "h-96  lg:px-28 md:px-10" />
          <img src="images/team7.png" alt="" className=" h-96 lg:px-28 md:px-10" />
          <img src="images/team8.png" alt="" className=" h-96 lg:px-28 md:px-10" />
          <img src="images/team9.png" alt="" className=" h-96 lg:px-28 md:px-10" />
        </Slider>
      </div>
    </section>
  );
}

export default Team