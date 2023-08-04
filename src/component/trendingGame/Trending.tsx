import { Container, Wrapper } from "../heroSections/Hero.style";
import { ImageData } from "./ImageData";
import { ImageLoop } from "./ImageLoop";

export const Trending = () => {
   return (
      <Container>
         <Wrapper>
            <ImageLoop loop={ImageData} />
         </Wrapper>
      </Container>
   );
};
