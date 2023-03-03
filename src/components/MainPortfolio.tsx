import React from "react";
import ButtonCategory from "./ButtonCategory";
import me2 from "/me2.png";
import { AiFillEye } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
type Props = {};

function MainPortfolio({}: Props) {
  return (
    <div>
      <div className="h-screen -mb-40 flex flex-col justify-center">
        <h1 className="px-20 text-5xl font-[Montserrat] font-bold text-zinc-100">
          <span className="text-extraOrange tracking-tight">
            Hi, I'm John,
            <br />
          </span>
          <span>Front-End Web Developer </span>
        </h1>
        <div className=" px-20 mt-10 text-lg flex gap-2">
          <a
            href="#skills"
            className="block leading-[3rem] w-min px-7 h-12 font-semibold rounded-md bg-extraOrange"
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="px-7 w-min h-12 leading-[3rem] text-white font-semibold rounded-md bg-orange-600 "
          >
            Projects
          </a>
          <a
            href="#About"
            className="text-white w-min px-7 h-12 leading-[3rem] font-semibold rounded-md bg-zinc-900"
          >
            About
          </a>
          <a
            href="#Contact"
            className=" px-7 h-12 leading-[3rem] w-min font-semibold rounded-md bg-gray-300 "
          >
            Contact
          </a>
        </div>
      </div>

      <div
        id="skills"
        className=" relative w-full pt-40  h-screen bg-greenPureDark"
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

      <div className="relative text-white bg-greenLightest p-40">
        <div className="custom-shape-divider-top-1677803367">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2 className="mb-12 text-5xl font-[Montserrat] font-bold text-zinc-100">
          Projects
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <div className=" bg-[#000d21] p-6 rounded-md">
            <div className="mb-4 h-60 overflow-hidden">
              <img
                src="/src/assets/themoovies.png"
                alt="The Moovies page img"
              />
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">The Moovies</h4>
              <p className="mb-4">
                Página de películas que utiliza la api The MovieDB para obtener
                información sobre cualquier película y conocer las peliculas en
                estreno. Al ser una api gratuita los tiempos de espera pueden
                llegar a 10s.
              </p>
              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
                >
                  <AiFillEye /> Live demo
                </button>
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
                >
                  <HiCode className="inline-block" /> Code
                </button>
              </div>
            </div>
          </div>
          <div className="h-min grid grid-cols-[50%_auto] gap-6 bg-[#18181b] p-6 rounded-md">
            <div className="shadow-md  mb-4  rounded-md overflow-hidden">
              <img src="/src/assets/toowrite.png" alt="TooWrite page img" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl  my-6">
                TooWrite.</h4>
              <p className="mb-12">
              The "Wall of Messages" is a full-stack web application built using NodeJS, Express, React, Typescript, Tailwind, and a MySQL database. The app provides a complete CRUD (Create, Read, Update, Delete) functionality for users to post and read messages on a wall.
              </p>
              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
                >
                  <AiFillEye /> Live demo
                </button>
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
                >
                  <HiCode className="inline-block" /> Code
                </button>
              </div>
            </div>
          </div>
          
          <div className=" bg-[#1f1f1f] p-6 rounded-md">
            <div className="mb-4 h-60 rounded-md overflow-hidden">
              <img
                src="/src/assets/tailgreen.png"
                alt="Just Books page img"
              />
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">Just Books.</h4>
              <p className="mb-4">
                Página de películas que utiliza la api The MovieDB para obtener
                información sobre cualquier película y conocer las peliculas en
                estreno. Al ser una api gratuita los tiempos de espera pueden
                llegar a 10s.
              </p>
              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
                >
                  <AiFillEye /> Live demo
                </button>
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
                >
                  <HiCode className="inline-block" /> Code
                </button>
              </div>
            </div>
          </div>
          <div className=" h-min grid grid-cols-[50%_auto] gap-6 bg-[#041a3d] p-6 rounded-md">
            <div className="mb-4  rounded-md overflow-hidden">
              <img src="/src/assets/todoapp.png" alt="To Do page img" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl  my-6">
                Getting <span className="text-blue-900">sh</span>it done
              </h4>
              <p className="mb-12">
                Página de películas que utiliza la api The MovieDB para obtener
                información sobre cualquier película y conocer las peliculas en
                estreno. Al ser una api gratuita los tiempos de espera pueden
                llegar a 10s.
              </p>
              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
                >
                  <AiFillEye /> Live demo
                </button>
                <button
                  type="button"
                  className="flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
                >
                  <HiCode className="inline-block" /> Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="About"
        className="bg-aboutme-background bg-cover flex items-center justify-between w-full h-screen bg-white"
      >
        <div className="p-20 w-1/2 mb-32">
          <h2 className="font-Nunito text-3xl mb-12">About me</h2>
          <h3 className="font-Montserrat font-bold text-5xl mb-10">
            "No dejes para mañana lo que puedas programar hoy"
          </h3>
          <p className="font-openSans text-lg ">
            Mi nombre es John Rodriguez, soy un Desarrollador Web. Mi objetivo
            es ayudar a crear una web mas moderna, dinamica y sobretodo
            funcional, desarrollar páginas que demuestren todo el potencial de
            una organización a los visitantes.
          </p>
        </div>
        <div className=" drop-shadow-lg mx-20 mb-10">
          <img className="h-[70vh]" src={me2} alt="Una foto de mi" />
        </div>
      </div>
      <div className="h-screen">
        <h2>Contact me</h2>
        <div>Form probably</div>
      </div>
    </div>
  );
}

export default MainPortfolio;
