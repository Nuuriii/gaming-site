import {
   Wrapper,
   Description,
   FirstText,
   Title,
   SecondText,
   ButtonWrapper,
   Button,
   ImageWrapper,
} from "./Hero.style";
import Stick from "../../../public/Stick.svg";

export const Hero = () => {
   return (
      <div>
         <Wrapper>
            <Description>
               <FirstText>Proved By prodesigner</FirstText>
               <Title>Work that we produce for our clients</Title>
               <SecondText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
               </SecondText>
               <ButtonWrapper>
                  <Button>Get more details</Button>
               </ButtonWrapper>
            </Description>
            <ImageWrapper>
               <img src={Stick} alt='' />
            </ImageWrapper>
         </Wrapper>
      </div>
   );
};
