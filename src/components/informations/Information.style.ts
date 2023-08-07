import styled from "styled-components";

export const WrapperInfo = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 3rem 0rem;
   background: linear-gradient(to bottom, rgb(106, 78, 209), rgb(71, 29, 187));
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: auto;
   }
`;

export const FirstInfo = styled.div`
   display: flex;
   font-family: Poppins, sans;
   color: white;
   padding: 0 5rem;
   text-align: center;
   font-weight: 600;
   margin: 0 0 4rem 0;
`;

export const SecondInfo = styled.div`
   color: white;
   font-family: Poppins, sans;
   display: flex;
   width: 92%;
   padding: 0 0rem;
   flex-direction: column;
   align-items: start;
   h3 {
      margin: 0 0 1rem 0;
      padding: 0;
   }
   p {
      width: 40rem;
   }
`;

export const ThirdInfo = styled.div`
   display: flex;
   margin: 2rem 0 2rem 0;
`;
