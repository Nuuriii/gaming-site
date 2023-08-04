import Image from "./Image";

interface ImageLooProps {
   loop: Image[];
}

export const ImageLoop = ({ loop }: ImageLooProps) => {
   return (
      <div>
         {loop.map((item, index) => (
            <div key={index}>
               <Image
                  game={item.game}
                  followers={item.followers}
                  icon={item.icon}
               />
            </div>
         ))}
      </div>
   );
};
