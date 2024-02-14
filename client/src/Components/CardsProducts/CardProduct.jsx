import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const CardProduct = ({ key, id, title, price, image, amount }) => {
  const getProductsCartQuery = useQuery({ queryKey: ["getProductsToCart"] });

  const addProductCartHandler = async () => {
    try {
      const response = await axios.post("/shoppingCart/addProduct",
        {
          productId: id,
          title,
          price,
          image,
          amount: 1,
        },
        {
          withCredentials: true, // Configurar withCredentials a true
        }
      );
      console.log(response)
      getProductsCartQuery.refetch();
    } catch (error) {
      Swal.fire({
        title: error.response.data.error,
        text: error.response.data.message ,
        icon: "warning",
        button: "ok",
      });
      console.log(error);
    }
  };

  return (
    <div
      key={key}
      className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
    >
   
      <button
        onClick={addProductCartHandler}
        className="p-2 flex rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 "
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
      <Link to={`/detailProdut/${id}`}>
        <div
          className="flex items-end justify-end h-56 w-full bg-cover my-6"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </Link>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{title && title}</h3>
        <span className="text-gray-500 mt-2">${price && price}</span>
      </div>
    </div>
  );
};

export default CardProduct;
