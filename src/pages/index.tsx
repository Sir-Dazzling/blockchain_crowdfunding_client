import { useEffect } from "react";
import Layout from "../components/layout";
import { useConnectWallet, useGetCampaigns } from "../helpers/api-hooks/useSmartContract";
import DisplayCampaigns from "../components/campaign/display-campaigns";

export default function Home() {
  const { address, contract } = useConnectWallet();
  const { isLoading, campaigns } = useGetCampaigns(address as string, contract);

  return (
    <Layout title="CrowdFunding | Home">
      <DisplayCampaigns campaigns={campaigns} isLoading={isLoading} title="All Campaigns" />
    </Layout>
  );
}
