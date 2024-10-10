import Button from "../Button/Button";
import css from "./Search.module.css";

interface SearchProps {
  onSubmit: () => void;
}

const Search: React.FC<SearchProps> = ({ onSubmit }) => {
  return (
    <div className={css.box}>
      <Button type="button" onClick={onSubmit} text="Find cats" />
    </div>
  );
};
export default Search;
