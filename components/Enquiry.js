import React,{useState} from "react";

const Enquiry = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      number: "",
      nation: "",
    });

    const submitForm = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          enquiry <span>form</span>
        </h1>

        <div className="row">
          <form action="post" name="google-sheets" id="myform">
            <h3>Ask for the Goddamn enquiry. We need to pay the rent</h3>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Company Name"
                className="box"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="box"
              />
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter your Phone No."
                className="box"
              />
              <input
                type="text"
                name="nation"
                id="state"
                placeholder="Enter your Nation"
                className="box"
              />
            </div>
            <textarea
              placeholder="How can we help You?"
              name="msg"
              id="msg"
              cols="30"
              rows="10"
            ></textarea>

            <button onclick="my()" className="btn" type="submit">
              send message
            </button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.790933677691!2d77.74592241493085!3d20.920729286057064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79c0a994559f06b6!2zMjDCsDU1JzE0LjYiTiA3N8KwNDQnNTMuMiJF!5e0!3m2!1sen!2sin!4v1667286285772!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>our number</h3>
            <p>+91-9405823171</p>
            <p>+91-9356178237</p>
          </div>

          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>our email</h3>
            <p>azutradeindia@gmail.com</p>
            <p>explore@azutrade.com</p>
          </div>

          <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>our address</h3>
            <p>Ganesh colony,dasara maidan road Amaravati - 444605</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
