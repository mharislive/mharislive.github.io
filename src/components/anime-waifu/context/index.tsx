import { createContext, useEffect, useState } from "react";
import getData, { GetWaifuResponse } from "../services/getData";
import { CATEGORIES } from "../constants";

export type WaifuProviderType = GetWaifuResponse & {
  category: string;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
};

export const WaifuContext = createContext<WaifuProviderType>({
  data: [],
  error: null,
  category: CATEGORIES[0],
  categories: CATEGORIES,
});

const WaifuProvider = ({ children, categories }: any) => {
  const [waifuData, setWaifuData] = useState<GetWaifuResponse>({ data: [], error: null });
  const [category, setCategory] = useState(categories[0]);
  const { data, error } = waifuData;

  useEffect(() => {
    const init = async () => {
      const { data, error } = await getData(category);
      setWaifuData({ data, error });
    };

    init();
  }, [category]);

  return (
    <WaifuContext.Provider value={{ data, error, category, setCategory, categories }}>{children}</WaifuContext.Provider>
  );
};

export default WaifuProvider;
