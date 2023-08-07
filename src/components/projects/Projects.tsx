import { ImageProjects } from "./Projects.style";

interface Projects {
   image: string;
}

const Projects = ({ image }: Projects) => {
   return (
      <ImageProjects>
         <img src={image} alt='' />
      </ImageProjects>
   );
};

export default Projects;
