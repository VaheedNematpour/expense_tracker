import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import categories from "../ExpenseFilter";

interface Props {
  dark: boolean;
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ dark, onSelect }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <h2
        className={`my-4 font-bold ${
          dark ? "text-zinc-100" : "text-zinc-900"
        } xs:text-lg sm:text-xl xl:text-2xl`}
      >
        Filter your Expenses
      </h2>

      <div className="xs:px-2 sm:px-3 md:px4 lg:px-6 flex flex-col">
        <button
          className={`bg-zinc-500 text-zinc-100 px-4 py-2
          rounded-md shadow-md flex items-center
          justify-between xs:text-sm sm:text-md md:text-lg md:py-3 lg:text-xl xl:text-2xl`}
          onClick={() => setExpanded(!expanded)}
        >
          <span>Select Category</span>
          <FaChevronDown />
        </button>

        {expanded && (
          <ul
            className={`border-2 my-2 px-4 py-2 flex flex-col space-y-1 rounded-md shadow-md md:py-3 ${
              dark ? "bg-zinc-700" : "bg-zinc-200"
            } `}
          >
            <li
              className={`px-4 py-3 hover:bg-zinc-300`}
              onClick={() => {
                onSelect("");
                setExpanded(false);
              }}
            ></li>
            {categories.map((category) => (
              <li
                className={`px-4 py-1 hover:bg-zinc-300`}
                onClick={() => {
                  onSelect(category);
                  setExpanded(false);
                }}
                key={category}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExpenseFilter;
