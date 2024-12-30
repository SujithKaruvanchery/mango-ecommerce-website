import React from "react";

function Contact() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-2">
            We'd love to hear from you! Fill out the form below or reach us
            using the provided details.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="p-6 rounded-none shadow-md w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Feel free to contact us via phone, email, or visit us at our
              office.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-500 w-8">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="ml-3">+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 w-8">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="ml-3">support@mango.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 w-8">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="ml-3">123 Main Street,Kerala,India</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-none shadow-md w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 p-3 border rounded-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-3 border rounded-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 p-3 border rounded-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
