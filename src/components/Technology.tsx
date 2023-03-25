import React, { MouseEventHandler } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

type Props = {
  logo: string;
  title: string;
  description: string;
  close: (awee: boolean) => void;
};

function Technology({ logo, title, description, close }: Props) {
  const closeButtonHandler: MouseEventHandler = () => {
    close(false);
  };

  return (
    <div className="lgMax:fixed lg:bg-transparent z-10 lgMax:top-0 bottom-0 w-full lg:w-1/2 bg-[#000000d7]">
    <div 
    className="
    text-sm relative top-1/4 bg-gray-800  my-auto leading-8 rounded-lg px-6 pb-6 pt-16 text-gray-200
    md:px-16 md:h-1/2 mx-4 md:mx-auto md:w-[600px] 
    lg:relative lg:w-full lg:ml-16 lg:text-base lg:pb-16 lg:px-12 lg:top-0 lg:h-fit
    ">
      <button
        onClick={closeButtonHandler}
        type="button"
        className="absolute top-4 text-zinc-50 shadow-sm  right-4"
      >
        <IoCloseCircleSharp />
      </button>
      <div className="flex justify-between">
        <h3 className="font-bold font-Poppins text-3xl mb-4">{title}</h3>
        <img className="-mt-4  h-12" src={logo} alt="" />
      </div>
      <p>{description}</p>
    </div>
    </div>
  );
}

export default Technology;
