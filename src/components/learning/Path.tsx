interface Path {
   img: string;
   title: string;
   icon: string;
}

export const Path = ({ img, title, icon }: Path) => {
   return (
      <div>
         <img src={img} alt='imagePath' />
         <p>{title}</p>
         <img src={icon} alt='icon' />
      </div>
   );
};
