import { useState } from "react";
import HeaderProductsPage from "../HeaderProductsPage/HeaderProductsPage";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import CardsProducts from "../CardsProducts/CardsProducts";

const ProductsListPage = () => {
  const [sideBarOpen, setSiderBarOpne] = useState(false);
  return (
    <>
      <div className="bg-white flex flex-col flex-grow min-h-screen">
        <HeaderProductsPage
          sideBarOpen={sideBarOpen}
          setSiderBarOpne={setSiderBarOpne}
        />
        <SideBar sideBarOpen={sideBarOpen} setSiderBarOpne={setSiderBarOpne} />
        <main className="my-8">
          <CardsProducts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductsListPage;
