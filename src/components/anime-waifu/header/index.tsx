import { useContext } from "react";
import { WaifuContext } from "../context";

const Header = () => {
  const { category, setCategory, categories } = useContext(WaifuContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <header className="flex flex-wrap flex-col items-center justify-center sm:flex-row sm:justify-between bg-slate-900 text-slate-200 p-3 shadow-sm shadow-slate-900 sticky top-0">
      <h1 className="text-xl">Anime Waifus</h1>
      <select
        className="text-slate-200 bg-slate-900 border rounded cursor-pointer capitalize"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeHandler(e)}
        value={category}
        aria-label="category"
      >
        {categories.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
