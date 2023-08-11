import { Container } from "../heroSections/Hero.style";
import {
   NavWrapper,
   BrandLogo,
   Navigation,
   ButtonsContact,
} from "./Navbar.style";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
   return (
      <Container>
         <NavWrapper>
            <BrandLogo>
               <h1>LOGO</h1>
            </BrandLogo>
            <Navigation>
               <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                     isActive ? "active" : isPending ? "pending" : ""
                  }
               >
                  Home
               </NavLink>
               <NavLink to={"/about"}>About Us</NavLink>
               <a href=''>Portfolio</a>
               <a href=''>News</a>
               <ButtonsContact>Contact Us</ButtonsContact>
            </Navigation>
         </NavWrapper>
      </Container>
   );
};
