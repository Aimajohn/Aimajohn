import { Link } from "react-router-dom";
import logo from "../assets/Ayoon.png";

function Navbar() {
  return (
    <nav className="bg-greenNormal shadow-sm absolute top-0 w-full h-20 flex justify-between items-center px-6 font-openSans text-zinc-200 text-xl ">
      <Link to="/Aimajoke/">
        <img width={175} src={logo} alt="Ayoon logo" />
      </Link>
      <Link
        target="_blank"
        className="hover:underline"
        to="https://github.com/Aimajoke"
      >
        Github
      </Link>
    </nav>
  );
}

export default Navbar;
