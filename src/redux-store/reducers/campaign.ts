import { createSlice } from "@reduxjs/toolkit";
import { GeneralAppState, PayloadType } from "../../interfaces/general";
import { RootState } from "../index";
import { CampaignState } from "../../interfaces/campaign";

const initialState: CampaignState = {
  activeCampaign: null,
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setActiveCampaign: (state: CampaignState, { payload }: PayloadType) => {
      state.activeCampaign = payload.data;
    },
  },
});

export const { setActiveCampaign } = campaignSlice.actions;
export const campaignSelector = (state: RootState) => state.campaign;
export default campaignSlice.reducer;
