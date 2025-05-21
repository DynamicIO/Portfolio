import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/ben-a-198113229/" // Replace with your LinkedIn URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700" // Added transform and scale classes
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/egy7777" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transform transition-transform duration-300 hover:scale-125 hover:text-gray-800" // Added transform and scale classes
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
