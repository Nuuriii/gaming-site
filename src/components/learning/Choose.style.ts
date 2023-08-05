import styled from "styled-components";

export const WrapperPath = styled.div`
   display: flex;
   flex-direction: column;
   background-image: url("../../../public/background.svg");
   min-height: 500px;
   justify-content: center;
   width: 100vw;
`;

export const InformationPath = styled.div`
   display: flex;
   color: white;
   flex-direction: column;
   margin-bottom: 3rem;
   h2 {
      text-align: center;
   }
   p {
      text-align: center;
   }
`;
