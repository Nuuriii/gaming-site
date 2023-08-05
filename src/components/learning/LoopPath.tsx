import Path from "./Path";

interface Paths {
   pathData: Path[];
}

export const LoopPath = ({ pathData }: Paths) => {
   return (
      <div>
         {pathData.map((item, index) => (
            <div key={index}>
               <Path img={item.img} title={item.title} icon={item.icon} />
            </div>
         ))}
      </div>
   );
};
