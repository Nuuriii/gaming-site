import styled from "styled-components";
import Path from "./Path";

const List = styled.li`
   display: flex;
   font-family: sans;
   margin-right: 2rem;
   margin-bottom: 3rem;
   padding: 1rem;
   justify-content: center;
   width: 17rem;
   &:hover {
      border-radius: 0.3rem;
      opacity: 0.69;
      font-weight: 500;
      transform: scale(1.1);
      background-color: rgb(43, 39, 39);
   }
   &:active {
      transform: scale(0.99);
   }
`;

const ListWrapper = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

interface Paths {
   pathData: Path[];
}

export const LoopPath = ({ pathData }: Paths) => {
   return (
      <ListWrapper>
         {pathData.map((item, index) => (
            <List key={index}>
               <Path img={item.img} title={item.title} icon={item.icon} />
            </List>
         ))}
      </ListWrapper>
   );
};
