import { SosmedIMG } from "./Footer.style";

interface ImageProps {
   img: string;
}

const ImageProps = ({ img }: ImageProps) => {
   return (
      <>
         <SosmedIMG src={img} alt='icon' />
      </>
   );
};

export default ImageProps;
