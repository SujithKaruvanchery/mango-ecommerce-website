import React from "react";

const About = () => {
  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">
          Welcome to <span className="font-semibold">[Your Website Name]</span>!  
          We are here to make your shopping experience easy, enjoyable, and secure.  
          Our goal is to provide you with the best products at affordable prices, backed by reliable customer support.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="mt-3 space-y-2">
            <li>Wide range of quality products</li>
            <li>Safe and secure shopping</li>
            <li>Fast delivery</li>
            <li>Friendly customer service</li>
          </ul>
        </div>
        <p className="mt-6">
          Thank you for choosing <span className="font-semibold">[Your Website Name]</span>.  
          We’re happy to have you with us!
        </p>
      </div>
    </div>
  );
};

export default About;
