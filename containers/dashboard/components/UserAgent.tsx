import { DashboardElement } from "components/molecules/DashboardElement";
import { BrowserInfo } from "components/molecules/BrowserInfo/BrowserInfo";
import { useEffect, useState } from "react";

const getDescription = () =>
  typeof window !== "undefined"
    ? window.navigator && window.navigator.userAgent
    : "";

const UserAgent: React.FC = () => {
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    setDescription(getDescription());
  }, []);

  return (
    <DashboardElement
      description={description}
      flex="flex-[1_0_20%]"
      shouldDisplayCorners
      title="User Agent"
    >
      <BrowserInfo />
    </DashboardElement>
  );
};

export { UserAgent };
