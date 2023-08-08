import React from "react";
import ImageProps from "./ImgProps";

interface MappImg {
   imgMap: ImageProps[];
}

export const Mapping = ({ imgMap }: MappImg) => {
   return (
      <>
         {imgMap.map((item, index) => (
            <div key={index}>
               <ImageProps img={item.img} />
            </div>
         ))}
      </>
   );
};
