import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar"


const HeaderProductsPage = ({setSiderBarOpne,sideBarOpen}) => {

  return (
    <header className=" bg-slate-200">
    <div className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
      
        <div className=" w-full   text-gray-700 md:text-center text-2xl font-semibold">
          Brand
        </div>
        <div className="flex items-center justify-end ">
          <button
            onClick={() => setSiderBarOpne(!sideBarOpen)}
            className="text-gray-600 focus:outline-none "
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </button>
       
        
        </div>
      </div>
     <NavBar/>
    <SearchBar/>
    </div>
  </header>
  )
}

export default HeaderProductsPage