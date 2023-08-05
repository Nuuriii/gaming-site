import { LoopPath } from "./LoopPath";
import { LearningPath } from "./learningData";
import { Container } from "../heroSections/Hero.style";
import { WrapperPath, InformationPath } from "./Choose.style";

export const ChoosePath = () => {
   return (
      <Container>
         <WrapperPath>
            <InformationPath>
               <h2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
               </h2>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
               </p>
            </InformationPath>
            <LoopPath pathData={LearningPath} />
         </WrapperPath>
      </Container>
   );
};
