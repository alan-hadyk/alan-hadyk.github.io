import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { ListOfCommits } from "components/molecules/ListOfCommits";

import { useCommits } from "hooks/useCommits";

const Commits: React.FC = () => {
  const { commitsList, commitsState } = useCommits();

  return (
    <ContentFrame
      shouldDisplayCorners={commitsState === "error"}
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

export { Commits };
