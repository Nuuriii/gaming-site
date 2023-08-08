interface ImageProps {
   img: string;
}

const ImageProps = ({ img }: ImageProps) => {
   return (
      <>
         <img src={img} alt='icon' />
      </>
   );
};

export default ImageProps;
