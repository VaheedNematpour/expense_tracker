import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface Props {
  dark: boolean;
  onDark: () => void;
}

const Navbar = ({ dark, onDark }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <nav className="flex items-center justify-between">
        <h1
          className={`font-black ${
            dark ? "text-zinc-100" : "text-zinc-900"
          } xs:text-lg sm:text-xl md:text-2xl lg:text-4xl`}
        >
          ExpenseTracker
        </h1>

        <button
          className={`font-black ${
            dark ? "text-zinc-100" : "text-zinc-900"
          } xs:hidden md:flex md:text-2xl lg:text-4xl`}
          onClick={onDark}
        >
          {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>

        <button
          className={`font-black ${
            dark ? "text-zinc-100" : "text-zinc-900"
          } xs:text-lg sm:text-xl md:hidden`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
      {expanded && (
        <ul className="md:hidden px-4 py-2">
          <li>
            <button
              className={`font-black ${
                dark ? "text-zinc-100" : "text-zinc-900"
              } xs:text-lg sm:text-xl`}
              onClick={onDark}
            >
              {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
