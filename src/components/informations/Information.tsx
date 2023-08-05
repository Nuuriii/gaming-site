import { Container } from "../heroSections/Hero.style";
import {
   WrapperInfo,
   FirstInfo,
   SecondInfo,
   ThirdInfo,
} from "./Information.style";
import Spiderman from "../../../public/Spiderman.svg";

export const Information = () => {
   return (
      <Container>
         <WrapperInfo>
            <FirstInfo>
               <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
               </h1>
            </FirstInfo>
            <SecondInfo>
               <h3>Lorem Ipsum</h3>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
               </p>
            </SecondInfo>
            <ThirdInfo>
               <img src={Spiderman} alt='' />
            </ThirdInfo>
         </WrapperInfo>
      </Container>
   );
};
