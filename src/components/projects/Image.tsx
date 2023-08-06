import React from "react";

interface ImageProps {
   image: string;
}

export const Image = ({ image }: ImageProps) => {
   return (
      <>
         <img src={image} alt='' />
      </>
   );
};
