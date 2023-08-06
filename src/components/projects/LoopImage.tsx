import Projects from "./Projects";

interface ProjectProps {
   projectData: Projects[];
}

export const LoopImage = ({ projectData }: ProjectProps) => {
   return (
      <div>
         {projectData.map((item, index) => (
            <div key={index}>
               <Projects image={item.image} />
            </div>
         ))}
      </div>
   );
};
