import React from "react";
import { DisplayCampaignsProps, ParsedCampaignsType } from "../../interfaces/campaign";
import { useRouter } from "next/router";
import CustomLoader from "../custom-loader";
import FundCard from "./fund-card";
import PAGES from "../../helpers/page-names";

const DisplayCampaigns: React.FC<DisplayCampaignsProps> = ({ campaigns, isLoading, title }) => {
  const router = useRouter();

  const handleNavigate = (campaign: ParsedCampaignsType) => {
    router.push(`${PAGES.CAMPAIGN_DETAILS}/${campaign.title}`);
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-lg text-white text-left">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-5 gap-[26px]">
        {isLoading && <CustomLoader message="Fetching Campaigns" />}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-sm leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard key={campaign.pId} {...campaign} action={() => handleNavigate(campaign)} />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
