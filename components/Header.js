import React from 'react'
import Link from "next/link";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineBars,
} from "react-icons/ai";
const Header = () => {
  return (
    <>
      <section className="info">
        <div className="box">
          <a href="#">
            <i className="fas fa-envelope"></i>explore@azutrade.com
          </a>
          <a href="#">
            <i className="fas fa-phone"></i>+91-9405823171
          </a>
        </div>
        <div className="share flex justify-center ">
          <a
            href="https://www.facebook.com/Azu-Trade-India-104637829018241"
            className="fab fa-facebook-f text-center  align-center"
          >
            <AiOutlineFacebook className="text-center text-white text-5xl my-2 mx-2 hover:text-orange-400" />
          </a>
          <a
            href="https://www.instagram.com/azu_india/"
            className="text-center text-white text-5xl my-1 mx-1"
          >
            <AiOutlineInstagram className="text-center text-white text-5xl my-2 mx-2 hover:text-orange-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/azu-trade-0b6180248/"
            className="text-center text-white text-5xl my-1 mx-1"
          >
            <AiFillLinkedin className="text-center text-white text-5xl my-2 mx-2 hover:text-orange-400" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzbUiekVZ0JBnD83tEYYN1g"
            className="text-center text-white text-5xl my-1 mx-1"
          >
            <AiFillYoutube className="text-center text-white text-5xl my-2 mx-2 hover:text-orange-400" />
          </a>
        </div>
      </section>
      <section className="name">
        <Link href={'./'}>
          <h2>Azu</h2>
        </Link>
      </section>
    </>
  );
}

export default Header