import styled from "styled-components";

export const NavWrapper = styled.div`
   background: linear-gradient(to bottom, rgb(71, 29, 187), rgb(70, 36, 192));
   display: flex;
   font-family: sans-serif;
   color: white;
   width: 100vw;
   z-index: 1;
   padding: 1rem 3rem;
   backdrop-filter: blur(5px);
   position: fixed;
   justify-content: space-between;
`;

export const BrandLogo = styled.div`
   display: flex;
`;

export const Navigation = styled.ul`
   display: flex;
   align-items: center;
   a {
      margin-right: 6.2rem;
      text-decoration: none;
      color: white;
   }
`;

export const ButtonsContact = styled.button`
   color: white;
   border: none;
   border-radius: 0.4rem;
   padding: 0.5rem 1rem;
   background-color: #fa9021;
`;
