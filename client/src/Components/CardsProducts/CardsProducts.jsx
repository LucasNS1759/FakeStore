import CardProduct from "./CardProduct";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../Pagination/Pagination";

const CardsProducts = () => {
  const [querys, setQuerys] = useState({
    page: 0,
    price: "",
    category: "",
    title: "",
    order: "",
    orderType: "",
  });

  const getProductsHandler = async () => {
    try {
      const reponse = await axios.get(
        `/products?title=${querys.title}&price=${querys.price}&order=${querys.order}&orderType=${querys.orderType}&pagina=${querys.page}`
      );
      return reponse.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isError, error, isloading } = useQuery({
    queryKey: ["getProducts", querys.page],
    queryFn: getProductsHandler,
  });

  const handlersetPage = (page) => {
    setQuerys({ ...querys, page: page });
  };

  const handlerNextPage = () => {
    if (data && data.siguientePagina === null) return;
    setQuerys({ ...querys, page: querys.page + 1 });
  };
  const handlerPrevPage = () => {
    if (data && data.paginaAnterior === null) return;

    setQuerys({ ...querys, page: querys.page - 1 });
  };

  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
      <span className="mt-3 text-sm text-gray-500">200+ Products</span>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {data &&
          data.data.map((product) => {
            return (
              <CardProduct
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                amount={product.amount}
              />
            );
          })}
      </div>
      <Pagination
        handlerNextPage={handlerNextPage}
        handlerPrevPage={handlerPrevPage}
        data={data}
        querys={querys}
        handlersetPage={handlersetPage}
      />
    </div>
  );
};

export default CardsProducts;
