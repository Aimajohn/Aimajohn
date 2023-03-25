import React from "react";
import { FaAngleDown } from "react-icons/fa";
import developer from "../assets/homeimg.png";

type Props = {};

function Principal({}: Props) {
  return (
    <div className="px-4 md:px-8 lg:px-40 snap-center min-h-screen md:min-h-[70vh] lg:min-h-screen  -mb-20 lg:-mb-40 flex items-center  justify-between">
      <div className=" items-center flex flex-col justify-center ">
        <h1 className="relative text-5xl font-[Montserrat] font-bold text-zinc-100">
          <span className="hidden absolute text-sm left-[400px] mt-2 -top-3 bg-extraOrange text-white font-semibold px-4 py-2 w-fit rounded-full ">
            +3 years experience
          </span>
          <span className=" text-extraOrange tracking-tight">
            Hi, I'm John,
            <br />
          </span>
          <span>Front-End Web Developer </span>
        </h1>
        <div className="justify-start w-full flex-wrap mt-10 text-lg flex gap-2">
          <a
            href="#skills"
            className="flex hover:bg-orange-700 text-white items-center gap-2 leading-[3rem] w-min pl-7 pr-4 h-12 font-semibold rounded-md bg-orange-600"
          >
            Skills <FaAngleDown className="mt-1" />
          </a>
          <a
            href="#Projects"
            className="flex gap-2 pl-7 pr-4 items-center  hover:bg-greenNormal  w-min h-12 text-white leading-[3rem] text-zinc-000 font-semibold rounded-md bg-greenLightest "
          >
            Projects
            <FaAngleDown className="mt-1" />
          </a>
          <a
            href="#About"
            className="flex gap-2 pl-7 pr-4 items-center hover:bg-zinc-800 text-white w-min  h-12 leading-[3rem] font-semibold rounded-md bg-zinc-700"
          >
            About
            <FaAngleDown className="mt-1" />
          </a>
          <a
            href="#Contact"
            className="flex gap-2 pl-7 pr-4 items-center hover:bg-gray-500 hover:text-white  h-12 leading-[3rem] w-min font-semibold rounded-md bg-gray-300 "
          >
            Contact
            <FaAngleDown className="mt-1" />
          </a>
        </div>
      </div>
      <div className="hidden lg:block w-[530px] h-[530px]  relative  ">
        <div className=" absolute top-8 right-0  rounded-xl w-[290px] h-[300px]  bg-[#f8fcf1]"></div>
        <div className=" absolute  bottom-10 left-0  rounded-xl w-full h-64  bg-[#f8fcf1]"></div>
        <img className="absolute  top-10 w-[520px] " src={developer} alt="" />
      </div>
    </div>
  );
}

export default Principal;
