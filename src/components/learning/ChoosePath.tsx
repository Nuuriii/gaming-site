import { LoopPath } from "./LoopPath";
import { LearningPath } from "./learningData";

export const ChoosePath = () => {
   return (
      <div>
         <LoopPath pathData={LearningPath} />
      </div>
   );
};
