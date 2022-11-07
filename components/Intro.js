import React from 'react'
import bg from '../public/images/hm2.jpg'
const Intro = () => {
  
  return (
    <>
     
      <section
        className="home"
        id="home"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="content">
          <h3>
            <span> NAMASTE </span>
          </h3>
        </div>
      </section>
      <section className="features" id="services">
        <h1 className="heading">
          why <span>choose us</span>
        </h1>

        <div className="content">
          <div className="box">
            <i className="fa-solid fa-star"></i>
            <h3>No Compromise in quality.</h3>
            <p>So please Don't Bargain 😅</p>
          </div>

          <div className="box">
            <i className="fas fa-dollar-sign"></i>
            <h3>Transparent and Precise Prices</h3>
            <p>
              We add only 5-9% of our margins. We're many things but not greedy.
              😎
            </p>
          </div>

          <div className="box">
            <i className="fas fa-handshake-simple"></i>
            <h3>Our actions follow the aim of creating long term bond.</h3>
            <p>
              Let's date with just one trade and then get married for rest of
              the trades. ❤️
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-people-group"></i>
            <h3>We care and are here for assistance at any point.</h3>
            <p>Just try us once!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro