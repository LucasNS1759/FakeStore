import { configureStore } from "@reduxjs/toolkit";

// importacion de los Slices

import { carritoDeComprasSlice } from "../Redux/carritoDeComprasSlice";

export default configureStore({
  reducer: {
    carritoDeComprasSlice: carritoDeComprasSlice.reducer,
  },
});
