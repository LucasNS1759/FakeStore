const NavBar = () => {
  return (
    <nav className="sm:flex sm:justify-center sm:items-center mt-4">
      <div className="flex flex-col sm:flex-row">
        <a
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Home
        </a>
        <a
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Shop
        </a>
        <a
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Categories
        </a>
        <a
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Contact
        </a>
        <a
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          About
        </a>
        <a
          href="/SingUp"
          className="text-text-gray-600  py-1 hover:cursor-pointer px-1 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg"
        >
          SingUp
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
