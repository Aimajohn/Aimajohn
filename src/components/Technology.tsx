import React, { MouseEventHandler } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

type Props = {
  logo: string;
  title: string;
  description: string;
  close: (awee: boolean) => void;
};

function Technology({ logo, title, description, close }: Props) {
  const closeButtonHandler = () => {
    close(false);
  };

  return (
    <div className="relative w-1/2 bg-zinc-500 bg-opacity-50 text-xl leading-8 rounded-lg px-12 pt-16 text-gray-200">
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
  );
}

export default Technology;
