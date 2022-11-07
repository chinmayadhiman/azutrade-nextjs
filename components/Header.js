import React, { useState } from "react";

const nav = () => {
  const [menuStatus, setmenuStatus] = useState({
    style: "header",
    menuStatus: "open",
    icon: false,
  });

  const handleClick = () => {
    switch (menuStatus.menuStatus) {
      case "open":
        setmenuStatus({
          menuStatus: "close",
          style: "header active",
          icon: true,
        });
        break;
      case "close":
        setmenuStatus({
          menuStatus: "open",
          style: "header",
          icon: false,
        });
        break;
    }
  };
  return (
    <>
      <section className="info">
        <div className="box text-white">
          <a href="#">
            <i className="fas fa-envelope "></i>explore@azutrade.com
          </a>
          <a href="#">
            <i className="fas fa-phone"></i>+91-9405823171
          </a>
        </div>
        <div className="share flex justify-center ">
          <a
            href="https://www.facebook.com/Azu-Trade-India-104637829018241"
            className="fab fa-facebook-f "
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
      </section>
      <section className="name">
        <h2>Azu</h2>
      </section>
    </>
  );
};

export default nav;
