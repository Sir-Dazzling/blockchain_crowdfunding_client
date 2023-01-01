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

export interface ParsedCampaignsType {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: string;
  imageUri: string;
  pId: number;
}

export interface DisplayCampaignsProps {
  campaigns: ParsedCampaignsType[];
  title: string;
  isLoading: boolean;
}

export interface FundCardProps {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: string;
  imageUri: string;
  pId: number;
  action: () => void;
}

export interface CampaignState {
  activeCampaign: ParsedCampaignsType | null;
}
