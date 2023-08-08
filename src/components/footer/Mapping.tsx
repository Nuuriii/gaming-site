import ImageProps from "./ImgProps";
import { IMG } from "./Footer.style";

interface MappImg {
   imgMap: ImageProps[];
}

export const Mapping = ({ imgMap }: MappImg) => {
   return (
      <>
         {imgMap.map((item, index) => (
            <IMG key={index}>
               <ImageProps img={item.img} />
            </IMG>
         ))}
      </>
   );
};
