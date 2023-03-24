import React from "react";

import { AiFillEye } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import tailgreenImg from "../assets/tailgreen.png";
import theMooviesImg from "../assets/themoovies.png";

type Props = {};

function Projects({}: Props) {
  return (
    <div
      id="Projects"
      className="snap-start relative text-white bg-greenLightest px-12 py-40 lg:p-40"
    >
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
        <hr className="mt-4" />
      </h2>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-12">
        <div className="w-full bg-[#000d21] p-6 rounded-md">
          <div className="mb-4 h-60 overflow-hidden">
            <img src={theMooviesImg} alt="The Moovies page img" />
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">The Moovies</h4>
            <p className="mb-6">
              Página de películas que utiliza la api The MovieDB para obtener
              información sobre cualquier película y conocer las peliculas en
              estreno. Al ser una api gratuita los tiempos de espera pueden
              llegar a 10s.
            </p>
            <div className="mb-6 flex flex-row gap-4">
              <a
                href="https://aimajoke.github.io/themoviedb-api/public/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
              >
                <AiFillEye /> Live demo
              </a>
              <a
                href="https://github.com/Aimajoke/themoviedb-api"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
              >
                <HiCode className="inline-block" /> Code
              </a>
            </div>
          </div>
        </div>
        <div className="h-min grid grid-cols-1 lg:grid-cols-1 xl:h-full lg:h-min xl:grid-cols-2   md:grid-cols-[40%_auto] gap-6 bg-[#18181b] p-6 rounded-md">
          <div className="shadow-md xl:max-h-fit h-80 w-full bg-no-repeat bg-cover xl:h-full xl:bg-center xl:bg-contain  lg:mb-4  rounded-md overflow-hidden bg-[url('/src/assets/toowrite.png')]"></div>
          <div>
            <h4 className="font-semibold text-2xl  my-6">TooWrite.</h4>
            <p className="mb-12">
              The "Wall of Messages" is a full-stack web application built using
              NodeJS, Express, React, Typescript, Tailwind, and a MySQL
              database. The app provides a complete CRUD (Create, Read, Update,
              Delete) functionality for users to post and read messages on a
              wall.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="https://todo-mern-stack-production-9aa8.up.railway.app/TODO-MERN-STACK/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
              >
                <AiFillEye /> Live demo
              </a>
              <a
                href="https://github.com/Aimajoke/TODO-MERN-STACK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
              >
                <HiCode className="inline-block" /> Code
              </a>
            </div>
          </div>
        </div>

        <div className=" bg-[#1f1f1f] p-6 rounded-md">
          <div className="mb-4 h-60 rounded-md overflow-hidden">
            <img src={tailgreenImg} alt="Just Books page img" />
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">Just Books.</h4>
            <p className="mb-6">
              Página de películas que utiliza la api The MovieDB para obtener
              información sobre cualquier película y conocer las peliculas en
              estreno. Al ser una api gratuita los tiempos de espera pueden
              llegar a 10s.
            </p>
            <div className="flex flex-row gap-4 mb-6">
              <a
                href="https://aimajoke.github.io/tailgreeen/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
              >
                <AiFillEye /> Live demo
              </a>
              <a
                href="https://github.com/Aimajoke/tailgreeen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
              >
                <HiCode className="inline-block" /> Code
              </a>
            </div>
          </div>
        </div>
        <div className="h-min grid grid-cols-1 lg:grid-cols-1 xl:h-full lg:h-min xl:grid-cols-2   md:grid-cols-[40%_auto] gap-6 bg-[#041a3d] p-6 rounded-md">
          <div className="shadow-md xl:max-h-fit h-80 w-full bg-no-repeat bg-cover xl:h-full xl:bg-center xl:bg-contain  lg:mb-4  rounded-md overflow-hidden bg-[url('/src/assets/todoapp.png')]">
            {/* <img src="/src/assets/todoapp.png" alt="To Do page img" /> */}
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
              <a
                href="https://aimajoke.github.io/TodoApp-React/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-orange-600 hover:text-white px-5 py-2 font-semibold rounded-md bg-orange-500"
              >
                <AiFillEye /> Live demo
              </a>
              <a
                href="https://github.com/Aimajoke/TodoApp-React"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer flex items-center flex-row justify-center gap-1 text-yellow-100 hover:shadow-md hover:bg-greenNormal hover:text-white px-5 py-2 font-semibold rounded-md bg-green-600"
              >
                <HiCode className="inline-block" /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
