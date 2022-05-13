import React from "react";
import contactImage from "../../../Assets/images/appointment.png";
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-10 md:px-10 mt-28 bg-cover bg-no-repeat"
      style={{ background: `url(${contactImage})` }}
    >
      <div className="container mx-auto">
        <div className="title text-center">
          <h4 className="text-lg text-secondary">Contact us</h4>
          <h2 className="text-3xl text-white">Stay connected with us</h2>
        </div>
        <form
          action=""
          className="form-wrapper lg:w-1/4 mx-auto flex justify-center flex-col items-center gap-5 my-10"
        >
          <input
            type="text"
            placeholder="Email address here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Subject here"
            className="input input-bordered w-full "
          />
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-secondary mt-5 text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
