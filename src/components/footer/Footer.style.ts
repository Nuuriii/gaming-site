import styled from "styled-components";

export const FooterWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   padding: 4rem 2rem;
   background-color: #070707;
`;

export const FooterText = styled.p`
   color: white;
   font-family: sans;
`;

export const FooterDescription = styled.div`
   display: flex;
   justify-content: center;
`;

export const FooterInformation = styled.div`
   display: flex;
   font-family: sans;
   flex-direction: column;
   color: white;
   width: 30%;
   h1 {
      margin: 0;
      padding: 0;
   }
   > ${FooterText} {
      margin: 1rem 0 1rem 0;
      padding: 0;
   }
`;

export const FooterAbout = styled.div`
   display: flex;
   color: white;
   font-family: sans;
   flex-direction: column;
   width: 10%;
   h4 {
      margin: 0 0 0.9rem 0;
   }
   a {
      margin: 0 0 0.2rem 0;
      text-decoration: none;
      color: white;
   }
   a:hover {
      text-decoration: underline;
   }
`;

export const FooterContact = styled.div`
   display: flex;
   color: white;
   width: 30%;
   font-family: sans;
   flex-direction: column;
   h4 {
      margin-bottom: 0.9rem;
   }
   p {
      margin: 0 0 0.9rem 0;
   }
`;

export const FooterSocialMed = styled.div`
   display: flex;
   color: white;
   align-items: end;
   p {
      margin-right: 0.3rem;
   }
`;
