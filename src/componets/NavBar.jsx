import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GitHub, Linkedln } from "../assets/constants";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-8 px-8 mb-10 ">
      <div className="flex flex-shrink-0 items-center">
      </div>
      
      <div className="flex items-center justify-center gap-4 text-2xl mr-8 text-teal-700">
        <a href={Linkedln} target="blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-teal-400" />
        </a>
        <a href={GitHub} target="blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-teal-400" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
