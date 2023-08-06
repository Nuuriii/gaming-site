import { Image } from "./Image";
import { LoopImage } from "./LoopImage";

export const ShowProjects = () => {
   return (
      <div>
         <LoopImage projectData={Image} />
      </div>
   );
};
