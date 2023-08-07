interface Projects {
   image: string;
}

const Projects = ({ image }: Projects) => {
   return (
      <div>
         <img src={image} alt='' />
      </div>
   );
};

export default Projects;
