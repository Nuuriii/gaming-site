import styled from "styled-components";

//for Projects Component
export const ImageProjects = styled.div`
   display: flex;
`;

//for LoopImage Component
export const ProjectWrapper = styled.div`
   display: flex;
   margin: 0.7rem;
`;

export const ProjectContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

//style for ShowProjects Component
export const MainProjects = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: linear-gradient(to bottom, rgb(106, 78, 209), rgb(71, 29, 187));
   width: 100vw;
   justify-content: center;
`;

export const DescriptionProject = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: sans;
   color: white;
`;
