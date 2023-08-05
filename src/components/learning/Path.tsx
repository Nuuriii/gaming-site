import styled from "styled-components";

const ImageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

interface Path {
   img: string;
   title: string;
   icon: string;
}

const Path = ({ img, title, icon }: Path) => {
   return (
      <ImageWrapper>
         <img src={img} alt='imagePath' />
         <p>{title}</p>
         <img src={icon} alt='icon' />
      </ImageWrapper>
   );
};

export default Path;
