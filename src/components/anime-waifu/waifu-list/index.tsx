import { useContext } from "react";
import { WaifuContext } from "../context";

const WaifuList = () => {
  const { data, error } = useContext(WaifuContext);

  if (error) {
    return (
      <div className="flex justify-center items-center bg-slate-950 text-slate-200 flex-grow">
        <h2 className="text-xl">Something went wrong</h2>
      </div>
    );
  }

  return (
    <div className="sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-0 bg-slate-950 text-slate-200">
      {data.map((item: string, index: number) => (
        <img src={item} key={index} alt={`anime-{index}`} width="300" height="auto" className="w-full" />
      ))}
    </div>
  );
};

export default WaifuList;
