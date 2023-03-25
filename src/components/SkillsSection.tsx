import { useState, MouseEvent, useEffect } from "react";
import nodejsImg from "../assets/nodejs-icon.png";
import githubImg from "../assets/github-icon.png";
import githubDarkImg from "../assets/github-iconDark.png";
import htmlCssImg from "../assets/html&css-icon.png";
import mysqlImg from "../assets/mysql-icon.png";
import npmImg from "../assets/npm-icon.png";
import reactImg from "../assets/react-icon.png";
import tailwindImg from "../assets/tailwind-icon.png";
import photoshopImg from "../assets/photoshop-icon.svg";
import typescriptImg from "../assets/typescript-icon.png";
import Technology from "./Technology";
import { FaBorderNone } from "react-icons/fa";
type Tech = {
  title: string;
  description: string;
  logo: string;
};

type Props = {};

function SkillsSection({}: Props) {
  const techs: Tech[] = [
    {
      title: "NodeJS",
      logo: nodejsImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "MySql",
      logo: mysqlImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "Photoshop",
      logo: photoshopImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "npm",
      logo: npmImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "TailwindCSS",
      logo: tailwindImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "ReactJS",
      logo: reactImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "Html, Css & Javascript",
      logo: htmlCssImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "Git & Github",
      logo: githubDarkImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
    {
      title: "Typescript",
      logo: typescriptImg,
      description:
        "Fast and efficient development experience with functional components, I can write clean and concise code that is easy to reason about and maintain. The use of hooks like useState and useReducer makes state management simple and intuitive. These hooks allow me to easily track and update state, triggering re-renders and enabling dynamic updates to the user interface. Additionally, hooks like useEffect make it easy to manage side effects and control component lifecycles.",
    },
  ];

  const [focusTech, setFocusTech] = useState({
    title: techs[0].title,
    description: techs[0].description,
    logo: techs[0].logo,
  });

  const [clickedTech, setClickedTech] = useState(false);

  useEffect(() => {
      if(window.innerWidth > 1100 ){
        return ;
      }
      clickedTech
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden");

    
  }, [clickedTech]);

  const selectTechHandler = (event: MouseEvent) => {

    setClickedTech(true);
    const ele = event.target as HTMLElement;
    const tech = parseInt(ele.id.charAt(1));
    setFocusTech({
      title: techs[tech].title,
      logo: techs[tech].logo,
      description: techs[tech].description,
    });
  };

  return (
    <div className="px-4 md:px-8 lg:px-40 snap-center pb-20 relative w-full  lg:h-screen bg-greenPureDark">
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
        id="skills"
        className="pt-40 mb-4 text-5xl font-[Montserrat] font-bold text-gray-100"
      >
        Skills
      </h2>
      <hr className="mb-12" />
      {/* <div className="flex mb-20 justify-center flex-wrap gap-10 ">
        <div className="bg-extraOrange p-8 rounded-md basis-64 text-center">
          <h3 className="mb-4 text-gray-100 font-Nunito font-black text-4xl">
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
          <h3 className="mb-4 text-gray-100 font-Nunito font-black text-4xl">
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
      </div> */}
      <div className="flex justify-center w-full">
        <div
          onClick={selectTechHandler}
          className="grid grid-cols-4 lg:grid-cols-5 gap-3 w-full sm:max-w-[500px] lg:w-1/2 lg:aspect-[6632/5279]"
        >
          <div
            id="s0"
            className="skillWrapper col-start-1 col-end-3 !bg-gray-700"
          >
            <img src={nodejsImg} alt="nodeJS icon" />
            {/* <p>NodeJS</p> */}
          </div>
          <div
            id="s1"
            className="skillWrapper col-start-4 row-start-5 lg:row-start-1 lg:col-start-3 aspect-square !px-1 !bg-emerald-700"
          >
            <img src={mysqlImg} alt="Mysql icon" />
            {/* <p>MySql</p> */}
          </div>
          <div
            id="s2"
            className="skillWrapper col-start-3 col-end-5 lg:col-start-4 lg:col-end-6 row-start-1 row-end-3 aspect-square p-0 !bg-orange-500"
          >
            <img src={photoshopImg} className="!h-full" alt="photoshop icon" />
            {/* <p>Photoshop</p> */}
          </div>
          <div
            id="s3"
            className="skillWrapper col-start-4 row-start-4 lg:col-start-1 lg:row-start-2 aspect-square !bg-cyan-700"
          >
            <img src={npmImg} alt="npm" />
            {/* <p>npm</p> */}
          </div>
          <div
            id="s4"
            className="skillWrapper !bg-[#004AB5] col-start-1 col-end-3 row-start-2 lg:col-start-2 lg:col-end-4 gap-1 items-center !text-white"
          >
            <img src={tailwindImg} className="!w-4/12" alt="TailwindCSS icon" />
            <p>TailwindCSS</p>
          </div>
          <div
            id="s5"
            className="skillWrapper row-start-3 row-end-5 col-start-1 col-end-3 !bg-zinc-700 aspect-square"
          >
            <img src={reactImg} className="!p-3 !h-full" alt="React icon" />
            {/* <p>React</p> */}
          </div>
          <div
            id="s6"
            className="skillWrapper col-start-3 col-end-5 !bg-red-900"
          >
            <img
              className="!w-10/12"
              src={htmlCssImg}
              alt="HTML, CSS & Javascript"
            />
            {/* <p>HTML & CSS</p> */}
          </div>
          <div
            id="s7"
            className="skillWrapper  flex-col text-center row-start-4 row-end-6 lg:row-start-3 lg:row-end-5 lg:col-start-5 !text-white  !bg-gray-600"
          >
            <img src={githubDarkImg} alt="Github icon" />
            <p>Git & Github</p>
          </div>
          <div
            id="s8"
            className="skillWrapper col-start-1 col-end-3 lg:col-start-3 lg:col-end-5 gap-2 items-center !bg-[#153749] text-white"
          >
            <img
              className="!w-3/12"
              src={typescriptImg}
              alt="Typescript icon"
            />
            <p>Typescript</p>
          </div>
        </div>
        {clickedTech ? (
          <Technology
            close={setClickedTech}
            title={focusTech.title}
            description={focusTech.description}
            logo={focusTech.logo}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SkillsSection;
