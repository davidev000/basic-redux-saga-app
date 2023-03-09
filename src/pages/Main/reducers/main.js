import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    loading: false,
    errorMsg: null,
    data: [],
  },
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchError: (state, action) => {
      state.errorMsg = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, fetchSuccess, fetchError, fetchData } =
  mainSlice.actions;

export default mainSlice.reducer;
