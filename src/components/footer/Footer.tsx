import { Container } from "../heroSections/Hero.style";
import {
   FooterWrapper,
   FooterInformation,
   FooterAbout,
   FooterContact,
   FooterSocialMed,
} from "./Footer.style";

export const Footer = () => {
   return (
      <Container>
         <FooterWrapper>
            <FooterInformation>
               <FooterInformation>
                  <h1>LOGO</h1>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p>
                  <p>@Logo</p>
               </FooterInformation>
               <FooterAbout></FooterAbout>
               <FooterContact></FooterContact>
               <FooterSocialMed></FooterSocialMed>
            </FooterInformation>
            <div></div>
         </FooterWrapper>
      </Container>
   );
};
