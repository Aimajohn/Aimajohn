import { Link } from "react-router-dom";
import logo from '../assets/Ayoon.png'

function Navbar() {
  return (
    <nav className="bg-greenNormal shadow-sm absolute top-0 w-full h-20 flex justify-between items-center px-6 font-[nunito] text-4xl font-bold text-white">
        <Link to='/'>
        <img width={175} src={logo} alt="Ayoon logo" />
        </Link>
      
    </nav>
  );
}

export default Navbar;