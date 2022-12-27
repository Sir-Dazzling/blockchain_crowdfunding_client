import { createSlice } from "@reduxjs/toolkit";
import { GeneralAppState, PayloadType } from "./../../interfaces/general";
import { RootState } from "./../index";

const initialState: GeneralAppState = {
  mobileNavBarOpen: false,
  activeLink: "home",
};

export const generalAppSlice = createSlice({
  name: "general",
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

export const { toggleMobileNavbar, setActiveLink } = generalAppSlice.actions;
export const generalAppSelector = (state: RootState) => state.general;
export default generalAppSlice.reducer;
