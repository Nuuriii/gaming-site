import { Container } from "../heroSections/Hero.style";
import { NavWrapper, BrandLogo, Navigation } from "./Navbar.style";

export const Navbar = () => {
   return (
      <Container>
         <NavWrapper>
            <BrandLogo>logo</BrandLogo>
            <Navigation>
               <a href=''>Home</a>
               <a href=''>About Us</a>
               <a href=''>Portfolio</a>
               <a href=''>News</a>
               <button>Contact Us</button>
            </Navigation>
         </NavWrapper>
      </Container>
   );
};
