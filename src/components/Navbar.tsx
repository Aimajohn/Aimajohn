import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-greenNormal absolute top-0 w-full h-20 flex justify-between items-center px-6 font-[nunito] text-4xl font-bold text-white">
        <Link to='/'>
        <span>John</span>
        </Link>
      <div>
        <button>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
