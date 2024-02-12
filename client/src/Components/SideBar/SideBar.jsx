import axios from "axios";
import CheckOut from "../CheckOut/CheckOut";
import { useQuery } from "@tanstack/react-query";

const SideBar = ({ setSiderBarOpne, sideBarOpen }) => {
  const getItems = async () => {
    try {
      const response = await axios.get("/shoppingCart/getProductsFromCart", {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isError, error, isloading, refetch } = useQuery({
    queryKey: ["getProductsToCart"],
    queryFn: getItems,
  });

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(
        "/shoppingCart/deleteProductFromCart",
        {
          data: { itemId: id }, // Mueve los datos aquí
          withCredentials: true, // Configura withCredentials a true
        }
      );
      if (response.status === 200) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlerChangeAmount = async (id, amount) => {
    try {
      const response = await axios.put(
        "/shoppingCart/changeAmount",
        {
          itemId: id,
          amount: amount
        },
        {
          withCredentials: true // Configura withCredentials a true
        }
      );
      if (response.status === 200) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      //   className="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
      className={
        !sideBarOpen
          ? "hidden"
          : "  fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300"
      }
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>

        <button
          onClick={() => setSiderBarOpne(!sideBarOpen)}
          className="text-gray-600 focus:outline-none"
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
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <hr className="my-3" />

      {data &&
        data.data.items.map((product) => {
          return (
            <div key={product.id} className="flex justify-between mt-6">
              <button
                onClick={() => handleDeleteItem(product.id)}
                className=" w-4 h-fit border rounded border-black text-sm text-black bg-red-200 mr-4"
              >
                X
              </button>
              <div className="flex">
                <img
                  className="h-20 w-20 object-cover rounded "
                  src={product?.image}
                  alt=""
                />
                <div className="mx-3">
                  <h3 className="text-sm text-gray-600">{product?.title}</h3>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handlerChangeAmount(product.id, "+")}
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
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
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                    <span className="text-gray-700 mx-2">
                      {product?.amount}
                    </span>
                    <button
                      onClick={() => handlerChangeAmount(product.id, "-")}
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
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
                        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-gray-600">${product?.price}</span>
            </div>
          );
        })}

      <div className="mt-8">
        <form className="flex items-center justify-center">
          <input
            className="form-input w-48"
            type="text"
            placeholder="Add promocode"
          />
          <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Apply</span>
          </button>
        </form>
        <hr className="my-3" />
        <h3 className="text-sm text-gray-600">
          total :${data && data.data.total}
        </h3>
      </div>
      <CheckOut data={data} />
    </div>
  );
};

export default SideBar;
