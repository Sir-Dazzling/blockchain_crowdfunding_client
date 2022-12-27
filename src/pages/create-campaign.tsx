import { useState } from "react";
import Layout from "../components/layout";

export default function CreateCampaign() {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [imageUri, setImaegeUri] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Layout title="CrowdFunding | Create Campaign">
      <div>Create a campaign</div>
    </Layout>
  );
}
