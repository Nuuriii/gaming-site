import styled from "styled-components";

export const SubscribeWrapper = styled.div`
   display: flex;
   background: linear-gradient(to bottom, rgb(71, 29, 187), rgb(106, 78, 209));
   width: 100%;
   align-items: center;
   flex-direction: column;
   padding: 0 0 9rem 0;
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: auto;
   }
`;

export const SubscribeInformation = styled.div`
   display: flex;
   flex-direction: column;
   width: 80%;
   margin: 0 0 3rem 0;
   color: white;
   font-family: sans;
   h2 {
      margin-bottom: 1rem;
   }
`;

export const SubscribeForm = styled.div`
   display: flex;
   background-color: #1c140f;
   border-radius: 0%.3rem;
   align-items: center;
   justify-content: space-between;
   padding: 1.9rem 1.6rem;
   border-radius: 0.8rem;
`;

export const FormInformation = styled.div`
   display: flex;
   flex-direction: column;
   color: white;
   width: 50%;
   font-family: sans;
   h2 {
      margin: 0 0 0.8rem 0;
   }
`;

export const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 1rem;
   height: 70%;
   background-color: white;
   border-radius: 0.5rem;
   justify-content: space-between;
`;

export const SubscribeInput = styled.input`
   border: none;
   padding: 0.6rem 0.9rem;
   width: 60%;
   border-radius: 0.5rem;
   &:focus {
      outline: 2px solid black;
   }
`;

export const SubscribeButtons = styled.button`
   background-color: #dc7000;
   border-radius: 0.5rem;
   color: #fff;
   font-weight: 700;
   border: none;
   padding: 0.6rem 0.9rem;
   &:hover {
      transform: scale(1.064);
   }
   &:active {
      transform: scale(0.9);
   }
`;
