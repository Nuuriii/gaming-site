import styled from "styled-components";
import Background from "../../../public/background.svg";

export const WrapperPath = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
   display: flex;
   flex-direction: column;
   background-image: url(${Background});
   min-height: 500px;
   padding: 0 4rem;
   background-attachment: fixed;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   justify-content: center;
   align-items: center;
   width: 100vw;
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: 44rem;
   }
`;

export const InformationPath = styled.div`
   display: flex;
   color: white;
   font-family: Poppins, "sans";
   flex-direction: column;
   padding: 5rem 0 0 0;
   margin-bottom: 3rem;
   h2 {
      text-align: center;
   }
   p {
      text-align: center;
   }
`;
