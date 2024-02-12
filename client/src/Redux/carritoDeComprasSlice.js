import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCompra: "",
};

export const carritoDeComprasSlice = createSlice({
  name: "carritoDeCompras",
  initialState,
  reducers: {
    agregarProducto: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { agregarProducto } = carritoDeComprasSlice.actions;
export default carritoDeComprasSlice.reducer;
