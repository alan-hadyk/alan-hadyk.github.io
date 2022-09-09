import { DashboardElement } from "components/molecules/DashboardElement";
import { ListOfCommits } from "components/molecules/ListOfCommits";

import { useCommits } from "hooks/useCommits";

const Commits: React.FC = () => {
  const { commitsList, commitsState } = useCommits();

  return (
    <DashboardElement
      dataCy="Commits"
      flex="flex-[1_0_20%]"
      shouldDisplayCorners={commitsState === "error"}
      title="Commits"
      titleOverflow="overflow-hidden"
    >
      <ListOfCommits commitsList={commitsList} commitsState={commitsState} />
    </DashboardElement>
  );
};
export { Commits };
