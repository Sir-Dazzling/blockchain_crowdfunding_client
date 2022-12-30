import { BigNumber } from "ethers";

export interface CreateCampaignFormType {
  name: string;
  title: string;
  description: string;
  target: string | number;
  deadline: string;
  imageUri: string;
}

export interface PublishCampaignType {
  address: string | undefined;
  formData: CreateCampaignFormType;
}
