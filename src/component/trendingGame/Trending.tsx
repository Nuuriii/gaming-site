import { Container } from "../heroSections/Hero.style";
import { Wrapper, Information, Button, ImageWrapper } from "./Trending.style";
import { ImageData } from "./ImageData";
import { ImageLoop } from "./ImageLoop";

export const Trending = () => {
   return (
      <Container>
         <Wrapper>
            <Information>
               <h3>Currently Trending Games</h3>
               <Button>See All</Button>
            </Information>
            <ImageWrapper>
               <ImageLoop loop={ImageData} />
            </ImageWrapper>
         </Wrapper>
      </Container>
   );
};
