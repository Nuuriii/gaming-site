import { Container } from "../heroSections/Hero.style";
import {
   FooterWrapper,
   FooterText,
   FooterDescription,
   FooterInformation,
   FooterAbout,
   FooterContact,
   FooterSocialMed,
   Copyright,
} from "./Footer.style";
import { FooterImg } from "./SaveImg";
import { Mapping } from "./Mapping";

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
                  <FooterText>@Logo</FooterText>
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
                  <Mapping imgMap={FooterImg} />
               </FooterSocialMed>
            </FooterDescription>
            <Copyright>
               <FooterText>
                  Copyright ® 2022 prodesigner All rights Rcerved
               </FooterText>
            </Copyright>
         </FooterWrapper>
      </Container>
   );
};
