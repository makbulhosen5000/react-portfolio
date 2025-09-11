import React, { useRef } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import developer1 from "../../assets/json/programming-1.json";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();

  // Send email function
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_uiiy1r3", // service ID
        "template_y5hixrr",// template ID
        form.current,
        "eBs4o8v6cmheTDyjc" // public key
      );

      if (result.text === "OK") {
        toast.success("Mail sent successfully!");
        form.current.reset(); //Reset form after success
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Portfolio</title>
      </Helmet>

      <section
        className="bg-gray-200 py-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold underline py-8 text-center">
            Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lottie Animation */}
            <div data-aos="fade-up-right">
              <Lottie animationData={developer1} loop={true} />
            </div>

            {/* Contact Form */}
            <div className="mx-auto my-8 p-8 bg-gradient-to-r from-slate-900 to-slate-950 shadow-lg rounded-2xl max-w-xl">
              <h2
                className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6"
                data-aos="fade-up-left"
              >
                Have a project in mind! just want to say hi!
              </h2>

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="to_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-400 text-gray-800"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_name"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-400 text-gray-800"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-400 text-gray-800"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-yellow-300 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
