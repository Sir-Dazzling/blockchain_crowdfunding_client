import { ethers } from "ethers";
import Image from "next/image";
import React, { useState } from "react";
import MoneyIcon from "../../public/svgs/money.svg";
import CustomButton from "../components/custom-button";
import CustomInput from "../components/custom-input";
import Layout from "../components/layout";
import { useConnectWallet, usePublishCampaign } from "../helpers/api-hooks/useSmartContract";
import { checkImage } from "../helpers/utils";
import { CreateCampaignFormType } from "../interfaces/campaign";

const Form = () => {
  const [formState, setFormState] = useState<CreateCampaignFormType>({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    imageUri: "",
  });
  const { contract, address } = useConnectWallet();
  const { publishCampaign, isLoading } = usePublishCampaign(contract);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkImage(formState.imageUri, async (exists) => {
      if (exists) {
        await publishCampaign({
          address,
          formData: { ...formState, target: ethers.utils.parseUnits(formState.target as string, 18) as any },
        });
      } else {
        alert("Provide valid image url");
        setFormState({ ...formState, imageUri: "" });
      }
    });
  };

  return (
    <form className="w-full mt-[65px] flex flex-col gap-[30px]">
      {isLoading && <p className="text-white">loading</p>}
      <div className="flex flex-wrap gap-[40px]">
        <CustomInput
          name="name"
          action={handleChange}
          label="Your Name *"
          placeholder="John Doe"
          type="text"
          value={formState.name}
        />
        <CustomInput
          name="title"
          action={handleChange}
          label="Campaign Title *"
          placeholder="Write a title"
          type="text"
          value={formState.title}
        />
      </div>
      <CustomInput
        name="description"
        action={handleChange}
        label="Story *"
        placeholder="Write your story"
        value={formState.description}
        isTextArea
      />

      <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
        <Image src={MoneyIcon} alt="Money" className="w-10 h-10 object-contain" />
        <h4 className="font-epilogue font-bold text-[25px] text-white ml-5">You will get 100% of the raised amount</h4>
      </div>

      <div className="flex flex-wrap gap-[40px]">
        <CustomInput
          name="target"
          action={handleChange}
          label="Goal *"
          placeholder="ETH 0.50"
          type="text"
          value={formState.target}
        />
        <CustomInput
          name="deadline"
          action={handleChange}
          label="End Date *"
          placeholder="End date"
          type="date"
          value={formState.deadline}
        />
        <CustomInput
          name="imageUri"
          action={handleChange}
          label="Campaign Image *"
          placeholder="Place image URL of your campaign"
          type="text"
          value={formState.imageUri}
        />
      </div>

      <div className="flex justify-center items-center mt-10">
        <CustomButton title="Submit new campaign" action={handleSubmit} type="submit" styles="bg-[#1dc071]" />
      </div>
    </form>
  );
};

export default function CreateCampaign() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Layout title="CrowdFunding | Create Campaign">
      <div className="bg-[#1c1c24] flex flex-col justify-center items-center rounded-[10px] sm:p-10 p-4">
        {isLoading && "Loader..."}
        <div className="flex justify-center items-center p-4 sm:min-w-[380px] bg-[#313143] rounded-[10px]">
          <h1 className="font-epilogue font-bold sm:text-[25px] text-lg leading-[38px] text-white">Start a Campaign</h1>
        </div>
        <Form />
      </div>
    </Layout>
  );
}
