import { ImageContainer, GameImage, InformationGame } from "./Trending.style";

interface Image {
   game: string;
   followers: number;
   icon: string;
}

const Image = ({ game, followers, icon }: Image) => {
   return (
      <ImageContainer>
         <GameImage>
            <img src={game} alt='' />
         </GameImage>
         <InformationGame>
            <img src={icon} alt='' />
            <p>{followers} Followers</p>
         </InformationGame>
      </ImageContainer>
   );
};

export default Image;
