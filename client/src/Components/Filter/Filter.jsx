import { useState } from "react";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
  
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="relative inline-block text-left mt-1 mx-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Menu{" "}
        <svg
          className="h-5 w-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className=" inset-0  w-full z-[999]"
        ></div>
      )}
      <div
        className={`origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
        >
          Save
        </a>
        <div className="relative">
          <button
            onClick={()=>toggleSubMenu()}
            className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative rounded-md"
          >
           Categories{" "}
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5 ml-2"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none"></rect>
                  </g>
                  <g id="icons_Q2" data-name="icons Q2">
                    <path d="M24,27.2,13.4,16.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l12,11.9a1.9,1.9,0,0,0,2.8,0l12-11.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2Z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          {isSubMenuOpen && (
            <div
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="fixed inset-0 h-full w-full z-[999]"
            ></div>
          )}
          {isSubMenuOpen && (
            <div className="absolute top-0 left-full ml-4 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;text="
                className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Twitter
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Facebook
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;title=&amp;summary=&amp;source=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=&amp;caption=&amp;content=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;canonicalUrl=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;shareSource=tumblr_share_button"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Tumblr
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reddit.com/submit/?url=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;resubmit=true&amp;title="
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Reddit
              </a>
              {/* Add more sub-menu items as needed */}
            </div>
          )}
        </div>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100 rounded-md"
        >
          Report
        </a>
      </div>
    </div>
  );
};

export default Filter;
