import { useEffect } from "react";

const Logueado = () => {
  useEffect(() => {
    window.localStorage.setItem("logueado", true);
  }, []);
  return <div>Logueado</div>;
};

export default Logueado;
