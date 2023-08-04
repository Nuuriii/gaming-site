interface Image {
   game: string;
   followers: number;
   icon: string;
}

const Image = ({ game, followers, icon }: Image) => {
   return (
      <div>
         <div>
            <img src={game} alt='' />
         </div>
         <div>
            <img src={icon} alt='' />
            <p>{followers} Followers</p>
         </div>
      </div>
   );
};

export default Image;
