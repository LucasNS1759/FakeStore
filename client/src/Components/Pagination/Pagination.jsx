const Pagination = ({
  handlerNextPage,
  handlerPrevPage,
  data,
  handlersetPage,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-md mt-8">
        <button
          onClick={() => handlerPrevPage()}
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
        >
          Previous
        </button>
        {data &&
          Array.from(
            { length: Math.ceil(data.count / data.tamañoDePagina) },
            (_, index) => (
              <button
                onClick={() => handlersetPage(index)}
                key={index + 1}
                className={`py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white ${
                  data.paginaActual === index ? "bg-blue-500 text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}

        <button
          onClick={() => handlerNextPage()}
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
