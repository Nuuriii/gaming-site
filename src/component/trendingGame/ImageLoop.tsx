import Image from "./Image";
import { ListWrapper } from "./Trending.style";

interface ImageLooProps {
   loop: Image[];
}

export const ImageLoop = ({ loop }: ImageLooProps) => {
   return (
      <ListWrapper>
         {loop.map((item, index) => (
            <li key={index}>
               <Image
                  game={item.game}
                  followers={item.followers}
                  icon={item.icon}
               />
            </li>
         ))}
      </ListWrapper>
   );
};
