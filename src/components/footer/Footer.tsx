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
               <FooterAbout>
                  <h4>About Us</h4>
                  <a href='/'>Zeux</a>
                  <a href='/'>Portfolio</a>
                  <a href='/'>Careers</a>
                  <a href='/'>Contact Us</a>
               </FooterAbout>
               <FooterContact>
                  <h4>Contact Us</h4>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.{" "}
                  </p>
                  <p>+908 89097 890</p>
               </FooterContact>
               <FooterSocialMed></FooterSocialMed>
            </FooterInformation>
            <div></div>
         </FooterWrapper>
      </Container>
   );
};
