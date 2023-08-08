import { Container } from "../heroSections/Hero.style";
import {
   FooterWrapper,
   FooterText,
   FooterDescription,
   FooterInformation,
   FooterAbout,
   FooterContact,
   FooterSocialMed,
} from "./Footer.style";

export const Footer = () => {
   return (
      <Container>
         <FooterWrapper>
            <FooterDescription>
               <FooterInformation>
                  <h1>LOGO</h1>
                  <FooterText>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </FooterText>
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
                  <FooterText>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.{" "}
                  </FooterText>
                  <FooterText>+908 89097 890</FooterText>
               </FooterContact>
               <FooterSocialMed>
                  <p>fb</p>
                  <p>ig</p>
                  <p>tw</p>
                  <p>lin</p>
               </FooterSocialMed>
            </FooterDescription>
            <div></div>
         </FooterWrapper>
      </Container>
   );
};
