import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { ListOfCommits } from "components/molecules/ListOfCommits/ListOfCommits";
import { CommitsState } from "hooks/@types/useCommits";

import { useCommits } from "hooks/useCommits";

const DashboardContainerCommits: React.FC = () => {
  const { commitsList, commitsState } = useCommits();

  return (
    <ContentFrame
      shouldDisplayCorners={commitsState === CommitsState.Error}
      title="Commits"
      themeClasses={{
        container: {
          flex: "flex-[1_0_20%]",
          overflow: "overflow-hidden"
        }
      }}
    >
      <ListOfCommits commitsList={commitsList} commitsState={commitsState} />
    </ContentFrame>
  );
};

export { DashboardContainerCommits };
