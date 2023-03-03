import React from "react";
import me2 from "/me2.png";

type Props = {};

function AboutMe({}: Props) {
  return (
    <div
      id="About"
      className="relative bg-aboutme-background bg-cover flex items-center justify-between w-full h-screen bg-white"
    >
      <div className="custom-shape-divider-top-1677812606">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="p-20 w-1/2 mb-32">
        <h2 className="font-Nunito text-3xl mb-12">About me</h2>
        <h3 className="font-Montserrat font-bold text-5xl mb-10">
          "No dejes para mañana lo que puedas programar hoy"
        </h3>
        <p className="font-openSans text-lg ">
          Mi nombre es John Rodriguez, soy un Desarrollador Web. Mi objetivo es
          ayudar a crear una web mas moderna, dinamica y sobretodo funcional,
          desarrollar páginas que demuestren todo el potencial de una
          organización a los visitantes.
        </p>
      </div>
      <div className=" drop-shadow-lg mx-20 mb-10">
        <img className="h-[70vh]" src={me2} alt="Una foto de mi" />
      </div>
    </div>
  );
}

export default AboutMe;
