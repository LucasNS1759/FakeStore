import "./App.css";
import DetailProduct from "./Components/DetailProduct/DetailProduct";
import Login from "./Components/Login/Login";
import Logueado from "./Components/Logueado";
import ProductsListPage from "./Components/ProductsListPage/ProductsListPage";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//local
// axios.defaults.baseURL = "http://localhost:3001";

// deploy 
axios.defaults.baseURL = "https://fakestore-hiqs.onrender.com";


const App = () => {
  return (
    <Routes>
      <Route path="/ProductsPage" element={<ProductsListPage />} />
      <Route path="/detailProdut/:id" element={<DetailProduct />} />
      <Route path="/logueado" element={<Logueado />} />
      <Route path="/singUp" element={<Login/>}/>
      
      
    </Routes>
  );
};

export default App;
