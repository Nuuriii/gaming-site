import styled from "styled-components";

export const SubscribeWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 0 3rem 0;
`;

export const SubscribeInformation = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SubscribeForm = styled.div`
   display: flex;
   background-color: #1c140f;
   border-radius: 0%.3rem;
   justify-content: space-between;
   padding: 1.2rem 1.6rem;
   border-radius: 0.8rem;
`;

export const FormInformation = styled.div`
   display: flex;
   flex-direction: column;
   color: white;
   width: 50%;
   font-family: sans;
`;

export const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 1rem;
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
   border: none;
   padding: 0.6rem 0.9rem;
`;
