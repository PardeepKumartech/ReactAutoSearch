import { createSlice } from "@reduxjs/toolkit";

const AutoComplete = createSlice({
  name: "AutoComplete",
  initialState: {
    loading: false,
    error: false,
    success: false,
    addresses: [
      { value: "1342 Ferrell Street, MN" },
      { value: "1825 Tipple Road, PN" },
      { value: "2969 May Street, GO" },
    ],
    selectedAddresses: [],
  },
  reducers: {
    inputCall: (state) => {
      state.loading = true;
    },
    inputSuccess: (state, action) => {
      state.loading = false;
      state.selectedAddresses = [...state.selectedAddresses, action.payload];
      state.success = action.payload.message;
      state.error = false;
    },
    inputError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { inputCall, inputSuccess, inputError } = AutoComplete.actions;

export default AutoComplete.reducer;
