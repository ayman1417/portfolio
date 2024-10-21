import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex items-center flex-wrap justify-center min-h-screen mt-[-50px] fade-in">
      <div className="bg-Card p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        <div className="bg-black p-4 rounded-lg h-auto">
          {submitted ? (
            <div className="bg-black p-4 rounded-lg h-96">
              <div className="text-center">
                <h1 className="text-white mb-4 text-2xl font-bold uppercase">
                  Thanks for Contacting 😊
                </h1>
                <div className="text-T text-9xl  ">✓</div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-white mb-4 text-2xl text-center font-bold uppercase">
                Contact Me
              </h1>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  placeholder="Your Name"
                  required
                  className="p-2 border-2 bg-transparent text-white focus:outline focus:outline-0 focus:ring-2 focus:ring-Card3 focus:border-Card3 border-T rounded"
                />
                <input
                  placeholder="Your Email"
                  type="email"
                  required
                  className="p-2 border-2 bg-transparent text-white focus:outline focus:outline-0 focus:ring-2 focus:ring-Card3 focus:border-Card3 border-T rounded"
                />
                <input
                  placeholder="Write Subject"
                  required
                  className="p-2 border-2 py-3 bg-transparent text-white focus:outline focus:outline-0 focus:ring-2 focus:ring-Card3 focus:border-Card3 border-T rounded"
                />
                <textarea
                  placeholder="Details"
                  required
                  className="p-2 border-2 bg-transparent text-white focus:outline focus:outline-0 focus:ring-2 focus:ring-Card3 focus:border-Card3 border-T rounded"
                  rows="4"
                />
                <button
                  type="submit"
                  className="bg-T hover:bg-Card text-black p-2 rounded"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
        <div className="bg-black h-6 mt-1 mx-auto w-1/2 rounded-lg"></div>
        <div className="bg-black h-10 w-2 mx-auto rounded"></div>
        <div className="bg-black h-4 w-20 mx-auto rounded-lg"></div>
      </div>
    </div>
  );
}

export default Contact;
