import React from 'react'



const About = ({ about }) => {
  // console.log(aboutus)
  return (
    <>
    
      <section className="about" id="about">
        <h1 className="heading">
          honest <span>about us</span>
        </h1>

        <div className="flex flex-wrap justify-center mx-auto w-fit">
          <div className="image">
            <img src="images/home-img.png" alt="" />
          </div>

          <div className="content text-center">
            <p className='aboutus'>
           {about}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About