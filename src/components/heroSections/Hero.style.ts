import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   //width: 90vw;
`;

export const Wrapper = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
   display: flex;
   font-family: Poppins;
   height: 100vh;
   align-items: center;
   background: linear-gradient(to bottom, rgb(70, 36, 192), rgb(71, 29, 187));
   justify-content: center;
   width: 100vw;
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: 44rem;
   }
`;

export const Description = styled.div`
   display: flex;
   width: 50%;
   margin-right: 1rem;
   justify-content: center;
   font-family: sans;
   flex-direction: column;
`;

export const FirstText = styled.p`
   color: #e87d0e;
   font-weight: 700;
   font-size: 1rem;
`;

export const Title = styled.h1`
   color: white;
   width: 34rem;
   margin: 0;
   padding: 0.9rem 0;
   font-size: 3.8rem;
`;

export const SecondText = styled.p`
   color: white;
   width: 30rem;
   font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
   display: flex;
   padding: 1.9rem 0 0 0;
`;

export const Button = styled.button`
   color: white;
   background: linear-gradient(113deg, #fa8305 0%, #fb9e3c 100%);
   border: none;
   padding: 1rem;
   height: 100%;
   font-weight: 500;
   font-size: 1rem;
   border-radius: 1.4rem;
   &:hover {
      background: linear-gradient(113deg, #f79328 0%, #ff890a 100%);
      transform: scale(1.061);
   }
   &:active {
      transform: scale(0.96);
   }
`;
//end description style

export const ImageWrapper = styled.div`
   width: 50%;
   display: flex;
   justify-content: end;
   img {
      height: 36rem;
      @media screen and (min-width: 1680px) {
         width: 100%;
         height: 100%rem;
      }
   }
`;
