import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <section className="footer mb-10">
        <div className="box-container">
          <div className="box">
            <h3>Azu</h3>
            <div className="share">
              <a
                href="https://www.facebook.com/Azu-Trade-India-104637829018241"
                className="fab fa-facebook-f"
              ></a>

              <a
                href="https://www.instagram.com/azu_india/"
                className="fab fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/in/azu-trade-0b6180248/"
                className="fab fa-linkedin"
              ></a>
              <a
                href="https://www.youtube.com/channel/UCzbUiekVZ0JBnD83tEYYN1g"
                className="fa-brands fa-youtube"
              ></a>
            </div>
            <a href="#home">
              <div className="lower" id="lower">
                <AiOutlineArrowUp />
              </div>
            </a>
          </div>
        </div>

        <div className="credit">
          &#169; Copyrights 2022
          <span>
            {" "}
            <a href="#">Azu_India Pvt Ltd</a>{" "}
          </span>{" "}
          | all rights reserved
        </div>
      </section>
    </>
  );
}

export default Footer