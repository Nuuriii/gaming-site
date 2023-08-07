import Image from "./Image";
import { ListWrapper, ListImage } from "./Trending.style";

interface ImageLooProps {
   loop: Image[];
}

export const ImageLoop = ({ loop }: ImageLooProps) => {
   return (
      <ListWrapper>
         {loop.map((item, index) => (
            <ListImage key={index}>
               <Image
                  game={item.game}
                  followers={item.followers}
                  icon={item.icon}
               />
            </ListImage>
         ))}
      </ListWrapper>
   );
};
