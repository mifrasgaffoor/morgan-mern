import React from "react";
import lg from '../images/mobile.jpg'
export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex items-center">
        <img src={lg} alt="Sahand Estate Logo" className="w-300 h-300 mr-4" />
        <div>
          <h1 className="text-3xl font-bold mb-4 text-slate-800">
            <span className="text-slate-700" style={{ fontSize: "4.5rem" }}>
              {" "}
              About
            </span>{" "}
          </h1>
          <p className="mb-4 text-slate-700">
            Morgan Real Estate stands at the forefront of the real estate
            industry, focusing on assisting clients in acquiring, selling, and
            renting properties in highly sought-after neighborhoods. Our
            seasoned team of agents is committed to delivering exceptional
            service, ensuring a seamless experience for both buyers and sellers.
          </p>
          <p className="mb-4 text-slate-700">
            Our objective is to assist clients in accomplishing their real
            estate objectives through the provision of expert guidance, tailored
            services, and a profound knowledge of the local market. Whether
            you're interested in purchasing, selling, or renting a property, we
            are dedicated to guiding you throughout the entire process.
          </p>
          <p className="mb-4 text-slate-700">
            Our team of agents possesses extensive experience and expertise in
            the real estate sector. We are fully dedicated to delivering the
            utmost level of service to our valued clients. We firmly believe
            that the process of buying or selling a property should be a
            gratifying and fulfilling experience, and we are resolutely
            committed to ensuring that for each and every one of our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
