import { Container } from "../heroSections/Hero.style";
import {
   NavWrapper,
   BrandLogo,
   Navigation,
   ButtonsContact,
} from "./Navbar.style";

export const Navbar = () => {
   return (
      <Container>
         <NavWrapper>
            <BrandLogo>
               <h1>LOGO</h1>
            </BrandLogo>
            <Navigation>
               <a href=''>Home</a>
               <a href=''>About Us</a>
               <a href=''>Portfolio</a>
               <a href=''>News</a>
               <ButtonsContact>Contact Us</ButtonsContact>
            </Navigation>
         </NavWrapper>
      </Container>
   );
};
