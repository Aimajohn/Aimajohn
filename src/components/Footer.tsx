import React from "react";
import logo from "/icon-just-books.png";
import logoAyoon from "../assets/Ayoon.png";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="justify-between py-2 px-10 flex items-center absolute bottom-0 w-full h-20 bg-zinc-800">
      <div className="flex justify-center flex-col">
        <img className="object-contain h-10" src={logo} alt="Aimajoke logo" />
        <span className="text-xs bold text-zinc-300  block">Aimajoke</span>
      </div>

      <img className="h-full object-contain py-3" src={logoAyoon} alt="" />
    </div>
  );
}

export default Footer;
