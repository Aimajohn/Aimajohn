import React from "react";
import ButtonCategory from "./ButtonCategory";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Principal from "./Principal";
import ContactMe from "./ContactMe";
type Props = {};

function MainPortfolio({}: Props) {
  return (
    <div className="snap-y">
      <Principal/>

      <div
        id="skills"
        className="snap-center  relative w-full pt-40  h-screen bg-greenPureDark"
      >
        <div className="custom-shape-divider-top-1677781969">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2
          className="text-5xl mb-12 font-[Montserrat] font-bold text-white
         px-20 text-center"
        >
          Skills
        </h2>
        <div className="  justify-center flex flex-wrap gap-10 ">
          <div className="bg-extraOrange p-8 rounded-md basis-64 text-center">
            <h3 className="mb-4 text-gray-900 font-Nunito font-black text-4xl">
              Back-End
            </h3>
            <ul className="font-openSans text-lg ">
              <li className="my-1 bg-orange-600 px-3 text-yellow-50 text-center py-2 rounded-md ">
                NodeJS
              </li>
              <li className="my-1 bg-orange-600 px-3 text-yellow-50 text-center py-2 rounded-md ">
                Express
              </li>
              <li className="my-1 bg-orange-600 px-3 text-yellow-50 text-center py-2 rounded-md ">
                MySql
              </li>
            </ul>
          </div>

          <div className="basis-64 text-center bg-green-500 p-8 rounded-md">
            <h3 className="mb-4 text-gray-900 font-Nunito font-black text-4xl">
              Front-End
            </h3>
            <ul className="font-openSans text-lg ">
              <li className="my-1 bg-greenNormal px-3 text-zinc-100 text-center py-2 rounded-md ">
                HTML & CSS
              </li>
              <li className="my-1 bg-greenNormal px-3 text-zinc-100 text-center py-2 rounded-md ">
                Javacript
              </li>
              <li className="my-1 bg-greenNormal px-3 text-zinc-100 text-center py-2 rounded-md ">
                React
              </li>
              <li className="my-1 bg-greenNormal px-3 text-zinc-100 text-center py-2 rounded-md ">
                Typescript
              </li>
              <li className="my-1 bg-greenNormal px-3 text-zinc-100 text-center py-2 rounded-md ">
                TailwindCSS
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-md basis-64 text-center">
            <h3 className="mb-4 text-center text-blue-50 font-Nunito font-black text-4xl">
              Extras
            </h3>
            <ul className="font-openSans text-lg ">
              <li className="my-1 bg-[#101114] px-3 text-blue-100 text-center py-2 rounded-md ">
                Git & Github
              </li>
              <li className="my-1 bg-[#101114] px-3 text-blue-100 text-center py-2 rounded-md ">
                Photoshop
              </li>
              <li className="my-1 bg-[#101114] px-3 text-blue-100 text-center py-2 rounded-md ">
                npm
              </li>
              <li className="my-1 bg-[#101114] px-3 text-blue-100 text-center py-2 rounded-md ">
                SPA & SSR
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Projects />
      <AboutMe />
      <ContactMe/>
      
    </div>
  );
}

export default MainPortfolio;
