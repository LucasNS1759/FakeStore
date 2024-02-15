import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Logueado = () => {

  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");

  useEffect(() => {
    window.localStorage.setItem("userId", (userId));
  }, [userId]);
  return (
    <div>Logueado</div>
  )
}

export default Logueado