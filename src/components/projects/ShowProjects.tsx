import { Image } from "./Image";
import { LoopImage } from "./LoopImage";
import { Container } from "../heroSections/Hero.style";
import { Button } from "../trendingGame/Trending.style";
import { MainProjects, DescriptionProject } from "./Projects.style";

export const ShowProjects = () => {
   return (
      <Container>
         <MainProjects>
            <DescriptionProject>
               <h1>Our Recent Projects</h1>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
               </p>
            </DescriptionProject>
            <LoopImage projectData={Image} />
            <Button>SEE ALL</Button>
         </MainProjects>
      </Container>
   );
};
