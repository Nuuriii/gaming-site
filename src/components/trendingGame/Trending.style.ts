import styled from "styled-components";

export const Wrapper = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
   display: flex;
   font-family: Poppins, sans;
   background: linear-gradient(to bottom, rgb(71, 29, 187), rgb(106, 78, 209));
   flex-direction: column;
   width: 100vw;
   padding: 4rem 2.5rem;
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: 44rem;
   }
`;

export const Information = styled.div`
   display: flex;
   justify-content: space-between;
   color: white;
   width: 100%;
   padding: 0 6rem;
   align-items: center;
`;

export const Button = styled.button`
   border: none;
   color: white;
   font-size: 1rem;
   border-radius: 0.3rem;
   font-weight: 500;
   padding: 0.6rem 1.3rem;
   background: rgb(51, 26, 163);
   &:hover {
      transform: scale(1.071);
   }
   &:active {
      transform: scale(0.96);
   }
`;

export const ImageWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
`;

export const ImageContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const GameImage = styled.div`
   display: flex;
   img {
      height: auto;
      width: 16rem;
   }
`;

export const InformationGame = styled.div`
   display: flex;
   margin-top: 0.7rem;
   align-items: center;
   justify-content: center;
   img {
      margin: 0 0.3rem 0 0;
   }
   p {
      color: white;
      font-family: Poppins, sans;
      font-weight: 500;
   }
`;

export const ListWrapper = styled.ul`
   display: flex;
   list-style: none;
`;

export const ListImage = styled.li`
   margin-right: 1.9rem;
   transition: all 0.3s;
   &:hover {
      opacity: 0.6;
      transition: all 0.3s;
      transform: scale(1.059);
   }
   &:hover ${ImageContainer} ${InformationGame} p {
      font-weight: bold;
   }
`;
