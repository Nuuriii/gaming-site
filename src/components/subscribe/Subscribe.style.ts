import styled from "styled-components";

export const SubscribeWrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SubscribeInformation = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SubscribeForm = styled.div`
   display: flex;
   background-color: #1c140f;
   border-radius: 0%.3rem;
   padding: 1rem;
`;

export const FormInformation = styled.div`
   display: flex;
   flex-direction: column;
   color: white;
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
