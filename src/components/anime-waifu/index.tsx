import { CATEGORIES } from "./constants";
import WaifuProvider from "./context";
import Header from "./header";
import WaifuList from "./waifu-list";

const AnimeWaifu = ({ categories = CATEGORIES }: { categories?: string[] }) => {
  return (
    <WaifuProvider categories={categories}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <WaifuList />
      </div>
    </WaifuProvider>
  );
};

export default AnimeWaifu;
