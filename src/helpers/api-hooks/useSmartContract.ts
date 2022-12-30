import { useDispatch } from "react-redux";
import { RequiredParam, useAddress, useContract, useContractWrite, useMetamask } from "@thirdweb-dev/react";
import { ValidContractInstance } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import PAGES from "../page-names";
import { PublishCampaignType } from "./../../interfaces/campaign";
import { setActiveLink } from "../../redux-store/reducers/general";

export const useConnectWallet = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const address = useAddress();
  const connect = useMetamask();

  return { contract, address, connect };
};

export const usePublishCampaign = (contract: RequiredParam<ValidContractInstance>) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign");

  const publishCampaign = async ({ address, formData }: PublishCampaignType) => {
    try {
      const result = await createCampaign([
        address,
        formData.title,
        formData.description,
        formData.target,
        new Date(formData.deadline).getTime(),
        formData.imageUri,
      ]);
      console.log("Contract call success ", result);
      router.push(PAGES.HOME);
      dispatch(setActiveLink({ data: "home" }));
    } catch (error: any) {
      console.log("Contract call failure ", error?.message);
    }
  };

  return { publishCampaign, isLoading };
};
