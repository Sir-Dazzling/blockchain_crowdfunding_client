import { createSlice } from "@reduxjs/toolkit";
import { GeneralAppState, PayloadType } from "../../interfaces/general";
import { RootState } from "../index";

const initialState: GeneralAppState = {};

export const smartContractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    toggleMobileNavbar: (state: GeneralAppState, { payload }: PayloadType) => {
      state.mobileNavBarOpen = payload.data;
    },
    setActiveLink: (state: GeneralAppState, { payload }: PayloadType) => {
      state.activeLink = payload.data;
    },
  },
});

export const { toggleMobileNavbar, setActiveLink } = smartContractSlice.actions;
export const smartContractSelector = (state: RootState) => state.general;
export default smartContractSlice.reducer;
