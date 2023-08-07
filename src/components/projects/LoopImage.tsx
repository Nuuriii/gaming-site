import Projects from "./Projects";
import { ProjectWrapper, ProjectContainer } from "./Projects.style";

interface ProjectProps {
   projectData: Projects[];
}

export const LoopImage = ({ projectData }: ProjectProps) => {
   return (
      <ProjectContainer>
         {projectData.map((item, index) => (
            <ProjectWrapper key={index}>
               <Projects image={item.image} />
            </ProjectWrapper>
         ))}
      </ProjectContainer>
   );
};
